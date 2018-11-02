import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/new_patients.css'
import release from '../assets/medical-release-form.pdf'
import privacy from '../assets/privacy-notice.pdf'
import become from '../assets/becoming-a-patient.pdf'
import newPatients from '../assets/new-patient.pdf'
import MapContainer from './map'

const NewPatients = () => {
    return (
        <div className="patient-content">
            <div className="patient-column-1">
                <h1>Ensuring Your Privacy</h1>
                <p>To view our Notice of Privacy Practice, click &nbsp;
                    <NavLink to={privacy} target="_blank" className="nav-link">
                        here
                    </NavLink>. To request a copy of your medical record be sent to another provider, please fill out the &nbsp;
                    <NavLink to={release} target="_blank" className="nav-link">
                        Release of Information Form
                    </NavLink> and turn it into the office.
                </p>
                <h1>Patient Portal</h1>
                <p>All patients have access to a secure Patient Portal, located at <a target="_blank" href="https://health.eclinicalworks.com/thirdcoastfamily">https://health.eclinicalworks.com/thirdcoastfamily</a>. Just ask any staff member to provide you with a username and password. When you log into your Portal, you will be able to see test results, summaries of your visits with Dr. Matheson including your current medication list, and education materials selected for you by Dr. Matheson. You can use the portal to contact us to request an appointment or ask a question. The Portal is also the best way to request prescription refills.</p>
                <h1>Becoming a New Patient</h1>
                <p>Third Coast Family Practice accepts a limited number of new patients each month. Click &nbsp;
                <NavLink to={become} target="_blank" className="nav-link">
                    here
                </NavLink> to learn more about the process of becoming a new patient. Click &nbsp;
                <NavLink to={newPatients} target="_blank" className="nav-link">
                    here
                </NavLink> to view and print the New Patient Application, to be completed and brought to our office.</p>
            </div>
            <div className="patient-column-3">
                <div>
                    <h1>Location</h1>
                    <MapContainer />
                </div>
                <div className="patient-contact">
                    <h1>Hours & Contact Info</h1>
                    <div className="patient-info">
                        <div>
                            <p>Mon-Tue 8:15am-5:00pm</p>
                            <p>Wed 12:00-7:30pm</p>
                            <p>Thu 8:15-11:30am</p>
                            <p>Fri 8:15am-4:00pm</p>
                        </div>
                        <div>
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

export default NewPatients