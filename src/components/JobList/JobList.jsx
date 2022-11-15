import JobListItem from './JobListItem';
import { JobListSection } from './JobList.styled';

const JobList = () => {
  const data = [
    {
      id: 1,
      posted: 'Posted 2 days ago',
      job: 'Arbeitsmediziner/-in / Betriebsmediziner/-in (m/w/d)',
      departmentName:
        'Department name • Allgemeines Krankenhaus der Stadt Wien - AKH',
      location: 'Vienna, Austria',
    },
    {
      id: 2,
      posted: 'Posted 1 days ago',
      job: '1111111111111111/-in / Betriebsmediziner/-in (m/w/d)',
      departmentName:
        'Department name • 111111111 Krankenhaus der Stadt Wien - AKH',
      location: '111111, 111111',
    },
    {
      id: 3,
      posted: 'Posted 3 days ago',
      job: '2222222222222222/-in / Betriebsmediziner/-in (m/w/d)',
      departmentName:
        'Department name • 22222222 Krankenhaus der Stadt Wien - AKH',
      location: '22222, 22222',
    },
  ];

  return (
    <>
      <JobListSection>
        {data.map(item => (
          <JobListItem data={item} key={item.id} />
        ))}
      </JobListSection>
    </>
  );
};

export default JobList;
