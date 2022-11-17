import {
    SharingSection,
    SharingSectionItem,
    SalaryTitle,
  } from './DetailedJob.styled';
  import { LocationIcon } from '../JobList/JobListItem.styled';
  import icons from '../../images/icons.svg';

const Sharing = () => {
    return(
        <SharingSection>
            <SharingSectionItem>
              <LocationIcon height="18">
                <use href={`${icons}#icon-Star`}></use>
              </LocationIcon>
              <SalaryTitle>Save to my list</SalaryTitle>
            </SharingSectionItem>
            <SharingSectionItem>
              <LocationIcon height="18">
                <use href={`${icons}#icon-ShapeIcon`}></use>
              </LocationIcon>
              <SalaryTitle>Share</SalaryTitle>
            </SharingSectionItem>
          </SharingSection>
    );
};

export default Sharing;