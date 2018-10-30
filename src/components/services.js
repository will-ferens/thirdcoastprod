import React from 'react'
import '../styles/services.css'
import MapContainer from './map'

const Services = () => {
    return (
        <div className="services-content">
            <div className="services-column-1">
                <div>
                    <h1>Services Provided</h1>
                    <ul>
                        <li>Primary Care promoting wellness and treatment for people of all ages</li>
                        <li>DOT Physicals by a Certified Medical Examiner</li>
                        <li>Hospice and Palliative Care</li>
                        <li>ADD/ADHD evaluation and treatment</li>
                        <li>Women's health including contraceptive counseling and gynecological health</li>
                        <li>Men's health including preventative exams and prostate health</li>
                        <li>Evaluation and treatment of anxiety and depression</li>
                        <li>Treatment of acne, removal of warts and other skin lesions</li>
                        <li>Minor surgical procedures including treatment of lacerations</li>
                        <li>Coordination of care with physicians of other specialties</li>
                        <li>Electrocardiograms and pulmonary function tests</li>
                        <li>Injections and immunizations including allergy shots</li>
                        <li>Lab tests for managing diabetes and anticoagulation therapy</li>
                        <li>RN Chronic Care Manager (to enroll in these services click *here*)</li>
                        <li>Patient Centered Medical Home</li>
                    </ul>
                </div>
                <div>
                    <h1>Participating Insurances</h1>
                    <ul>
                        <h3>Medicare</h3>
                        <li>Medicare (Part B)</li>
                        <li>Medicare Plus Blue (BCBS Medicare Advantage)</li>
                        <li>Priority Health Medicare</li>
                        <li>Humana Gold Choice</li>
                        <li>Railroad Medicare/Palmetto GBA</li>
                        <h3>Medicaid</h3>
                        <li>Straight Medicaid</li>
                        <li>Meridian</li>
                        <h3>Commercial Products</h3>
                        <li>ASR</li>
                        <li>Blue Care Network (excluding the Partnered Plan - Mercy Network)</li>
                        <li>Blue Cross Blue Shield</li>
                        <li>Cofinity Network</li>
                        <li>Multiplan Network</li>
                        <li>PHCS Network</li>
                        <li>Priority Health</li>
                        <li>United Health Care - Core Network Only</li>
                    </ul>
                </div>
            </div>
            <div className="services-column-2">
                <div>
                    <h1>Patient Centerd Medical Home</h1>
                    <p>In 2012, Blue Cross Blue Shield of Michigan designated Third Coast Family Practice as a Patient Centered Medical Home. A Patient Centered Medical Home (PCMH) is a national model of care that commits to:</p>
                    <ul>
                        <li>Being accessible when patients are in need</li>
                        <li>Monitoring and improving the quality of care delivered to patients with serious conditions such as diabetes</li>
                        <li>Proactively tracking and communicating results of tests and consultations</li>
                        <li>Serving as a resource of education and connection to community support</li>
                        <li>To learn more about how we implement this model of care at Third Coast Family Practice, click *here*</li>
                    </ul>
                </div>
                <div>
                    <h1>Payment Options</h1>
                    <p>New patients are encouraged to contact our office to verify that your insurance plan covers Dr. Matheson’s services. Co-payments are expected the day of service; we accept Mastercard, Visa and Discover cards. Patients who do not have insurance coverage for office visits will receive a discount if payment in full is received on the day of service. To review our Financial Policy, click *here*.</p>
                </div>
            </div>
            <div className="services-column-3">
                <div>
                    <h1>Location</h1>
                    <MapContainer />
                </div>
                <div className="services-info-wrapper">
                    <h1>Hours & Contact Info</h1>
                    <div className="services-info">
                        <div>
                            <h3>Hours</h3>
                            <p>Mon-Tue 8:15am-5:00pm</p>
                            <p>Wed 12:00-7:30pm</p>
                            <p>Thu 8:15-11:30am</p>
                            <p>Fri 8:15am-4:00pm</p>
                        </div>
                        <div>
                            <h3>Contact</h3>
                            <p>821 West 10 Scottville, MI <br/> 49454</p>
                            <p><i>Phone</i> (231) 757-2500</p>
                            <p><i>Fax</i> (231) 757-9284</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services