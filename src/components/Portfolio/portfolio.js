import React from 'react';
import './portfolio.css';
import { Link } from 'react-router-dom';

const Portfolio = (props) =>{
    return <section id="portfolio" className="portfolio">
    <div className="container">

      <div className="section-title">
        <span>My Portfolio</span>
        <h2>My Portfolio</h2>
        <p>Web Application | Mobile Application | Cloud Technology</p>
      </div>

      <div className="row portfolio-container">

        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-img"><img src="./img/LMSMobileApp.png" className="img-fluid" alt="" /></div>
          <div className="portfolio-info">
            <h4>LMS Mobile App</h4>
            <p>React Native, CouchDB</p>
            <Link  to={{
                        pathname: "/project-detail",
                        ProjectName: "LMSMobile"
                      }}
                    className="details-link" title="More Details" onClick={props.DetailClick}><i className="bx bx-link"></i></Link>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
          <div className="portfolio-img"><img src="./img/NHSP.jpg" className="img-fluid" alt="" /></div>
          <div className="portfolio-info">
            <h4>NHSP Mobile App</h4>
            <p>AngularJS, Cordova</p>
            <Link  to={{
                        pathname: "/project-detail",
                        ProjectName: "NHSPMobile"
                      }}
                    className="details-link" title="More Details" onClick={props.DetailClick}><i className="bx bx-link"></i></Link>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
          <div className="portfolio-img"><img src="./img/AzureCICD.jpg" className="img-fluid" alt=""/></div>
          <div className="portfolio-info">
            <h4>CI/CD Pipeline</h4>
            <p>Azure DevOps</p>
            <Link  to={{
                        pathname: "/project-detail",
                        ProjectName: "AzurePipeline"
                      }}
                    className="details-link" title="More Details" onClick={props.DetailClick}><i className="bx bx-link"></i></Link>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-img"><img src="./img/WebAPI.png" className="img-fluid" alt=""/></div>
          <div className="portfolio-info">
            <h4>Web API</h4>
            <p>.NET Core, MySQL, CouchDB</p>
            <Link  to={{
                        pathname: "/project-detail",
                        ProjectName: "WebAPI"
                      }}
                    className="details-link" title="More Details" onClick={props.DetailClick}><i className="bx bx-link"></i></Link>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
          <div className="portfolio-img"><img src="./img/LMS.jpg" className="img-fluid" alt=""/></div>
          <div className="portfolio-info">
            <h4>LMS</h4>
            <p>ASP.Net, Javascript, MySQL</p>
            <Link  to={{
                        pathname: "/project-detail",
                        ProjectName: "LMSMobile"
                      }}
                    className="details-link" title="More Details" onClick={props.DetailClick}><i className="bx bx-link"></i></Link>
          </div>
        </div>
        
        <div className="col-lg-4 col-md-6 portfolio-item filter-card">
          <div className="portfolio-img"><img src="./img/solv-health.png" className="img-fluid" alt=""/></div>
          <div className="portfolio-info">
            <h4>SolvSafety</h4>
            <p>AngularJS, C#, SQL Server </p>
            <Link  to={{
                        pathname: "/project-detail",
                        ProjectName: "SolvSafety"
                      }}
                    className="details-link" title="More Details" onClick={props.DetailClick}><i className="bx bx-link"></i></Link>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
          <div className="portfolio-img"><img src="./img/Injury.jpeg" className="img-fluid" alt=""/></div>
          <div className="portfolio-info">
            <h4>Injury Connect</h4>
            <p>VB.net, C#, SQL server</p>
            <Link  to={{
                        pathname: "/project-detail",
                        ProjectName: "InjuryConnect"
                      }}
                    className="details-link" title="More Details" onClick={props.DetailClick}><i className="bx bx-link"></i></Link>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
          <div className="portfolio-img"><img src="./img/Safety-First.jpg" className="img-fluid" alt=""/></div>
          <div className="portfolio-info">
            <h4>SafetyMax</h4>
            <p>VB.net, C#, SQL server</p>
            <Link  to={{
                        pathname: "/project-detail",
                        ProjectName: "SafetyMax"
                      }}
                    className="details-link" title="More Details" onClick={props.DetailClick}><i className="bx bx-link"></i></Link>
          </div>
        </div>


       


      </div>

    </div>
  </section>
}
export default Portfolio;