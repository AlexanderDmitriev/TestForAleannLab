import React from 'react';
import JobListItem from './JobListItem';
import { JobListSection } from './JobList.styled';
import Pagination from './Pagination/Pagination';

const JobList = ({
  data,
  loading,
  jobsPerPage,
  totalJobs,
  paginate,
  nextPage,
  prevPage,
}) => {
  return (
    <>
      {loading && <div>Loading...</div>}
      <JobListSection>
        {data.map(item => (
          <JobListItem data={item} key={item.id} />
        ))}
      </JobListSection>
      <Pagination
        jobsPerPage={jobsPerPage}
        totalJobs={totalJobs}
        paginate={paginate}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </>
  );
};

export default JobList;
