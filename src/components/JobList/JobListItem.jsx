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

const JobListItem = ({ data }) => {
  const { posted, job, departmentName, location } = data;
  const isWideScreen = useMediaQuery({ query: '(min-width: 968px)' });

  return (
    <li>
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
    </li>
  );
};

export default JobListItem;
