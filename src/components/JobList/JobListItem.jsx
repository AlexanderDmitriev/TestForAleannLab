import {
  JobListItemSection,
  Job,
  Image,
  LocationText,
  LocationSection,
  PublicationInfo,
  PostedText,
  LocationIcon,
  Stars,
  ContentSection,
  BookmarkImage,
} from './JobListItem.styled';
import starsPng from '../../images/Rating.png';
import locationIconPng from '../../images/Location.png';
import image from '../../images/HospitalImage.png';
import bookmark from '../../images/Bookmark.png';
import { useMediaQuery } from 'react-responsive';

const JobListItem = () => {
  const posted = 'Posted 2 days ago';
  const job = 'Arbeitsmediziner/-in / Betriebsmediziner/-in (m/w/d)';
  const departmentName =
    'Department name • Allgemeines Krankenhaus der Stadt Wien - AKH';
  const location = 'Vienna, Austria';

  const isWideScreen = useMediaQuery({ query: '(min-width: 968px)' });

  return (
    <JobListItemSection>
      <Image src={image} alt="" />
      <ContentSection>
        {!isWideScreen && (
          <PublicationInfo>
            <Stars src={starsPng} alt="" />
            <PostedText>{posted}</PostedText>
          </PublicationInfo>
        )}
        <div>
        <Job>{job}</Job>
        <LocationText>{departmentName}</LocationText>
        <LocationSection>
          <LocationIcon src={locationIconPng} alt="" height="18" />
          <LocationText>{location}</LocationText>
        </LocationSection>
        </div>
        
        {isWideScreen && (
          <PublicationInfo>
            <Stars src={starsPng} alt="" />
            <div>
            <BookmarkImage src={bookmark} alt="" />
            <PostedText>{posted}</PostedText>
            </div>
            
          </PublicationInfo>
        )}
      </ContentSection>
    </JobListItemSection>
  );
};

export default JobListItem;
