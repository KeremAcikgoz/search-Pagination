import React from "react";
import Job from "./Job";

const Jobs = ({ jobName, jobs, page, city }) => {
  return (
    <div>
      {jobName.length > 0 || city.length > 0
        ? jobs
            .filter((job) => {
              if (jobName === "" /*&& city === ""*/) {
                return job;
              } else if (
                job.title.toLowerCase().includes(jobName.toLowerCase()) /*&& job.city.toLowerCase().includes(city.toLowerCase())*/
              ) {
                return job;
              }
            })
            .slice(page, page + 10)
            .map((job) => {
              return <Job key={job.id} job={job} />;
            })
        : jobs.slice(page, page + 10).map((job) => {
            return <Job key={job.id} job={job} />;
          })}
    </div>
  );
};

export default Jobs;
