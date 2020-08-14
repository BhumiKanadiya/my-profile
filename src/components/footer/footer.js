import React from 'react';
import './footer.css';

const Footer = () =>{
    return  <footer id="footer">
    <div className="container">
      <img src="./img/Profile.jpg" className="testimonial-img" alt=""/>
      {/* <h3>Bhumi Kanadiya</h3>
      <p>Let’s Connect and share more about the job position, technologies and project background.</p> */}
      <div className="copyright">
       <p> &copy; Copyright <strong><span>2020</span></strong> | Designed by Bhumi Kanadiya |  All Rights Reserved  </p> 
      </div>
    
      <div className="social-links">
        <a href="https://www.linkedin.com/in/bhumi-kanadiya-47485a16b" target="_blank" className="linkedin"><i className="bx bxl-linkedin"></i></a>
        <a href="mailto:bhoomi.kanadiya01@gmail.com" target="_blank" ><i className="bx bx-mail-send"></i></a>
        <a href="https://www.facebook.com/bhoomi.kanadiya.10/" target="_blank" className="facebook"><i className="bx bxl-facebook"></i></a>
        <a href="skype:live:.cid.b2850b0d1f15a78a?chat" className="google-plus" target="_blank"><i className="bx bxl-skype"></i></a>
      </div>
      {/* <div className="credits">
        Designed by Bhumi Kanadiya
      </div> */}
    </div>
  </footer>
}

export default Footer;