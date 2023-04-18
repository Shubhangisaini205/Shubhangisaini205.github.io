// import { a } from "react-router-dom";
import React from "react";
import "../CSS/navbar.css"
import { Button, Heading } from "@chakra-ui/react";
// import {Link} from "react-scroll"
import Shubhangi_Saini_Resume from "../Assests/Shubhangi_Saini_Resume.pdf"
function NavBar() {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  function handleResume() {
    window.open("https://drive.google.com/file/d/1mqHsjYvzlyFezTFl6_4TBeEYGGinXJfv/view?usp=share_link");

  }

  return (
    <div className="x">
      <div
        className={click ? "main-container" : ""}
        onClick={() => Close()} />
      <nav
        id="nav-menu"
        className="nav-menu"
        onClick={e => e.stopPropagation()}>
        <div className="logo">
          <a href="#home" className="nav-logo">
            SHUBH
            <i className="fa fa-code"></i>
          </a>
          <ul className={click ? "menu active" : "menu"}>
            <li className="nav-item">
              <a
                href="#home"
               
                className="nav-link home"
                onClick={click ? handleClick : null}
              >
                Home
              </a>
            </li>
            <li className="nav-item" >
              <a
              href="#about"
                className="nav-link about section"
                onClick={click ? handleClick : null}
              >
               
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#skills"
                className="nav-link skills"
                onClick={click ? handleClick : null}
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a

                href="#projects"
                
                className="nav-link projects"
                onClick={click ? handleClick : null}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a

              href="#contact"
               
                className="nav-link contact"
                onClick={click ? handleClick : null}
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                href={Shubhangi_Saini_Resume} download={true} target='_blank'
                className="nav-link resume" id="resume-link-1"
                onClick={click ? handleClick : null}

              >
                <Button id="resume-button-1" onClick={handleResume} border="1px solid white" colorScheme="pink"> Resume</Button>

              </a>
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