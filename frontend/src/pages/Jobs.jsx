import { useEffect, useState } from "react";
import { getJobListings } from "../api/api";

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchJobs() {
      const jobData = await getJobListings();
      setJobs(jobData);
    }
    fetchJobs();
  }, []);

  return (
    <div>
      <h2>Available Job Listings</h2>
      {jobs.length === 0 ? <p>No jobs available.</p> : (
        <ul>
          {jobs.map((job) => (
            <li key={job.id}>
              <h3>{job.title}</h3>
              <p><strong>Company:</strong> {job.company}</p>
              <p><strong>Location:</strong> {job.location}</p>
              <p>{job.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Jobs;
