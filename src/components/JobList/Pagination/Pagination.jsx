import {
  PaginationList,
  PaginationListItem,
  PageNumber,
} from './Pagination.styled';

const Pagination = ({
  jobsPerPage,
  totalJobs,
  paginate,
  nextPage,
  prevPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalJobs / jobsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <PaginationList>
        <PageNumber type="button" onClick={prevPage}>
          {'<'}
        </PageNumber>
        {pageNumbers.map(number => (
          <PaginationListItem key={number}>
            <PageNumber type="button" onClick={() => paginate(number)}>
              {number}
            </PageNumber>
          </PaginationListItem>
        ))}

        <PageNumber type="button" onClick={nextPage}>
          {'>'}
        </PageNumber>
      </PaginationList>
    </div>
  );
};

export default Pagination;
