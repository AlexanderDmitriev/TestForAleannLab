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

  useEffect(() => {
    getData().then(response => {
      setLoading(true);
      if (response) {
        setData(response.data);
        setLoading(false);
      } else {
        return;
      }
    });
  }, []);

  return (
    <Wrapper>
      <Container>
        <Routes>
          <Route path="/" element={<JobList data={data} loading={loading}/>}/>
          <Route path="/:jobId" element={<DetailedJob data={data} loading={loading}/>}/>
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
};
