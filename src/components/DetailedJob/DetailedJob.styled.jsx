import styled from 'styled-components';

export const SalaryInfoSection = styled.div`
  display: flex;
  justify-content: space-between;
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
`;

export const SalaryTitle = styled.h3`
  font-family: 'Proxima Nova';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height, or 133% */
  letter-spacing: -0.5625px;
  color: rgba(56, 65, 93, 0.82);
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
  background-color: black;
`;

export const ContactsTitle = styled.p`
  font-family: 'Proxima Nova';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.23619px;
  color: #e7eaf0;
  background-color: black;
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

export const BenefitsList = styled.ul`
display: flex;
& li:not(:last-child) {
    margin-right: 6px;
  }
`;
