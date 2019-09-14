import React from "react";

function About() {
  return (
    <div className="container">
      <h2 className="text-light" style={{ textAlign: "right" }}>
        مواقيت الصلاة
      </h2>
      <p className="text-secondary" style={{ textAlign: "right" }}>
        Version 1.0.0
      </p>
      <br />
      <h3 className="text-light" style={{ textAlign: "center" }}>
        PrayerTimes is a web application that lets you know the prayer times in
        every time in Algeria. It's been created with{" "}
        <span className="text-info">React.js</span> and{" "}
        <span className="text-success">"Aladhan"</span> api
      </h3>
      <br />
      <h3 className="text-light" style={{ textAlign: "center" }}>
        Share this application if you like it because{" "}
        <span style={{ fontWeight: 800 }}> الدال على الخير كفاعله </span>
      </h3>
      <br />
      <h4 className="text-light" style={{ textAlign: "center" }}>
        Made with <i className="fas fa-heart" style={{ color: "red" }}></i>
        &nbsp; By Astromium
      </h4>
    </div>
  );
}

export default About;
