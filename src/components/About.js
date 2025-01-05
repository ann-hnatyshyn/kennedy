import React from "react";
import avatar from "../assests/images/stella.jpeg"

const About = () => {
  const firstName = "Stella"
  const lastName = "Kennedy"

  return (
    <aside>
      <div className="profile">
        <img className="profile__image" src={avatar} />
      </div>
      <br />
      <div className="profile__name">
        <h2><span className="profile--bold">{firstName}</span> {lastName}</h2>
      </div>
    </aside>
  )
};

export default About;