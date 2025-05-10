// JobDetails.js
import { Calendar, MapPin, Send, ArrowRight } from 'lucide-react';

export default function JobDetails({ job }) {
  if (!job) {
    return
  }

  return (
    <div className="p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row items-start mb-6 gap-4">

         {/* if logo is not available*/}
         
        {/* <div className="w-16 h-16 flex-shrink-0 bg-gray-100 rounded-md flex items-center justify-center overflow-hidden">
          {job.logo ? (
            <img src={job.logo} alt="Company Logo" className="w-full h-full object-cover" />
          ) : (
            <div className="w-10 h-10 bg-gray-200 rounded"></div>
          )}
        </div> */} 

        <div className="flex-1">
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">{job.title || 'Job Title'}</h1>
          <p className="text-gray-600 text-sm sm:text-base">{job.company || 'Company Name'}</p>

          {job.location && (
            <div className="flex items-center mt-2 text-gray-600 text-sm">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{job.location}</span>
            </div>
          )}

          {job.updatedOn && (
            <div className="flex items-center mt-1 text-gray-600 text-sm">
              <Calendar className="w-4 h-4 mr-1" />
              <span>Updated On: {job.updatedOn}</span>
            </div>
          )}
        </div>

        <div className="flex sm:flex-row flex-col gap-2 sm:ml-auto w-full sm:w-auto">
          <button className="p-2 border rounded-md w-full sm:w-auto">
            <Calendar className="w-5 h-5 text-gray-500" />
          </button>
          <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition-colors w-full sm:w-auto">
            Quick Apply
          </button>
        </div>
      </div>

      {/* Sections below */}
      <div className="mt-8 border-l-4 border-red-500 pl-4">
        <h2 className="text-lg sm:text-xl font-medium text-gray-800">Job Description</h2>

        {job.responsibilities?.length > 0 && (
          <div className="mt-4">
            <h3 className="font-medium text-gray-700">Responsibilities:</h3>
            <ul className="list-disc pl-5 mt-2 space-y-2 text-sm text-gray-600">
              {job.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </div>
        )}

        {job.requirements?.length > 0 && (
          <div className="mt-4">
            <h3 className="font-medium text-gray-700">Requirements:</h3>
            <ul className="list-disc pl-5 mt-2 space-y-2 text-sm text-gray-600">
              {job.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Important dates */}
      <div className="mt-8 border-l-4 border-red-500 pl-4">
        <h2 className="text-lg sm:text-xl font-medium text-gray-800">Important dates & deadlines?</h2>

        {job.applicationDeadline && (
          <div className="mt-4 flex items-center gap-3">
            <Calendar className="w-6 h-6 text-gray-500" />
            <div className="text-sm">
              <div className="text-gray-600">Application Deadline</div>
              <div className="font-medium">{job.applicationDeadline}</div>
            </div>
          </div>
        )}
      </div>

      {/* Contact organizers */}
      <div className="mt-8 border-l-4 border-red-500 pl-4">
        <h2 className="text-lg sm:text-xl font-medium text-gray-800">Contact the organisers</h2>

        <div className="mt-4">
          <button className="flex items-center border border-gray-300 rounded-md px-4 py-2 text-gray-600 hover:bg-gray-50 w-full sm:w-auto">
            <Send className="w-5 h-5 mr-2" />
            <span>Send queries to organizers</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-8 border-l-4 border-red-500 pl-4">
        <h2 className="text-lg sm:text-xl font-medium text-gray-800">Additional Information</h2>

        {/* Each Info Card */}
        {job.location && (
          <InfoCard title="Job Location(s)" icon="/location.jpg">
            <p className="text-gray-600 mt-1 text-sm">{job.location}</p>
          </InfoCard>
        )}

        {job.experience && (
          <InfoCard title="Experience" icon="briefcase-or-office-bag-icon-in-red-and-yellow-color-vector.jpg">
            {job.experience.min !== undefined && (
              <p className="text-gray-600 mt-1 text-sm">Minimum: {job.experience.min} year</p>
            )}
            {job.experience.max !== undefined && (
              <p className="text-gray-600 text-sm">Maximum: {job.experience.max} years</p>
            )}
          </InfoCard>
        )}

        {job.salary && (
          <InfoCard title="Salary" icon="/download.png">
            <p className="text-gray-600 mt-1 text-sm">Salary: {job.salary}</p>
          </InfoCard>
      )}


        {job.workDays && (
          <InfoCard title="Work Detail" icon="/images.png">
            <p className="text-gray-600 mt-1 text-sm">Working Days: {job.workDays}</p>
          </InfoCard>
        )}

        {(job.jobType || job.jobTiming) && (
          <InfoCard title="Job Type/Timing" icon="/download.jpg">
            {job.jobType && <p className="text-gray-600 mt-1 text-sm">Job Type: {job.jobType}</p>}
            {job.jobTiming && <p className="text-gray-600 text-sm">Job Timing: {job.jobTiming}</p>}
          </InfoCard>
        )}

        {job.posted_on && (
          <InfoCard title="Posted On" icon="/Posted On.png">
            <p className="text-gray-600 mt-1 text-sm">Posted: {job.posted_on}</p>
          </InfoCard>
        )}

{job.link && (
  <InfoCard title="Job Link" icon="/download (2).png">
    <p className="text-gray-600 mt-1 text-sm">
      <a href={job.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
        View Job Posting
      </a>
    </p>
  </InfoCard>
)}


{job.skills && (
  <InfoCard title="Skills / Qualification" icon="/qualification.png">
    <p className="text-gray-600 mt-1 text-sm">{job.skills}</p>
  </InfoCard>
)}
        {job.perks?.length > 0 && (
          <InfoCard title="Perks" icon="/download (1).png" last>
            {job.perks.map((perk, index) => (
              <p key={index} className="text-gray-600 mt-1 text-sm">{perk}</p>
            ))}
          </InfoCard>
        )}
      </div>
    </div>
  );
}

function InfoCard({ title, icon, children, last }) {
  return (
    <div className={`mt-6 bg-white rounded-lg border border-gray-200 p-4 ${last ? 'mb-8' : ''}`}>
      <div className="flex flex-col sm:flex-row items-start gap-4">
        <div className="flex-grow">
          <h3 className="font-medium text-gray-800">{title}</h3>
          {children}
        </div>
        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-red-50 rounded-full flex items-center justify-center">
          <img src={icon} alt="Icon" className="w-10 h-10 object-contain" />
        </div>
      </div>
    </div>
  );
}
