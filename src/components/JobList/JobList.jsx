import React, { useState, useEffect } from 'react';
import JobListItem from './JobListItem';
import { JobListSection } from './JobList.styled';
import { getData } from '../../api/getJobs';

const JobList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData().then(response => {
      setLoading(true);
      if (response) {
        console.log(response.data);
        setData(response.data);
        setLoading(false);
      } else {
        return;
      }
    });
  }, []);

  return (
    <>
      {loading && <div>Loading...</div>}
      <JobListSection>
        {data.map(item => (
          <JobListItem data={item} key={item.id} />
        ))}
      </JobListSection>
    </>
  );
};

export default JobList;
