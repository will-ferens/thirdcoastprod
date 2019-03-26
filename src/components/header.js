import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css'
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <div className="header-wrap">
            <div class="portal">
                <a href="https://health.eclinicalworks.com/thirdcoastfamily" ><button class="portal-button">Patient Portal</button></a>
            </div>
            <div className="nav-bar">
                <ul className="nav">
                    <Link to="/"className="nav-item">Home</Link>
                    <Link to="/services"className="nav-item">Services</Link>
                    <Link to="/care"className="nav-item">Care</Link>
                    <Link to="/newpatients"className="nav-item">New Patients</Link>
                </ul>
            </div>
            <div className="title">
                <h1>Third Coast Family Practice</h1>
                <p>Dr. Craig Matheson</p>
            </div>
            <div className="logo-wrapper">
                <img src={logo} alt="logo" id="logo"/>
            </div>
        </div>
    )
}


export default Header