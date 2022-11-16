import { JobListItemSection, Image } from './JobListItem.styled';
import JobInfo from './JobInfo';

const JobListItem = ({ data }) => {
  const { pictures } = data;

  return (
    <li>
      <JobListItemSection>
        <div>
          <Image src={pictures[0]} alt="" />
        </div>
        <JobInfo data={data} />
      </JobListItemSection>
    </li>
  );
};

export default JobListItem;
