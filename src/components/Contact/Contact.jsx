import React from "react";
import "./Contact.css";
import contact from "../../assets/contact.png";
const Contact = () => {
  return (
    <div id="contact">
      <div className="leftcontact">
        <img src={contact} alt="" />
      </div>
      <div className="rightcontact">
        <form action="https://formspree.io/f/xrbkaqqd" method="POST">
          <h1 id="contact-me">Contact Me</h1>
          <input type="text" placeholder="Enter Name" name="name" />
          <input type="email" placeholder="Enter email" name="email" />
          <textarea
            name="info"
            id="info"
            placeholder="Message me"
            rows={8}
          ></textarea>
          <button id="btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
