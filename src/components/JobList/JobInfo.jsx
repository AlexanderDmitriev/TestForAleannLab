import {
  Job,
  LocationText,
  LocationSection,
  PublicationInfo,
  PostedText,
  LocationIcon,
  Stars,
  ContentSection,
  BookmarkImage,
  BookmarkSection,
  JobInfoSection,
} from './JobListItem.styled';
import icons from '../../images/icons.svg';
import moment from 'moment';
import { useMediaQuery } from 'react-responsive';

const JobInfo = ({ data }) => {
  const { createdAt, title, name, address } = data;
  const isWideScreen = useMediaQuery({ query: '(min-width: 968px)' });
  return (
    <ContentSection>
      {!isWideScreen && (
        <PublicationInfo>
          <Stars>
            <use href={`${icons}#icon-Rating`}></use>
          </Stars>
          <PostedText>{`Posted ${moment(createdAt)
            .startOf('day')
            .fromNow()}`}</PostedText>
        </PublicationInfo>
      )}
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

      {isWideScreen && (
        <PublicationInfo>
          <Stars>
            <use href={`${icons}#icon-Rating`}></use>
          </Stars>
          <BookmarkSection>
            <BookmarkImage height="18">
              <use href={`${icons}#icon-Bookmark`}></use>
            </BookmarkImage>
            <PostedText>{`Posted ${moment(createdAt)
              .startOf('day')
              .fromNow()}`}</PostedText>
          </BookmarkSection>
        </PublicationInfo>
      )}
    </ContentSection>
  );
};

export default JobInfo;
