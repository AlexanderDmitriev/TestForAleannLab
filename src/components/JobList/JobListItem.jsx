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
              <Stars src={starsPng} alt="" />
              <PostedText>{`Posted ${moment(createdAt)
                .startOf('day')
                .fromNow()}`}</PostedText>
            </PublicationInfo>
          )}
          <div>
            <Job>{description}</Job>
            <LocationText>{name}</LocationText>
            <LocationSection>
              <LocationIcon src={locationIconPng} alt="" height="18" />
              <LocationText>{address}</LocationText>
            </LocationSection>
          </div>

          {isWideScreen && (
            <PublicationInfo>
              <Stars src={starsPng} alt="" />
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
