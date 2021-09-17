import './App.css';
import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap'
import  Job  from './components/Job'
import Search from './components/Search';
import Pages from './components/Pages'
import Jobs from './components/Jobs';


function App() {


  const [jobs, setJobs] = useState([]);
  const [jobName, setJobName] = useState("");
  const [page, setPage] = useState(0);
  const [jobsPerPage, setJobsPerPage] = useState(10)
  const [city, setCity] = useState("");

  useEffect(() => {
    fetch("https://paginationsearch.herokuapp.com/api")
      .then((res) => res.json())
      .then((result) => setJobs(result));
  }, [jobs]);

  const pages = [];

  for(let i = 1; i < (jobs.length / jobsPerPage)+1; i++) {
    pages.push(i);
  }


  return (
    <Container className="container mt-4">
      <h1 className='title mb-3'>Job List</h1>
      <Search setJobName={setJobName} setCity={setCity} />
      <Pages page={page} setPage={setPage} pages={pages} />
      <Jobs jobs={jobs} page={page} jobName={jobName} city={city}/>
    </Container>
  );
}

export default App;
