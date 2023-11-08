import React from 'react';
import './App.css';

var profileImage = "https://e7.pngegg.com/pngimages/870/211/png-clipart-iphone-world-emoji-day-man-iphone-electronics-face-thumbnail.png";

function App() {
  return (
    <div className="portfolio">
      <img src={profileImage} alt="Profile" className="profile-image" />
      <h1>Shashwath Bhaskar</h1>
      <p>City: Thiruvanamthapuram, India</p>
      <p>College Reg No: 21BCE10646</p>
      <p>Email: bhaskarshashwath@gmail.com</p>
      <p>Mobile: +91 9567098994</p>
      <div className="social-links">
        <a href="https://github.com/zanzo2003" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/shashwath-bhaskar-a56597213/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://www.instagram.com/stop.itttt.shashhh/" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://drive.google.com/file/d/1PeCN_ROEeRmxCtjPb06-Qhug3tcNS4zV/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
      </div>
    </div>
  );
}

export default App;
