import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import Particles from 'react-particles-js';
import SkillBar from 'react-skillbars';
import { binary, computer, element, fts, Agility, me, linkedIn, wells, AppState } from './imgs'
import { Link, Element } from 'react-scroll'
import { Parallax} from 'react-parallax';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

const skills = [
  {
    "type": "JavaScript",
    "level": 85,
    "color": {
      "bar": "#3498db",
      "title": {
        "text": "#fff",
        "background": "#2980b9"
      }
    }
  },
  {
    "type": "React",
    "level": 80,
    "color": {
      "bar": "#4288d0",
      "title": {
        "text": "#fff",
        "background": "#124e8c"
      }
    }
  },
  {
    "type": "Angular",
    "level": 65,
    "color": {
      "bar": "#5a68a5",
      "title": {
        "text": "#fff",
        "background": "#46465e"
      }
    }
  },
  {
    "type": "HTML",
    "level": 75,
    "color": {
      "bar": "#2c3e50",
      "title": {
        "text": "#fff",
        "background": "#2c3e50"
      }
    }
  },
  {
    "type": "NodeJS",
    "level": 65,
    "color": {
      "bar": "rgba(255,0,0, 0.8)",
      "title": {
        "text": "#fff",
        "background": "rgba(200,0,0, 0.7)"
      }
    }
  },
  {
    "type": "MongoDB",
    "level": 65,
    "color": {
      "bar": "#ff000",
      "title": {
        "text": "#fff",
        "background": "#ff111"
      }
    }
  },
  {
    "type": "Bootstrap",
    "level": 90,
    "color": {
      "bar": "#2ecc71",
      "title": {
        "text": "#fff",
        "background": "#27ae60"
      }
    }
  }
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="container-fluid" style={{ padding: "0px", }}>
        <Navbar color="light" light expand="md" fixed-top>
          <NavbarBrand href="/" className="pl-3" style={{ fontWeight: "700", padding: "0px" }}><span style={{ color: "rgba(200,0,0)" }}>Clay</span> Palumbo</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {/* <NavItem>
                <NavLink href="#">About</NavLink>
              </NavItem> */}
              <NavItem>
                <Link activeClass="active" to="normal" spy={true} smooth={true} duration={750} style={{ color: "rgba(0, 0, 0, 0.5)" }}>About</Link>
              </NavItem>
              <NavItem>
                <Link activeClass="active" to="app" spy={true} smooth={true} duration={750} style={{ color: "rgba(0, 0, 0, 0.5)" }}>Profile</Link>
              </NavItem>
              <NavItem>
                <Link activeClass="active" to="contact" spy={true} smooth={true} duration={750} style={{ color: "rgba(0, 0, 0, 0.5)" }}>Contact</Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret style={{ padding: "0px" }}>
                  Social Pages
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href="https://github.com/kelptape" target="_blank">Github</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="https://www.linkedin.com/in/clay-palumbo/" target="_blank">LinkedIn</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        <div className="App" >
          <div class="title-box bounceInLeft pb-3 pl-5 pr-5 pt-4">
            <h1> UI / UX Engineer</h1>
            <p class="text-white">(click the image)</p>
          </div>
          <div class="nameTitle bounceInLeft pb-3 pl-5 pr-5 pt-4">
            <p class="text-white"><span style={{}}>Think</span></p>
            <p class="text-white"><span style={{}}>Design</span></p>
            <p class="text-white"><span style={{}}>Engineer</span></p>
            <p class="text-white"><span style={{}}>Implement</span></p>

          </div>
          <Particles
            params={{
              "particles": {
                "number": {
                  "value": 100
                },
                "size": {
                  "value": 3
                },
              },
              "color": {
                "value": "black"
              },
              "interactivity": {
                "events": {
                  "onhover": {
                    "enable": true,
                    "mode": "repulse"
                  },
                  "onclick": {
                    "enable": true,
                    "mode": "push"
                  }
                }
              }

            }}
            style={{
              width: '100%',
              height: '100vh',
              background: `linear-gradient(325deg, rgba(200,0,0,0.7), rgba(28, 186, 235, .7)), url(${binary})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Element name="normal" className="element big"></Element>

          <div className="row text-center" style={{ margin: "20px" }}>
            <div className="col-1">
            </div>
            <Card className="col-3" style={{ margin: "20px", padding: "20px", border: "none" }}>
              <CardImg top width="90%" src={element} alt="Card image cap" style={{}} />
              <CardBody>
                <CardTitle style={{ color: "rgba(200,0,0)", fontSize: "24px" }}>Design Centric</CardTitle>
                <CardText>Able to set standards for design patterns through well- researched, cost-effective and responsive solutions.</CardText>
              </CardBody>
            </Card>
            <Card className="col-3" style={{ margin: "20px", padding: "20px", border: "none" }}>
              <CardImg top width="10%" src={computer} alt="Card image cap" />
              <CardBody>
                <CardTitle style={{ color: "rgba(200,0,0)", fontSize: "24px" }}>Innovative Engineer</CardTitle>
                <CardText>Offering experience in the full SDLC from concept to production in developing modern applications and customizable solutions.</CardText>
              </CardBody>
            </Card>
            <Card className="col-3" style={{ margin: "20px", padding: "20px", border: "none" }}>
              <CardImg top width="10%" src={Agility} alt="Card image cap" />
              <CardBody>
                <CardTitle style={{ color: "rgba(200,0,0)", fontSize: "24px" }}>High-Performance</CardTitle>
                <CardText>Focusing on building a high-performance scalable applications.</CardText>
              </CardBody>
            </Card>
          </div>
          <Element name="app" className="element big"></Element>
          <div className="row" >
            <div className="col-12 pt-4 mt-0 text-left" style={{
              background: `url(${linkedIn})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              margin: "auto"
            }}>
              <div>
                <img src={me} alt="Clay Palumbo" className="helper pt-5" style={{ width: "20%" }} />
              </div>
              <div className="row">
                <div className="pl-5 col-6">
                  <h4>Clay Palumbo</h4>
                  <h5>Application Systems Engineer</h5>
                  <p>Charlotte, NC</p>
                </div>
                <div className="col-6 text-left pl-5">
                  <div className="m-2" >
                    <img src={wells} alt="Wells Fargo" className="mr-1" style={{ width: "5%" }} />
                    <span className="mr-5"> <b>Wells Fargo</b></span>
                  </div>
                  <div className="m-2" >
                    <img src={AppState} alt="Wells Fargo" className="mr-1" style={{ width: "5%" }} />
                    <span className="mr-5"> <b>Appalachian State University</b></span>
                  </div>
                </div>
              </div>
              <hr/>
            </div>
            <div className="col-md-1">
              </div>
            <div className="col-4 mb-5 pl-5 pt-5 pr-5 text-left">
            <h1><span style={{fontWeight: "200", fontSize: "50px"}}>TOP SHELF </span></h1><h1 style={{fontWeight: "200", fontSize: "50px"}}>DEVELOPMENT</h1> 
            <p>with a focus on modern web production. Utilizing the latest tools available to help build quality solutions.</p>          
              </div>
              {/* <div className="col-md-1">
              </div> */}
            <div className="col-6 pl-5 mb-5 pr-5">
              <SkillBar
                skills={skills}
                animationDelay={0}
                offset={0}
                height={"4vh"}
              />
            </div>
            </div>
          {/* <div
            style={{
              background: `url(${fts})`,
              height: "70vh",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              margin: "auto"
            }} */}
          >
                    <Parallax
            bgImage={fts}
            strength={400}
            renderLayer={percentage => (
              <div
                style={{
                  position: 'absolute',
                  background: `linear-gradient(rgba(88, 179, 122, ${percentage * 1}), rgba(38, 38, 38, ${percentage * 1}))`,
                  left: '0%',
                  top: '0%',
                  width: "100%",
                  height: percentage * 2000,
                }}
              />
            )}
          >
            <div style={{
              height: "60vh",
            }}>
            </div>
          </Parallax>
          <Element name="contact" className="element big"></Element>
          <div
            style={{
              height: "50vh",
            }}>
            <h1 className="pt-5" style={{ margin: "auto" }}>
            <h1><span style={{fontWeight: "200", fontSize: "50px"}}>Contact Section </span></h1><h1 style={{fontWeight: "200", fontSize: "50px"}}>Coming Soon</h1> 
            </h1>
          </div>
          {/* <div className="col-12 p-0">
          <h3>Currently Applying In</h3>
            <GoogleMapComponent />
          </div> */}
        </div>
      </div>
    );
  }
}


export default App;
