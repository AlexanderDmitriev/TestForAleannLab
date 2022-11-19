import styled from 'styled-components';
import { theme } from '../theme';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.section`
  padding: 24px 15px;
  background-color: ${theme.colors.lightBackground};
  @media screen and (min-width: 968px) {
    padding: 56px 19px;
  }
`;

export const JobDetailsSection = styled.div`
  @media screen and (min-width: 968px) {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(58, 69, 98, 0.13);
    margin-bottom: 31px;
  }
`;

export const DescriptionSection = styled.div`
  padding-bottom: 135px;
`;

export const JobTitle = styled.h2`
  font-family: 'Proxima Nova';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  /* or 125% */
  letter-spacing: -0.75px;
  color: ${theme.colors.mainTextColor};
  @media screen and (min-width: 968px) {
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 0.413333px;
    width: 600px;
  }
`;

export const SharingSection = styled.div`
  display: flex;
  padding-bottom: 32px;
`;

export const SharingSectionItem = styled.div`
  display: flex;
  padding-right: 10px;
  @media screen and (min-width: 968px) {
    padding-right: 24px;
  }
`;

export const SalaryInfoSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 14px;
`;

export const Salary = styled.div`
  text-align: right;
`;

export const Posted = styled.p`
  font-family: 'Proxima Nova';
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 25px;
  /* identical to box height, or 192% */
  letter-spacing: 0.191905px;
  color: rgba(56, 65, 93, 0.602109);
  @media screen and (min-width: 968px) {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    /* or 133% */
    letter-spacing: -0.5625px;
    color: rgba(56, 65, 93, 0.355988);
  }
`;

export const SalaryTitle = styled.p`
  font-family: 'Proxima Nova';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height, or 133% */
  letter-spacing: -0.5625px;
  color: rgba(56, 65, 93, 0.82);
  @media screen and (min-width: 968px) {
    font-family: 'Roboto';
  }
`;

export const SalaryPerYear = styled.p`
  font-family: 'Proxima Nova';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  /* identical to box height, or 125% */
  letter-spacing: -0.625px;
  color: ${theme.colors.mainTextColor};
`;

export const SalarySectionMobile = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 7px;
`;

export const AdditionalInfoSubTitle = styled.p`
  font-family: 'Proxima Nova';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height, or 133% */
  letter-spacing: -0.5625px;
  color: rgba(56, 65, 93, 0.82);
  padding-bottom: 10px;
  @media screen and (min-width: 968px) {
    font-family: 'Roboto';
  }
`;

export const BenefitsText = styled.li`
  font-family: 'Proxima Nova';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  /* identical to box height, or 100% */
  text-align: center;
  letter-spacing: -0.4px;
  color: #988b49;
  list-style: none;
  height: 50px;
  background-color: rgba(255, 207, 0, 0.15);
  border: 1px solid #ffcf00;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  padding: 17px 7px;
`;

export const EmploymentText = styled(BenefitsText)`
  border: 1px solid rgba(85, 105, 158, 0.3);
  background-color: rgba(161, 177, 219, 0.317343);
`;

export const BenefitsList = styled.ul`
  display: flex;
  padding-bottom: 22px;
  flex-wrap: wrap;
  & li:not(:last-child) {
    margin-right: 6px;
  }
`;

export const ApplyButton = styled.button`
  padding: 18px 30px;
  background-color: #384564;
  border-radius: 8px;
  font-family: 'Proxima Nova';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height, or 133% */
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #3f4d6e;
  }
  @media screen and (min-width: 968px) {
    margin-bottom: 32px;
  }
`;

export const ApplyButtonSection = styled.div`
  text-align: center;
`;

export const Description = styled.p`
  font-family: 'Proxima Nova';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  /* or 133% */
  letter-spacing: -0.5625px;
  color: rgba(56, 65, 93, 0.82);
  margin-bottom: 14px;
`;

export const InfoSection = styled.div`
  padding-bottom: 63px;
`;

export const Subtitle = styled.h2`
  font-family: 'Proxima Nova';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: 0.413333px;
  color: ${theme.colors.mainTextColor};
  padding-bottom: 22px;

  ::after {
    @media screen and (min-width: 968px) {
      display: none;
    }
    content: '';
    display: block;
    height: 1px;
    background: ${theme.colors.mainTextColor};
    opacity: 0.13;
    margin-top: 10px;
  }
`;

export const Pictures = styled.img`
  height: 115px;
`;

export const PicturesListItem = styled.li`
  list-style: none;
  & li:not(:last-child) {
    margin-right: 10px;
  }
`;

export const PicturesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  & li:not(:last-child) {
    margin-right: 10px;
  }
`;

export const ContactSection = styled.div`
  background-color: #2a3047;
  border-radius: 8px;
  padding: 31px 62px;
  padding-bottom: 0;
`;

export const ContactsText = styled.p`
  font-family: 'Proxima Nova';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  /* identical to box height, or 144% */
  letter-spacing: -0.5px;
  color: #e7eaf0;
`;

export const ContactsTitle = styled.p`
  font-family: 'Proxima Nova';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.23619px;
  color: #e7eaf0;
  padding-bottom: 17px;
`;

export const BackButtonSection = styled.div`
  padding-bottom: 22px;
`;

export const BackButton = styled(NavLink)`
  text-decoration: none;
  font-family: 'Proxima Nova';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height, or 133% */
  text-align: center;
  text-transform: uppercase;
  color: #3a4562;
  padding: 18px 26px;
  background-color: rgba(0, 0, 0, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 8px;
  margin-bottom: 24px;
  cursor: pointer;
  transition-property: background-color;
  transition-duration: 300ms;
  transition-timing-function: linear;
  &:hover,
  &:focus {
    color: rgba(0, 0, 0, 0.35);
  }
`;
