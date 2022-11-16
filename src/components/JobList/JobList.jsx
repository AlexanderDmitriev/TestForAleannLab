import React from 'react';
import JobListItem from './JobListItem';
import { JobListSection } from './JobList.styled';

const JobList = ({ data, loading }) => {
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
