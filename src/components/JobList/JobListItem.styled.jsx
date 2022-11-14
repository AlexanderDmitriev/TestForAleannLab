import styled from 'styled-components';

export const JobListItemSection = styled.div`
  display: flex;
  height: 206px;
  width: 396px;
  border: 1px solid #878d9d;
  border-radius: 5px;
  box-shadow: 1px 1px 0px 0px #878d9d;
`;

export const Image = styled.img`
  border-radius: 50%;
  margin-top: 45px;
  margin-right: 19px;
  margin-left: 16px;
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
  color: #878d9d;
  margin: 0;
  padding-bottom: 7px;
`;

export const PublicationInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 16px;
  padding-top: 17px;
  padding-bottom: 17px;
`;

export const PostedText = styled.p`
  font-family: 'Proxima Nova';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 17px;
  text-align: right;
  letter-spacing: 0.206667px;
  color: #878d9d;
  margin: 0;
`;

export const Job = styled.p`
  font-family: 'Proxima Nova';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  /* or 133% */
  letter-spacing: -0.5625px;
  color: #3a4562;
  margin: 0;
  padding-bottom: 5px;
  width: 278px;
`;

export const LocationIcon = styled.img`
  padding-right: 8px;
`;

export const Star = styled.svg`
  fill: #878d9d;
`;
