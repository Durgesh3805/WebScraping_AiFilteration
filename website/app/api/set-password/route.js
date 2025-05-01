import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route'; // Relative import
import { Pool } from 'pg';
import bcrypt from 'bcryptjs'; // ✅ bcrypt needed

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export async function POST(req) {
  try {
    const session = await getServerSession(authOptions); // ✅ use authOptions
    if (!session) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    const { password } = await req.json(); // password from frontend

    const tempUserData = session.user;
    console.log('Temp user data:', tempUserData);

    if (!tempUserData) {
      return NextResponse.json({ error: 'User data not found' }, { status: 400 });
    }

    const { name, email, image, provider, providerAccountId } = tempUserData;
    console.log('User data:', { name, email, image, provider, providerAccountId });

    // 🛠 Important check
    if (!email || !password) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 🛠 If provider or providerAccountId missing, set defaults
    const providerValue = provider ?? 'credentials' ; // or "google", "github", etc.
    const providerAccountIdValue = providerAccountId ; // fallback

    const Password = await bcrypt.hash(password, 10);
console.log('Hashed password:', Password);
    const insertQuery = `
      INSERT INTO users (name, email, image, provider, provider_account_id, password)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING id
    `;
    const values = [name, email, image, providerValue, providerAccountIdValue, Password];

    const client = await pool.connect();
    try {
      const result = await client.query(insertQuery, values);
      const userId = result.rows[0].id;
      console.log('Insert values:', values);
      return NextResponse.json({ message: 'User created successfully', userId }, { status: 201 });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Error inserting user:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
