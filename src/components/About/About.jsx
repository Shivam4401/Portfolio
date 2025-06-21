import React from "react";
import "./About.css";
import Card from "../Card/Card";
import mern from "../../assets/mern.png";
import java from "../../assets/java.png";
import dsa from "../../assets/dsa.png";
const About = () => {
  return (
    <div id="about">
      <div className="leftabout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        <div className="aboutdetails">
          <div className="personalInfo">
            <h1>Personal Info</h1>
            <p>
              <span>NAME</span> : SHIVAM KUMAR
            </p>
            <p>
              <span>AGE</span> : 24 YEARS
            </p>
            <p>
              <span>GENDER</span> : MALE
            </p>
            <p>
              <span>LANGUAGE</span> : HINDI, ENGLISH
            </p>
          </div>
          <div className="education">
            <h1>Education</h1>
            <p>
              <span>DEGREE</span> : B.TECH
            </p>
            <p>
              <span>BRANCH</span> : COMPUTER SCIENCE & ENGINEERING
            </p>
            <p>
              <span>CGPA</span> : 8.89
            </p>
          </div>
          <div className="skills">
            <h1>Skills</h1>
            <p>MERN STACK DEVELOPER</p>
            <p>JAVA</p>
            <p>DSA</p>
          </div>
        </div>
      </div>
      <div className="rightabout">
        <Card title="MERN STACK DEVELOPER" image={mern} />
        <Card title="JAVA" image={java} />
        <Card title="DSA" image={dsa} />
      </div>

      <div id="colorPicker" class="highlight-color"></div>
    </div>
  );
};

export default About;
