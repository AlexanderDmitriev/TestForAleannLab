import {
  PublicationInfo,
  PostedText,
  Stars,
  ContentSection,
  BookmarkImage,
  BookmarkSection,
} from './JobListItem.styled';
import JobInfoLocation from './JobInfoLocation';
import icons from '../../images/icons.svg';
import moment from 'moment';
import { useMediaQuery } from 'react-responsive';

const JobInfo = ({ data }) => {
  const { createdAt } = data;
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
      <JobInfoLocation data={data} />
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
