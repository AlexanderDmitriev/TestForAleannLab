import {
    Subtitle,
    InfoSection,
    AdditionalInfoSubTitle,
    EmploymentText,
    BenefitsText,
    BenefitsList,
  } from './DetailedJob.styled';

const AdditionalInfo = ({data}) => {
    return(
        <InfoSection>
            <Subtitle>Additional info</Subtitle>
            <AdditionalInfoSubTitle>Employment type</AdditionalInfoSubTitle>
            <BenefitsList>
              {data.employment_type.map(employment => (
                <EmploymentText key={employment}>{employment}</EmploymentText>
              ))}
            </BenefitsList>
            <AdditionalInfoSubTitle>Benefits</AdditionalInfoSubTitle>
            <BenefitsList>
              {data.benefits.map(benefit => (
                <BenefitsText key={benefit}>{benefit}</BenefitsText>
              ))}
            </BenefitsList>
          </InfoSection>
    );
}

export default AdditionalInfo;