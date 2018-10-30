import React from 'react'
import '../styles/content.css'

import craig from '../assets/craig.jpg'
import practice from '../assets/building.jpg' 
import MapContainer from './map'

const Home = () => {

        return (
            <div className="content">
            <div className="column-1">
                <h1>About</h1>
                <div className="img-wrap">
                    <img className="doc" src={practice} alt="Third Coast Family Practice" ></img>
                </div>
                <p>Third Coast Family Practice was established in 2004 by Dr. Craig Matheson. He and the Staff of Third Coast Family Practice are committed to caring for whole families at every stage of life. Building relationships with our patients allows us to understand their health histories, goals, and challenges. As your Primary Care Provider, we are the hub that connects all your health care interactions to coordinate and help you make choices about your health maintenance or disease management.</p>
            </div>
            <div className="column-2">
            <h1 className="sub-header">Doctor Matheson</h1>
                <p>Dr. Craig Matheson has been practicing medicine since graduating from the Chicago College of Osteopathic Medicine in 1987. His entire career has been devoted to providing personalized care in family private practices. </p>
                <div className="img-wrap">
                    <img className="doc" src={craig} alt="Doctor Craig Matheson" ></img>
                </div>
                <p className="doc-text">Since his residency at Christ Hospital of Chicago in 1988, to earning a certification at the American Academy of Family Practice in 1991, through today, Dr. Matheson has cared for his patients as their own trusted private care physician. Proving his commitment to caring for people in every stage of life, Dr. Matheson is an AMA certified EPEC Trainer (Education of Physicians on End-of-Life Care) as well as a member of CHADD (Children with Hyperactivity Attention Deficit Disorder), the national resource on ADHD. He also sits on the Board of Directors for the Physician Organization of West Michigan and is a Certified Medical Examiner for the Federal Motor Carrier Safety Administration. </p>
                
            </div>
            <div className="column-3">
                <div>
                    <h1>Location</h1>
                    <MapContainer />
                </div>
                <div className="contact">
                    <h1>Hours & Contact Info</h1>
                    <div className="info">
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

export default Home
