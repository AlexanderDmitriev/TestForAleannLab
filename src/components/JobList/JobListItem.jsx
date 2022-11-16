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
import { useMediaQuery } from 'react-responsive';
import icons from '../../images/icons.svg';
import moment from 'moment';

const JobListItem = ({ data }) => {
  const { createdAt, description, name, address, pictures } = data;
  const isWideScreen = useMediaQuery({ query: '(min-width: 968px)' });

  return (
    <li>
      <JobListItemSection>
        <div>
          <Image src={pictures[0]} alt="" />
        </div>

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
          <div>
            <Job>{description}</Job>
            <LocationText>{name}</LocationText>
            <LocationSection>
              <LocationIcon height="18">
                <use href={`${icons}#icon-Location`}></use>
              </LocationIcon>
              <LocationText>{address}</LocationText>
            </LocationSection>
          </div>

          {isWideScreen && (
            <PublicationInfo>
              <Stars>
                <use href={`${icons}#icon-Rating`}></use>
              </Stars>
              <div>
                <BookmarkImage height="18">
                  <use href={`${icons}#icon-Bookmark`}></use>
                </BookmarkImage>
                <PostedText>{`Posted ${moment(createdAt)
                  .startOf('day')
                  .fromNow()}`}</PostedText>
              </div>
            </PublicationInfo>
          )}
        </ContentSection>
      </JobListItemSection>
    </li>
  );
};

export default JobListItem;
