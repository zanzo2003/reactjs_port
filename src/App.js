import React from 'react';
import './App.css';
import profileImage from './photo.jpg';

function App() {
  return (
    <div className="portfolio">
      <img src={profileImage} alt="Profile" className="profile-image" />
      <h1>Saxam Rawat</h1>
      <p>City: Dehradun, India</p>
      <p>College Reg No: 21BCG10087</p>
      <p>Email: saxamrawat@gmail.com</p>
      <p>Mobile: +91 7060472549</p>
      <div className="social-links">
        <a href="https://github.com/saxamrawat" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/saxamrawat" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://www.instagram.com/saxamrawat" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://docs.google.com/document/d/1jmxWQjpuW7tiYJoANiA7p3njpgv1vZfn/edit?usp=sharing&ouid=112017365365283991142&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">Resume</a>
      </div>
    </div>
  );
}

export default App;
