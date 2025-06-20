import React from "react";
import "./Projects.css";
import Card from "../Card/Card";
import br from "../../assets/br.png";
import fw from "../../assets/fw.png";
import va from "../../assets/va.png";
import tti from "../../assets/tti.png";
import ise from "../../assets/ise.png";

const Projects = () => {
  return (
    <div id="projects">
      <h1 id="exp">2+ YEARS OF EXPERIENCED IN PROJECTS </h1>
      <div className="slider">
        <Card title="VIRTUAL ASSITANT" image={va} />
        <Card title="AI POWERED FITNESS WEBSITE" image={fw} />
        <Card title="AI CHATBOT" image={tti} />
        <Card title="BACKGROUND REMOVER" image={br} />
        <Card title="IMAGE SEARCH ENGINE" image={ise} />
        <Card title="TEXT TO IMAGE GENERATOR" image={tti} />
      </div>
    </div>
  );
};

export default Projects;
