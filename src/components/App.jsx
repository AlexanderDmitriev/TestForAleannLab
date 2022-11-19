import JobList from './JobList';
import DetailedJob from './DetailedJob/DetaliedJob';
import { Container, Wrapper } from './Container';
import { Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { getData } from '../api/getJobs';
import PropTypes from 'prop-types';

export const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(5);

  useEffect(() => {
    setLoading(true);
    getData().then(response => {
      if (response) {
        setData(response.data);
        setLoading(false);
      } else {
        return;
      }
    });
  }, []);

  const lastJobIndex = currentPage * jobsPerPage;
  const firstJobIndex = lastJobIndex - jobsPerPage;
  const currentJobsPage = data.slice(firstJobIndex, lastJobIndex);

  const paginate = (pageNumber) => {setCurrentPage(pageNumber)};
  const nextPage = () => { setCurrentPage(prev =>prev+1)};
  const prevPage = () => { setCurrentPage(prev =>prev-1)};

  return (
    <Wrapper>  
      <Container>
        <Routes>
          <Route
            path="/"
            element={
              <JobList
                data={currentJobsPage}
                loading={loading}
                jobsPerPage={jobsPerPage}
                totalJobs={data.length}
                paginate = {paginate}
                nextPage={nextPage}
                prevPage= {prevPage}
              />
            }
          />
          <Route
            path="/:jobId"
            element={<DetailedJob data={data} loading={loading} />}
          />
        </Routes>
      </Container>
    </Wrapper>
  );
};

DetailedJob.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
};
JobList.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
  jobsPerPage: PropTypes.number,
  totalJobs: PropTypes.number,
};
