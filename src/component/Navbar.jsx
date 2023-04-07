import { NavLink } from "react-router-dom";
import React from "react";
import "../CSS/navbar.css"
import { Button } from "@chakra-ui/react";
import MyResume from "../Assests/Shubhangi_Saini_Resume.pdf"
function NavBar() {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  function handleResume() {
    window.open("https://drive.google.com/file/d/1mqHsjYvzlyFezTFl6_4TBeEYGGinXJfv/view?usp=share_link");
  
  }

  return (
    <div>
      <div
        className={click ? "main-container" : ""}
        onClick={() => Close()} />
      <nav
        className="nav-menu"
        id="nav-menu"
        onClick={e => e.stopPropagation()}>
        <div className="logo">
          <NavLink to="/" className="nav-logo">
            Shubh S
            <i className="fa fa-code"></i>
          </NavLink>
          <ul className={click ? "menu active" : "menu"}>
            <li className="nav-item">
              <NavLink
                to="/"
                id="home"
                className="nav-link home"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink

                to="/about"
                id="about"
                className="nav-link about"
                onClick={click ? handleClick : null}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink

                to="/skills"
                id="skills"
                className="nav-link skills"
                onClick={click ? handleClick : null}
              >
                Skills
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink

                to="/projects"
                id="projects"
                className="nav-link projects"
                onClick={click ? handleClick : null}
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink

                to="/contact"
                id="contact"
                className="nav-link contact"
                onClick={click ? handleClick : null}
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link resume"
                onClick={click ? handleClick : null}
              >\
                <Button id="resume-button-1 resume-link-1" onClick={handleResume} border="1px solid white" colorScheme="pink" download="Shubhangi_Saini_Resume"> Resume</Button>
              
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </ div>
  );
}
export default NavBar;