import React from 'react';
import './aboutme.css';

const AboutMe = () =>{
    return   <section id="about" className="about">
    <div className="container">

      <div className="section-title">
        <span>About Me</span>
        <h2>About Me</h2>
        <p>Full Stack Web Developer | React Native | React | .NET Core</p>
      </div>

      <div className="row">
        {/* <div className="image col-lg-4 d-flex align-items-stretch justify-content-center justify-content-lg-start"></div> */}
        <div className="col-lg-12 d-flex flex-column align-items-stretch">
          <div className="content pl-lg-4 d-flex flex-column justify-content-center">
            <div className="row">
              <div className="col-lg-6">
                {/* <ul>
                  <li><i className="icofont-rounded-right"></i> <strong>Name:</strong> Laura Thomson</li>
                  <li><i className="icofont-rounded-right"></i> <strong>Website:</strong> www.example.com</li>
                  <li><i className="icofont-rounded-right"></i> <strong>Phone:</strong> +123 456 7890</li>
                  <li><i className="icofont-rounded-right"></i> <strong>City:</strong> City : New York, USA</li>
                </ul> */}
               <p>
                <em>
                Working as a Full-Stack web developer at Vedlogic Solutions was a great opportunity for me to work with emerging technologies like React Js,React Native and .Net Core. My previous work experience with Tatvasoft as a Senior Software Engineer helped me a lot to grow my technical expertise in the field of web development and Databases.
                </em>
              </p> 
              <br/>
              <p>
                <em>
                Starting in 2013 as an Asst. Software engineer in Tatvasoft I worked in ASP.Net, C#, SQL Server, JavaScript and HTML/CSS to develop different projects during the time span of 4 years.
                As Senior Software Engineer my work experience includes advising junior programmers, consulting with clients, deployment on live server, troubleshooting, handling projects, and testing software along with web development.
                
                
                </em>
              </p>


              </div>
              <div className="col-lg-6">
                <p>
                  <em>
                    I developed my research skills while working on an individual project in Vedlogic Solutions, Where I convert web application into hybrid mobile application using Apache Cordova and then sucessfully publish on PlayStore/AppStore using Azure DevOps pipelines.
                  </em>
                </p>
                <br/>
                <p>
                  <em>
                    During my graduate study at Dharmsinh Desai University, I have learned operating systems, networking, security, database systems, artificial intelligence, data structure ,web technologies, C/C++, and object-oriented programming languages like Java and ASP.Net.
                    Along with this I was member of Sports cummittee and organize cricket match and vollyball match for girls team.
                  </em>
                </p>
              </div>
            </div>
            <div className="row mt-n4">
              <div className="col-md-6 mt-5 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  <i className="icofont-clock-time" style={{color: '#2cbdee'}}></i>
                  <span data-toggle="counter-up">6+</span>
                  <p><strong>Years of experience</strong> in software development with Agile methedology</p>
                </div>
              </div>

              <div className="col-md-6 mt-5 d-md-flex align-items-md-stretch">
                <div className="count-box">
                  <i className="icofont-document-folder" style={{ color: '#8a1ac2'}}></i>
                  <span data-toggle="counter-up">10+</span>
                  <p><strong>Projects</strong> in C#, .net core and React</p>
                </div>
              </div>
            </div> 
          </div>

          {/* <div className="skills-content pl-lg-4">
            <div className="progress">
              <span className="skill">HTML <i className="val">100%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">CSS <i className="val">90%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">JavaScript <i className="val">75%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div> */}

        </div>
      </div>

    </div>
  </section>
}
export default AboutMe;