import React from 'react';
import './projectdetail.css';
import { useHistory, Redirect, withRouter } from "react-router";

var ProjectData = {
 Projects:{
      LMSMobile : {
        Name: "LMS Mobile",
        FullName: "Locum Management System",
        Discription : "This app is to provide an ability to candidates so they can view latest jobs, can filter jobs, can apply for the job, can book them selves for the job, can update their availability.",
        Roles :[
              "Setup Push notification to get alert for new events",
              "configure CouchDB API to get live sync for data",
              "Developed New modules with React function component using Hooks ",
              "Unit Testing for each and individual task "
            ],
        Env: ["React Native", "CouchDB", "HTML", "CSS"]
      },
      NHSPMobile: {
        Name: "NHSP Mobile",
        FullName: "National Health Service Proessional",
        Discription : "This app is to provide an ability to candidates so they can view latest jobs, can filter jobs, can apply for the job, can book them selves for the job, can update their availability.",
        Roles :[
                "R&D on Apache Cordova, how to convert web application in hybrid mobile app",
                "Convert web application to mobile application using Apache Cordova",
                "Developed amd maintain module in Angular JS for both Web and mobile application",
                "Created required stored procedures and functions in SQL server to manage the data",
                "Client Communication, Task Planning, Testing, Deployment"
              ],
        Env: ["AngularJS", "c#", "Cordova","MySQL"]
        
      },
      AzurePipeline: {
        Name: "DevOps Pipelining",
        Discription : "Azure Pipelines is a cloud service that you can use to automatically build and test your code project and make it available to other users.",
        Roles :[
                "R&D on Azure Devops Pipeline to configure CI/CD for any project",
                "Learn and configure cordova task for hybrid appication in pipeline",
                "Deploy mobile application to Appstore/Playstore",
                "Prepare detail document to setup pipeline for any project on any server"
              ],
        Env: ["Azure Devops"]
        
      },
      LMS: {
        Name: "LMS",
        FullName: "Locum Management System",
        Discription : "This interface will provide ability to maintain profile of the candidate. Using this interface user can keep track of communication done with the candidate, also there is ability to store references with the scanned document, candidate marketing email maintenance, CV of the candidate, Health Documents, Available Jobs, Matching Jobs etc",
        Roles :[
                "New Development as well Maintaing old code and project functionality",
                "Created required stored procedures and functions in SQL server to manage the data",
                "Used jquery and Javascript functions to improve website performance",
                "Unit Testing for each individual task"
              ],
        Env: ["ASP.NET, C#" , "MySQL" , "JQuery, JavaScript", "HTML"]
        
      },
      WebAPI: {
        Name: "Web API",
        Discription : "This web API provides an ability to dump data from MySQL to CouchDB. A bridge to maintain data Synchronization between MySQL and CouchDB so user can never face data difference between Web application and mobile application.",
        Roles :[
                "configuration of CouchDB database in .Net Core Web API",
                "Design couchDB Documents as per mobile application requirement",
                "Created store procedure in MySQL database and convert datatable to JSON object to save document in couchDB",
                "Created Document for each data process which helps other developer as well QA team to prepare test cases",
                "Unit Testing for each and individual task"
              ],
        Env: [".NET Core", "C#", "MySQL", "CouchDB"]
      },
      SolvSafety: {
        Name: "SolvSafety",
        Discription : "Safety Management System which contains integration of easy capturing; track manages of Incidents/Hazards, risks, actions, audits, meetings. This application has been developed to make it simple and easily capture safety information that resulting in fully visible while standardizing the process across business. Rebuilt application which was in vb.net with angularJS.",
        Roles :[
                "Developed  safetymax module using in AngularJS and Entity Framwork",
                "Design and maintained UI with the help of HTML5 and Bootstrap CSS",
                "Created complax LINK query syntax to get data from multiple table",
                "Unit Testing and managing GIT repository"
              ],
        Env: ["AngularJS", "C#","Entity Framwork", "SQL server", "HTML", "BootStrap"]
      },
      InjuryConnect: {
        Name: "Injury Connect",
        Discription : "InjuryConnect is an online injury management system which has been designed to significantly improve the way organizations deal with workplace injuries, workers compensation claims, return to work process. The online system is highly secure and provides a centralized database to deliver simplified real-time capture, viewing, tracking, management and reporting of your workplace injuries and workers compensation claims.",
        Roles :[
                "Requirement Understanding, Task Planning and Task Allocation to Team member",
                "Developed and maintain module using VB.net c# code",
                "Handle server side logic with Javascript",
                "Created required stored procedures and functions in SQL server to manage the data",
                "Client communication and Deployment on QA and Live server"
              ],
        Env: ["VB.Net", "C#","Javascript", "SQL server", "HTML", "CSS"]
      },
      SafetyMax: {
        Name: "SafetyMax",
        Discription : "Safety Maagement System which contains integration of easy capturing; track manages of Incidents/Hazards, risks, actions, audits, meetings. This application has been developed to make it simple and easily capture safety information that resulting in fully visible while standardizing the process across business.",
        Roles :[
                "Requirement Understanding, Task Planning and Task Allocation to Team member",
                "Developed and maintain module using VB.net c# code",
                "Handle server side logic with Javascript",
                "Created required stored procedures and functions in SQL server to manage the data",
                "Client communication and Deployment on QA and Live server"
              ],
        Env: ["VB.Net", "C#","Javascript", "SQL server", "HTML", "CSS"]
      }


    }
 }

const ProjectDetail = (props) => {
  let history = useHistory();
  const BackClick = () => {
    history.push('/');
    props.BackClick();
  }

  if(!props.location.ProjectName)
  {
    return  <Redirect to="/"></Redirect>
  }
  var data = props.location.ProjectName ? ProjectData.Projects[props.location.ProjectName] : ProjectData.Projects["LMSMobile"];

  return <section id="resume" className="resume">
  <div className="container">

    <div className="section-title">
      <span> {data.Name} </span>
      <h2>{data.Name}</h2>
      <p>{data.FullName}</p>
    </div>

    <div className="row">
      <div className="col-lg-6">
        <h3 className="resume-title">Discription</h3>
        <div className="resume-item pb-0">
          <p><em>{data.Discription}</em></p>
        </div>
        <h3 className="resume-title">Environment </h3>
        <div className="resume-item">
           <ul>
             {
               data.Env.map((value, index)=>{
               return <li key={index}> {value}</li>
               })
             }
            </ul>
        </div>
      </div>
      <div className="col-lg-6">
        <h3 className="resume-title">Responsibility</h3>
          <div className="resume-item">
            <ul>
              { 
                data.Roles.map((value, index)=>{
                  return <li key={index}> {value}</li>
                })
              }
            </ul>
          </div>
      </div>
     
    </div>
    <div className="text-center">
      <button type="submit" onClick={() => BackClick()}>Back</button></div>
  </div>
</section>
}
export default withRouter(ProjectDetail);