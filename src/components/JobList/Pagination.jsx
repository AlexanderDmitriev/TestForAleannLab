import {PaginationList, PaginationListItem, PageNumber} from './Pagination.styled';

const Pagination = ({ jobsPerPage, totalJobs, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <PaginationList>
        {pageNumbers.map(number => (
          <PaginationListItem key={number}>
            <PageNumber href=" " onClick={() => paginate(number)}>{number}</PageNumber>
          </PaginationListItem>
        ))}
      </PaginationList>
    </div>
  );
};

export default Pagination;
