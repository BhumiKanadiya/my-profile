import React from 'react';
import './resume.css';

const Resume = () => {
    return <section id="resume" className="resume">
    <div className="container">

      <div className="section-title">
        <span>My Resume</span>
        <h2>My Resume</h2>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <h3 className="resume-title">Sumary</h3>
          <div className="resume-item pb-0">
            <h4>Bhumi Kanadiya</h4>
            <p><em>Seasoned Software Engineer bringing over 6+ years of experience, willing to take ownership of core components. Supportive and enthusiastic team player dedicated to streamlining processes and efficiently resolving project issues.</em></p>
          </div>
          <h3 className="resume-title">Skills</h3>
          <div className="resume-item">
            <ul>
              <li> <strong>Server Technology:</strong> ASP.Net, VB.Net</li>
              <li> <strong>Web Technology:</strong> React, React Native, AngularJS, JQuery, JavaScript,HTML, CSS</li>
              <li> <strong>Database:</strong>Microsoft SQL Server,  MySQL, CouchDB</li>
              <li> <strong>Web Services:</strong> REST, SOAP</li>
              <li> <strong>Source Control:</strong> GIT, Tortoise SVN</li>
              <li><strong>Tools/IDE:</strong> Apache Cordova, Azure DevOps, Microsoft Visual studio, Visual studio code</li>
            </ul>
          </div>

          <h3 className="resume-title">Education</h3>
          <div className="resume-item">
            <h4>Bachelor Of Technology </h4>
            <h5>2009 - 2013</h5>
            <p><em>Dharmsinh Desai University, India</em></p>
            <p>The course of study included operating systems, networking, security, database systems, artificial intelligence, data structure ,web technologies, C/C++, and object-oriented programming languages like Java and ASP.Net.</p>
            <ul>
              <li>7.45 GPA</li>
            </ul>

          </div>
          {/* <div className="resume-item">
            <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
            <h5>2010 - 2014</h5>
            <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
            <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
          </div> */}
        </div>
        <div className="col-lg-6">
          <h3 className="resume-title">Professional Experience</h3>
          <div className="resume-item">
            <h4>Software Engineer</h4>
            <h5>2018 - 2020</h5>
            <p><em>Vedlogic Solutions, Ahmedabad, India </em></p>
            {/* <p> */}
            <ul>
              <li>Worked in an Agile environment.</li>
              <li>Hands on experience in Azure Devops to integrate CI/CD for any application.</li>
              <li>Efficiently developed mobile application by showing good team work in React Native and CouchDB.</li>
              <li>Individually convert AngularJs web application into android and Ios application using Apache Cordova and publish to app store/ play store using Azure Devops.</li>
              <li>Successfully Developed .NET Core web API to dump data from My SQL to CouchDB.</li>
            </ul>
            {/* </p> */}
          </div>
          <div className="resume-item">
            <h4>Senior Software Engineer</h4>
            <h5>2013 - 2018</h5>
            <p><em>Tatvasoft, Ahmedabad, India</em></p>
            {/* <p> */}
            <ul>
              <li>Requirement analysis, task allocation, application testing, client communication are the key roles I have performed along with Designing, Development & Testing of web applications.</li>
              <li>Works on Safety management System using AngularJS and Entity Framewor</li>
              <li>Successfully resolved any real time production issues while maintaining and improving the existing systems.</li>
              <li>Lead the project in team and helped team to understand their task and workflow by communicating with client.</li>
            </ul>
            {/* </p> */}
          </div>
        </div>
      </div>

    </div>
  </section>

}
export default Resume;