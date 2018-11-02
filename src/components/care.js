import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/care.css'
import demo from '../assets/patient-demographics.pdf'
import newPatient from '../assets/new-patient.pdf'
import MapContainer from './map'

const Care = () => {
    return (
        <div className="care-content">
            <div className="care-column-1">
                <div>
                    <h1>Accessing Care</h1>
                    <h3>Urgent Care</h3>
                    <p><b>Call 911 if you have symptoms of chest pain, shortness of breath, a change in mental status, uncontrolled bleeding or inability to walk.</b>For less severe symptoms, you may not always know if it is better to go to a hospital emergency department, urgent care center, or to contact Dr. Matheson. Here are some guidelines to help you navigate that decision. Whenever you need health care, please call our office first (231-757-2500). If the office is open we can help by either scheduling you to be seen that day, or by providing triage and treatment recommendations over the phone. If the office is closed, a recorded message will give you instructions including how to get in touch with us after hours so that we can make a decision together about whether or not you need to go to the hospital. (The after-hours call center is 231-843-2557. They will page Dr. Matheson and he will call you back.) If the circumstances require a call to 911, please do not contact the office first so emergency responders can be dispatched immediately.</p>
                    <h1>Prescription Refills</h1>
                    <p>Please contact your pharmacy when you need refills, or use your Patient Portal to send us your refill request. Submit your request at least 24 hours before you need your medication, or longer if you are making your request over the weekend.</p>
                </div>
                <div>
                    <h1>Keeping Your Medical Chart Up to Date</h1>
                    <p>At least once per year, we will ask you to:</p>
                    <ul>
                        <li>Verify your demographic information</li>
                        <li>Make sure we have your permission to treat you</li>
                        <li>Give us permission to obtain copies of your medical records from other providers when needed</li>
                        <li>Verify who, if anyone, can we speak to about your medical chart. You can update this information anytime by printing the form provided &nbsp;
                            <NavLink to={demo} target="_blank" className="nav-link">
                                here
                            </NavLink> and bringing it to the office
                        </li>
                    </ul>
                </div>
            </div>
            <div className="care-column-2">
                <div>
                    <h1>Scheduling Appointments</h1>
                    <p><b><i>Routine Appointments</i></b> such as annual check-ups, DOT physicals, and follow-up visits can all be scheduled in advance by calling our office or sending us a request through the patient portal.</p>
                    <p><b><i>New Patient Appointments</i></b> will be scheduled once we have received your past medical records. For details about this process and the forms necessary to establish as a new patient, click &nbsp;
                        <NavLink to={newPatient} target="_blank" className="nav-link">
                            here
                        </NavLink>.
                    </p>
                    <p><b><i>Same Day Appointments</i></b> are available to established patients as illness and injury cannot be anticipated. Thirty percent of our appointment slots are reserved for same day scheduling, so give us a call when you need us.<i> These slots fill up quickly, so call as early in the day as possible!</i></p>
                    <p><b><i>After a Hospitalization</i></b> for a smooth transition after a hospitalization or nursing home rehabilitation, Dr. Matheson would like to see you within 7 days of your discharge. We reserve time in our schedule for these appointments as well, so please contact us when you are discharged.</p>
                    <h3>No appointment necessary for:</h3>
                    <ul>
                        
                        <li>Routine injections such as allergy shots, vitamin B12 or testosterone injections, flu and pneumonia shots, or TB tests</li>
                        <li>PT/INR lab test for anticoagulation management</li>
                        <li>Blood Pressure checks or urinalysis</li>
                    </ul>
                </div>
                <div>
                    <h1>Preparing for Your Visit</h1>
                    <p>Please bring the following items to every visit:</p>
                    <ul>
                        <li>Insurance card and photo ID</li>
                        <li>Any supplements and/or medications prescribed by a physician other than Dr. Matheson IN THEIR ORIGINAL CONTAINERS</li>
                        <li>A list of questions you want to discuss with Dr. Matheson</li>
                        <li>Forms you need completed by the doctor</li>
                        <li>Copayment</li>
                    </ul>
                    <p>You may also choose to bring:</p>
                    <ul>
                        <li>Diaries (food, blood pressure readings, symptom diaries, etc.)</li>
                        <li>A trusted friend or family member who cares or advocates for you</li>
                    </ul>
                </div>
            </div>
            <div className="care-column-3">
                <div>
                    <h1>Location</h1>
                    <MapContainer />
                </div>
                <div className="care-contact">
                    <h1>Hours & Contact Info</h1>
                    <div className="care-info">
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

export default Care