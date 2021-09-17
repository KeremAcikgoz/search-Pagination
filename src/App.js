import './App.css';
import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap'
import  Job  from './components/Job'
import Paging from './components/Paging';
import Search from './components/Search';


function App() {

  const [jobs, setJobs] = useState([]);
  const [jobName, setJobName] = useState("");
  const [page, setPage] = useState(1);
  const [city, setCity] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/jobs")
      .then((res) => res.json())
      .then((result) => setJobs(result));
  }, [jobs]);


  return (
    <Container className="container mt-4">
      <h1 className='title'>Job List</h1>
      <Search setJobName={setJobName} setCity={setCity} />
      <Paging page={page} setPage={setPage} />
      {jobName.length > 0 ? jobs.filter((val) => {
        if(jobName === "") {
          return val
        } else if (val.job.toLowerCase().includes(jobName.toLowerCase())) {
          return val
        }
      }).slice(page-1,page+10).map((job) => {
        return <Job key={job.id} job={job} />
      }): jobs.slice(page-1, page+10).map((job) => {
        return <Job key={job.id} job={job} />
      }) }
    </Container>
  );
}

export default App;
