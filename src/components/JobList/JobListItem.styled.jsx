import styled from 'styled-components';
import { theme } from '../theme';

export const JobListItemSection = styled.div`
  display: flex;
  min-height: 206px;
  width: 396px;
  background-color: ${theme.colors.lightBackground};
  border: 1px solid ${theme.colors.secondaryColor};
  border-radius: 5px;
  box-shadow: 1px 1px 0px 0px ${theme.colors.secondaryColor};
  @media screen and (min-width: 968px) {
    min-height: 164px;
    width: 768px;
  }
  @media screen and (min-width: 1920px) {
    width: 1400px;
  }
`;

export const Image = styled.img`
  border-radius: 50%;
  margin-top: 45px;
  margin-right: 19px;
  margin-left: 16px;
  object-fit: cover;
  height: 66px;
  width: 66px;
  @media screen and (min-width: 968px) {
    height: 85px;
    width: 85px;
    object-position: center;
  }
`;

export const LocationSection = styled.div`
  display: flex;
`;

export const LocationText = styled.p`
  font-family: 'Proxima Nova';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px; /* or 156% */
  letter-spacing: 0.23619px;
  color: ${theme.colors.secondaryColor};
  margin: 0;
  padding-bottom: 7px;
  padding-right: 10px;
  @media screen and (min-width: 968px) {
    font-size: 16px;
  }
`;

export const PublicationInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 16px;
  padding-top: 17px;
  padding-bottom: 17px;
  align-items: center;
`;

export const PostedText = styled.p`
  font-family: 'Proxima Nova';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  text-align: right;
  letter-spacing: 0.206667px;
  color: ${theme.colors.secondaryColor};
  margin: 0;
  @media screen and (min-width: 1920px) {
    font-size: 16px;
  }
`;

export const Job = styled.p`
  font-family: 'Proxima Nova';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  /* or 133% */
  letter-spacing: -0.5625px;
  color: ${theme.colors.mainTextColor};
  margin: 0;
  padding-bottom: 5px;
  width: 278px;
  @media screen and (min-width: 968px) {
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
    /* or 125% */
    letter-spacing: -0.625px;
    width: auto;
  }
  @media screen and (min-width: 1920px) {
    width: 712px;
  }
`;

export const LocationIcon = styled.img`
  padding-right: 8px;
`;

export const Stars = styled.img`
  height: 10px;
  @media screen and (min-width: 968px) {
    padding-left: 5px;
    padding-right: 5px;
  }
  @media screen and (min-width: 1920px) {
    height: 18px;
  }
`;

export const BookmarkImage = styled.svg`
  height: 20px;
  width: 16px;
  @media screen and (min-width: 968px) {
    margin-left: 85px;
  }
`;

export const ContentSection = styled.div`
  display: block;
  @media screen and (min-width: 968px) {
    display: flex;
    align-items: center;
    padding: 24px 0;
  }
`;
