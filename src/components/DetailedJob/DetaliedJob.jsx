import React, { useState, useEffect } from 'react';
import { getData } from '../../api/getJobs';
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
import locationIconPng from '../../images/Location.png';
import shapeIconPng from '../../images/ShapeIcon.png';
import starIconPng from '../../images/Star.png';
import { nanoid } from 'nanoid';

const DetailedJob = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData().then(response => {
      setLoading(true);
      if (response) {
        console.log(response.data);
        setData(response.data);
        setLoading(false);
      } else {
        return;
      }
    });
  }, []);
  return (
    <>
      {loading && <div>Loading...</div>}
      {data && (
        <Wrapper>
          <Subtitle>Job details</Subtitle>
          <SharingSection>
            <SharingSectionItem>
              <LocationIcon src={starIconPng} alt="" height="18" />
              <SalaryTitle>Save to my list</SalaryTitle>
            </SharingSectionItem>
            <SharingSectionItem>
              <LocationIcon src={shapeIconPng} alt="" height="18" />
              <SalaryTitle>Share</SalaryTitle>
            </SharingSectionItem>
          </SharingSection>
          <DescriptionSection>
            <JobTitle>{data[0].title}</JobTitle>
            <SalaryInfoSection>
              <Posted>
                {`Posted ${moment(data[0].createdAt).startOf('day').fromNow()}`}
              </Posted>
              <Salary>
                <SalaryTitle>Brutto, per year</SalaryTitle>
                <SalaryPerYear>€ {data[0].salary}</SalaryPerYear>
              </Salary>
            </SalaryInfoSection>
            <Description>{data[0].description}</Description>
            <ApplyButtonSection>
              <ApplyButton type="button">Apply now</ApplyButton>
            </ApplyButtonSection>
          </DescriptionSection>

          <InfoSection>
            <Subtitle>Attached images</Subtitle>
            <PicturesList>
              {data[0].pictures.map(image => (
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
              {data[0].employment_type.map(employment => (
                <EmploymentText key={employment}>{employment}</EmploymentText>
              ))}
            </BenefitsList>
            <AdditionalInfoSubTitle>Benefits</AdditionalInfoSubTitle>
            <BenefitsList>
              {data[0].benefits.map(benefit => (
                <BenefitsText key={benefit}>{benefit}</BenefitsText>
              ))}
            </BenefitsList>
          </InfoSection>

          <Subtitle>Contacts</Subtitle>
          <ContactSection>
            <ContactsTitle>{data[0].name}</ContactsTitle>
            <LocationSection>
              <LocationIcon src={locationIconPng} alt="" height="18" />
              <ContactsText>{data[0].address} </ContactsText>
            </LocationSection>
            <ContactsText>{data[0].phone}</ContactsText>
            <ContactsText>{data[0].email}</ContactsText>
            <p>map</p>
          </ContactSection>
        </Wrapper>
      )}
    </>
  );
};

export default DetailedJob;
