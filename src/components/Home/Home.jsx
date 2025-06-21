import React from "react";
import "./Home.css";
import manImg from "../../assets/man.png";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div id="home">
      <div className="lefthome">
        <div className="details">
          <div className="line1">I'M</div>
          <div className="line2">SHIVAM KUMAR</div>
          <div className="line3">
            <Typewriter
              words={[
                "SOFTWARE ENGINEER",
                "FRONTEND DEVELOPER",
                "BACKEND DEVELOPER",
                "FULL STACK DEVELOPER",
              ]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
          <button id="hireMe">Hire me</button>
        </div>
      </div>
      <div className="righthome">
        <img src={manImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
