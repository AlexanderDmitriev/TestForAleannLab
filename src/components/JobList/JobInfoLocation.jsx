import {
  Job,
  LocationText,
  LocationSection,
  LocationIcon,
  JobInfoSection,
} from './JobListItem.styled';
import icons from '../../images/icons.svg';

const JobInfoLocation = ({ data }) => {
  const { title, name, address } = data;
  return (
    <JobInfoSection>
      <Job to={`/${data.id}`}>{title}</Job>
      <LocationText>{name}</LocationText>
      <LocationSection>
        <LocationIcon height="18">
          <use href={`${icons}#icon-Location`}></use>
        </LocationIcon>
        <LocationText>{address}</LocationText>
      </LocationSection>
    </JobInfoSection>
  );
};

export default JobInfoLocation;
