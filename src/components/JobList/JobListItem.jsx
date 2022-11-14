import {
  JobListItemSection,
  Job,
  LocationText,
  LocationSection,
  PublicationInfo,
  PostedText,
} from './JobListItem.styled';
import starsPng from '../../images/Rating.png';
import locationIconPng from '../../images/Location.png';

const JobListItem = () => {
  const posted = 'Posted 2 days ago';
  const job = 'Arbeitsmediziner/-in / Betriebsmediziner/-in (m/w/d)';
  const departmentName =
    'Department name • Allgemeines Krankenhaus der Stadt Wien - AKH';
  const location = 'Vienna, Austria';
  return (
    <JobListItemSection>
      <p>picture</p>
      <div>
        <PublicationInfo>
          <img src={starsPng} alt="" height="10" />
          <PostedText>{posted}</PostedText>
        </PublicationInfo>
        <Job>{job}</Job>
        <LocationText>{departmentName}</LocationText>
        <LocationSection>
          <img src={locationIconPng} alt="" height="18" />
          <LocationText>{location}</LocationText>
        </LocationSection>
      </div>
    </JobListItemSection>
  );
};

export default JobListItem;
