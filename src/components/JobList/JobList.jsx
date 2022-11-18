import React from 'react';
import JobListItem from './JobListItem';
import { JobListSection } from './JobList.styled';
import Pagination from './Pagination';

const JobList = ({ data, loading, jobsPerPage, totalJobs, paginate }) => {


  return (
    <>
      {loading && <div>Loading...</div>}
      <JobListSection>
        {data.map(item => (
          <JobListItem data={item} key={item.id} />
        ))}
      </JobListSection>
      <Pagination jobsPerPage={jobsPerPage} totalJobs={totalJobs} paginate={paginate}/>
    </>
  );
};

export default JobList;
