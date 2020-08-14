import React from 'react';
import Scrollspy from 'react-scrollspy'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/home';
import AboutMe from './components/AboutMe/aboutme';
import Resume from './components/Resume/resume';
// import Testimonials from './components/Testimonials/testimonials';
import Portfolio from './components/Portfolio/portfolio';
import ContactMe from  './components/ContactMe/contactMe';
import Footer from './components/footer/footer';
import ProjectDetail from './components/ProjectDetails/projectdetail';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      isScroll : false,
      isDetail : false,
    }

  };

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount(){
    window.removeEventListener('scroll',this.handleScroll);
  }
  
  handleScroll = (event) =>{
    // console.log('page', window.pageYOffset);
    if(window.pageYOffset > 100 && !this.state.isScroll){
      this.setState({isScroll :true});
    }
    if(window.pageYOffset < 100 && this.state.isScroll)
    {
      this.setState({isScroll :false});
    }
  }

  setDetailPageState = () =>{
    this.setState({ isScroll:true, isDetail:true});
    window.scroll(0, 0);
  }

  setMainPageState = () =>{
    this.setState({ isDetail:false});
    window.scroll(0, 0);
  }

  render(){
  return (
    <div>
        <header id="header" className={this.state.isScroll || this.state.isDetail ? "fixed-top  d-flex align-items-center header-scrolled": "fixed-top  d-flex align-items-center header-transparent"} >
          <div className="container">
            <div className="float-left">
              <a href="http://localhost:3000/">< img src="./img/BK.png" style={{ 'height': '40px'}} alt="" className="img-fluid"/></a>
            </div>
              { !this.state.isDetail &&
                <nav className="nav-menu float-right d-none d-lg-block">
                  <Scrollspy items={ ['home','about', 'resume', 'portfolio','contact'] } currentClassName="active">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#resume">Resume</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                  </Scrollspy>
                </nav> } 
          </div>
       </header>
      <Router>
        <Switch>
          <Route path="/project-detail">
            <ProjectDetail BackClick={() => this.setMainPageState()}/>
          </Route>
          <Route path="/">
            <Home></Home>
            <AboutMe/>
            <Resume/>
            {/* <Testimonials/> */}
            <Portfolio DetailClick={() => this.setDetailPageState()}/>
            <ContactMe/>
          </Route>
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}
}
export default App;
