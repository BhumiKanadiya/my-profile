import React from 'react';
import './contactMe.css';

const ContactMe = () =>{
    return <section id="contact" className="contact">
    <div className="container">

      <div className="section-title">
        <span>Contact Me</span>
        <h2>Contact Me</h2>
        <p>Let’s Connect and discuss more about the job position, technologies and project background.</p>
      </div>

      <div className="row">
        <div className="col-lg-12 info-box">
          <i className="bx bx-share-alt"></i>
          <h3>Social Profiles</h3>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/bhumi-kanadiya-47485a16b" target="_blank" className="linkedin"><i className="icofont-linkedin"></i></a>
            <a href="https://www.facebook.com/bhoomi.kanadiya.10/" target="_blank" className="facebook"><i className="icofont-facebook"></i></a>
            <a href="mailto:bhoomi.kanadiya01@gmail.com" target="_blank" className="twitter"><i className="icofont-email"></i></a>
            <a href="skype:live:.cid.b2850b0d1f15a78a?chat" target="_blank" className="google-plus"><i className="icofont-skype"></i></a>
          </div>
        </div>
      </div>

    </div>
  </section>
}
export default ContactMe;