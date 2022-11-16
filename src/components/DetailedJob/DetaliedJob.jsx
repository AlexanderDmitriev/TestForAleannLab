import React, { useState, useEffect } from 'react';
import { getData } from '../../api/getJobs';
import {
  SalaryInfoSection,
  Posted,
  Salary,
  SalaryTitle,
  AdditionalInfoSubTitle,
  BenefitsText,
  BenefitsList,
  ContactsText,
  ContactsTitle,
} from './DetailedJob.styled';
import { LocationIcon, LocationSection } from '../JobList/JobListItem.styled';
import moment from 'moment';
import locationIconPng from '../../images/Location.png';

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
        <>
          <h1>Job details</h1>
          <p>Save to my list</p>
          <p>Share</p>
          <p>
            Arbeitsmediziner/-in / Betriebsmediziner/-in (m/w/d) oder einen
            Arzt/eine Ärztin (m/w/d) für die Weiterbildung zum Facharzt/ zur
            Fachärztin für Arbeitsmedizin (m/w/d)
          </p>
          <SalaryInfoSection>
            <Posted>
              {`Posted ${moment(data[0].createdAt).startOf('day').fromNow()}`}
            </Posted>
            <Salary>
              <SalaryTitle>Brutto, per year</SalaryTitle>
              <p>€ 54 000—60 000</p>
            </Salary>
          </SalaryInfoSection>

          <p>
            At WellStar, we all share common goals. That’s what makes us so
            successful – and such an integral part of our communities. We want
            the same things, for our organization, for our patients, and for our
            colleagues. As the most integrated healthcare provider in Georgia,
            this means we pride ourselves on investing in the communities that
            we serve. We continue to provide innovative care models, focused on
            improving quality and access to healthcare. Wellstar Medical Group,
            a physician-led multi-specialty group in Atlanta, Georgia, is
            currently recruiting for a BC/BE cardiothoracic surgeon to join
            their existing cardiovascular program. This is an opportunity to
            play a key role on a multidisciplinary team of cardiologists and
            surgeons. The ideal candidate will have five or more years of
            experience in cardiac surgery. This candidate should be facile with
            off-pump revascularization, complex aortic surgery, minimally
            invasive valve and valve repair, transcatheter valve replacement,
            surgical atrial fibrillation ablation, ventricular assist device
            placement, and extra corporeal membrane oxygenation. Wellstar is one
            of the largest integrated healthcare systems in the Southeast with
            11 hospitals in Atlanta metro region. With two open heart programs
            at Kennestone Regional Medical Center and Atlanta Medical Center,
            Wellstar cardiac surgeons perform over 1200 cardiac procedures per
            year. The cardiac service line is the only center in Georgia with
            the Joint Commission’s Comprehensive Cardiac Center certification.
            Our physicians enjoy a wide range of benefits, including: Very
            competitive compensation package with bbbbonuses Medical, Dental,
            and Vision Insurance Occurrence-based Malpractice Coverage
            Short-term and Long-term Disability Insurance Life insurance
          </p>
          <p>Responsopilities</p>
          <p>
            We continue to provide innovative care models, focused on improving
            quality and access to healthcare. Wellstar Medical Group, a
            physician-led multi-specialty group in Atlanta, Georgia, is
            currently recruiting for a BC/BE cardiothoracic surgeon to join
            their existing cardiovascular program. This is an opportunity to
            play a key role on a multidisciplinary team of cardiologists and
            surgeons. The ideal candidate will have five or more years of
            experience in cardiac surgery. This candidate should be facile with
            off-pump revascularization, complex aortic surgery, minimally
            invasive valve and valve repair, transcatheter valve replacement,
            surgical atrial fibrillation ablation, ventricular assist device
            placement, and extra corporeal membrane oxygenation. Wellstar is one
            of the largest integrated healthcare systems in the Southeast with
            11 hospitals in Atlanta metro region. With two open heart programs
            at Kennestone Regional Medical Center and Atlanta Medical Center,
            Wellstar cardiac surgeons perform over 1200 cardiac procedures per
            year. The cardiac service line is the only center in Georgia with
            the Joint Commission’s Comprehensive Cardiac Center certification.
            Our physicians enjoy a wide range of benefits, including: Very
            competitive compensation package with bbbbonuses Medical, Dental,
            and Vision Insurance Occurrence-based Malpractice Coverage
            Short-term and Long-term Disability Insurance Life insurance
          </p>
          <p>Compensation & Benefits:</p>
          <p>
            That’s what makes us so successful – and such an integral part of
            our communities. We want the same things, for our organization, for
            our patients, and for our colleagues.
          </p>
          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
          <button>Apply now</button>
          <h2>Attached images</h2>
          <p>image</p>
          <p>image</p>
          <div>
            <h2>Additional info</h2>
            <AdditionalInfoSubTitle>Employment type</AdditionalInfoSubTitle>
            <button>Full-time</button>
            <button>Part-time</button>
            <button>Temporary</button>
            <AdditionalInfoSubTitle>Benefits</AdditionalInfoSubTitle>
            <BenefitsList>
              {data[0].benefits.map(benefit => (
                <BenefitsText key={benefit}>{benefit}</BenefitsText>
              ))}
            </BenefitsList>
          </div>

          <h2>Contacts</h2>
          <div>
            <ContactsTitle>{data[0].name}</ContactsTitle>
            <LocationSection>
              <LocationIcon src={locationIconPng} alt="" height="18" />
              <ContactsText>{data[0].address} </ContactsText>
            </LocationSection>
            <ContactsText>{data[0].phone}</ContactsText>
            <ContactsText>{data[0].email}</ContactsText>
            <p>map</p>
          </div>
        </>
      )}
    </>
  );
};

export default DetailedJob;
