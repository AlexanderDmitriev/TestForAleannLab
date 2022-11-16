import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Wrapper,
  DescriptionSection,
  JobTitle,
  SharingSection,
  SharingSectionItem,
  SalaryInfoSection,
  Posted,
  Salary,
  SalaryTitle,
  SalaryPerYear,
  Subtitle,
  InfoSection,
  ApplyButton,
  ApplyButtonSection,
  Description,
  Pictures,
  PicturesListItem,
  PicturesList,
  AdditionalInfoSubTitle,
  EmploymentText,
  BenefitsText,
  BenefitsList,
  ContactSection,
  ContactsText,
  ContactsTitle,
} from './DetailedJob.styled';
import { LocationIcon, LocationSection } from '../JobList/JobListItem.styled';
import moment from 'moment';
import icons from '../../images/icons.svg';
import { nanoid } from 'nanoid';

const DetailedJob = ({ data, loading }) => {
  const { jobId } = useParams();
  const jobIndex = data.findIndex(job => job.id === jobId);

  return (
    <>
      {loading && <div>Loading...</div>}
      {data && (
        <Wrapper>
          <Subtitle>Job details</Subtitle>
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
          <DescriptionSection>
            <JobTitle>{data[jobIndex].title}</JobTitle>
            <SalaryInfoSection>
              <Posted>
                {`Posted ${moment(data[jobIndex].createdAt)
                  .startOf('day')
                  .fromNow()}`}
              </Posted>
              <Salary>
                <SalaryTitle>Brutto, per year</SalaryTitle>
                <SalaryPerYear>€ {data[jobIndex].salary}</SalaryPerYear>
              </Salary>
            </SalaryInfoSection>
            <Description>{data[jobIndex].description}</Description>
            <ApplyButtonSection>
              <ApplyButton type="button">Apply now</ApplyButton>
            </ApplyButtonSection>
          </DescriptionSection>

          <InfoSection>
            <Subtitle>Attached images</Subtitle>
            <PicturesList>
              {data[jobIndex].pictures.map(image => (
                <PicturesListItem key={nanoid()}>
                  <Pictures src={image} alt="" />
                </PicturesListItem>
              ))}
            </PicturesList>
          </InfoSection>
          <InfoSection>
            <Subtitle>Additional info</Subtitle>
            <AdditionalInfoSubTitle>Employment type</AdditionalInfoSubTitle>
            <BenefitsList>
              {data[jobIndex].employment_type.map(employment => (
                <EmploymentText key={employment}>{employment}</EmploymentText>
              ))}
            </BenefitsList>
            <AdditionalInfoSubTitle>Benefits</AdditionalInfoSubTitle>
            <BenefitsList>
              {data[jobIndex].benefits.map(benefit => (
                <BenefitsText key={benefit}>{benefit}</BenefitsText>
              ))}
            </BenefitsList>
          </InfoSection>

          <Subtitle>Contacts</Subtitle>
          <ContactSection>
            <ContactsTitle>{data[jobIndex].name}</ContactsTitle>
            <LocationSection>
              <LocationIcon height="18">
                <use href={`${icons}#icon-Location`}></use>
              </LocationIcon>
              <ContactsText>{data[jobIndex].address} </ContactsText>
            </LocationSection>
            <ContactsText>{data[jobIndex].phone}</ContactsText>
            <ContactsText>{data[jobIndex].email}</ContactsText>
            <p>map</p>
          </ContactSection>
        </Wrapper>
      )}
    </>
  );
};

export default DetailedJob;
