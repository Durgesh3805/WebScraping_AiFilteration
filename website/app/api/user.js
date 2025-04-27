// pages/api/users.js
import db from '../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Extract data from request body
      const { 
        name, 
        age, 
        location, 
        experience_years, 
        ctc, 
        availability, 
        hourly_rate, 
        skills,
        description,
        avatar,
        experiences,
        education,
        certifications 
      } = req.body;

      // Insert user data
      const userResult = await db.query(
        `INSERT INTO users (
          name, age, location, experience_years, ctc, availability, hourly_rate, 
          skills, description, avatar
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id`,
        [name, age, location, experience_years, ctc, availability, hourly_rate, 
          JSON.stringify(skills), description, avatar]
      );
      
      const userId = userResult.rows[0].id;
      
      // Insert experiences
      if (experiences && experiences.length > 0) {
        for (const exp of experiences) {
          await db.query(
            `INSERT INTO experiences (
              user_id, company, title, start_date, end_date, location
            ) VALUES ($1, $2, $3, $4, $5, $6)`,
            [userId, exp.company, exp.title, exp.start_date, exp.end_date || null, exp.location]
          );
        }
      }
      
      // Insert education
      if (education && education.length > 0) {
        for (const edu of education) {
          await db.query(
            `INSERT INTO education (
              user_id, institution, degree, start_date, end_date
            ) VALUES ($1, $2, $3, $4, $5)`,
            [userId, edu.institution, edu.degree, edu.start_date, edu.end_date || null]
          );
        }
      }
      
      // Insert certifications
      if (certifications && certifications.length > 0) {
        for (const cert of certifications) {
          await db.query(
            `INSERT INTO certifications (
              user_id, name, issuer, date_issued
            ) VALUES ($1, $2, $3, $4)`,
            [userId, cert.name, cert.issuer, cert.date_issued]
          );
        }
      }

      res.status(201).json({ id: userId });
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ message: 'Error creating user profile' });
    }
  } else if (req.method === 'GET') {
    try {
      const { id } = req.query;
      
      // Get user data
      const userResult = await db.query('SELECT * FROM users WHERE id = $1', [id]);
      
      if (userResult.rows.length === 0) {
        return res.status(404).json({ message: 'User not found' });
      }
      
      const user = userResult.rows[0];
      
      // Get experiences
      const experiencesResult = await db.query(
        'SELECT * FROM experiences WHERE user_id = $1 ORDER BY start_date DESC', 
        [id]
      );
      user.experiences = experiencesResult.rows;
      
      // Get education
      const educationResult = await db.query(
        'SELECT * FROM education WHERE user_id = $1 ORDER BY start_date DESC', 
        [id]
      );
      user.education = educationResult.rows;
      
      // Get certifications
      const certificationsResult = await db.query(
        'SELECT * FROM certifications WHERE user_id = $1', 
        [id]
      );
      user.certifications = certificationsResult.rows;
      
      // Get similar profiles
      const similarProfilesResult = await db.query(
        `SELECT id, name, location, experience_years, avatar 
         FROM users 
         WHERE id != $1 
         ORDER BY experience_years DESC 
         LIMIT 3`,
        [id]
      );
      user.similarProfiles = similarProfilesResult.rows;
      
      res.status(200).json(user);
    } catch (error) {
      console.error('Error fetching user:', error);
      res.status(500).json({ message: 'Error fetching user profile' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}