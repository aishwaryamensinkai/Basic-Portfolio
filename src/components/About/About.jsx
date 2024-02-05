import React, { useEffect } from "react";
import "./About.css";
import { Link } from "react-router-dom";
import LottieAnimation from "../AnimationComponent/AnimationComponent";
import flag from "/src/assets/Flag.json";
import programmer from "/src/assets/Programmer.json";
import react_logo from "/src/assets/React.json";
import college from "/src/assets/college.json";
import projects from "/src/assets/projects.json";
import codey from "/src/assets/Codey.json";
import github from "/src/assets/github-logo.svg";
import gmail from "/src/assets/gmail-logo.svg";
import linkedin from "/src/assets/linkedin-logo.svg";
import up_arrow from "/src/assets/up-arrow.svg";
import star from "/src/assets/star.svg";
import felicity from "/src/assets/felicity.png";
import anicca from "/src/assets/anicca.png";
import syracuse from "/src/assets/syracuse.png";
import pelatro from "/src/assets/pelatro.png";
import kle from "/src/assets/kle.png";
import course from "/src/assets/course.png";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function About() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  /*
   * Scrolling Animation
   */
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    // Clean up the observer when the component unmounts
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []); // The empty dependency array ensures that this effect runs only once after the initial render.

  return (
    <div id="about" className="about">
      <div className="hidden about-section">
        <div className="about-section-text">
          <h2>
            I'm a <span className="markup-light">24</span>-year old{" "}
            <span className="markup-light">Software Engineer</span>.
          </h2>
        </div>
        <div className="about-section-media">
          <LottieAnimation animationData={programmer} />
        </div>
      </div>
      <div className="hidden about-section">
        <div className="about-section-media">
          <LottieAnimation id="pr" animationData={flag} />
        </div>
        <div className="about-section-text">
          <h2>
            Born and raised in India
            <span className="markup-dark"></span>.{" "}
            <span className="markup-dark">#InTech</span>
          </h2>
        </div>
      </div>

      <div className="hidden about-section">
        <div className="about-section-text">
          <h2>
            <span className="markup-light">Web Development</span> is <br />
            my <span className="markup-light">passion</span> 🧑🏻‍💻
          </h2>
        </div>
        <div className="about-section-media">
          <LottieAnimation animationData={react_logo} />
        </div>
      </div>
      <div className="hidden about-section">
        <div className="about-section-media">
          <LottieAnimation animationData={college} />
        </div>
        <div className="about-section-text">
          <h2>
            I'm a graduate student <br/>at{" "}
            <span className="markup-dark">
              Syracuse
              University <br />
            </span>{" "}in New York, pursuing my Master's degree in Computer Science.
          </h2>
        </div>
      </div>

      <div className="hidden about-section">
        <div className="about-section-text">
          <h2>
            I've been able to <br /> secure{" "}
            <span className="markup-light">experiences</span> at <br />
            <span className="markup-light">Multiple</span> companies.
          </h2>
        </div>
        <div className="about-section-media" id="companies">
          {/* <img src={anicca} /> */}
          <span id="company-left">
            <LottieAnimation animationData={codey} id="codey" />
          </span>
          <img src={felicity} />
        </div>
      </div>

      <span id="experiences"></span>
      <VerticalTimeline animate={true} lineColor={"var(--yellow)"}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "white",
            color: "black",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  white",
          }}
          date="June 2023 - August 2023 • 3 mos"
          iconStyle={{
            display: "flex",
            background: "white",
            color: "#fff",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
          icon={<img src={syracuse} />}
        >
          <h3 className="vertical-timeline-element-title">
            Summer Program Assistant
            <br />
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Part-Time</h4>
          <small>Syracuse University, Syracuse, New York</small>
          <p>
            Interacted with 500+ students in a residential setting, resolved over 100 concerns daily, leading to a 30% increase in resident satisfaction. Led initiatives, enhanced adaptability and leadership, boosted community engagement by 20%, and reduced security incidents by 30%.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "white",
            color: "black",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  white",
          }}
          date="November 2022 - June 2023 • 8 mo"
          iconStyle={{
            display: "flex",
            background: "white",
            color: "#fff",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
          icon={
            <img
              style={{ borderRadius: "50px" }}
              src={syracuse}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Web Developer
            <br />
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Part-Time (CASE Co-op Program)
          </h4>
          <small>Associated Gastroenterologists of CNY, PC, Syracuse, New York</small>
          <p>
            Redesigned the website using WordPress technology, improving UI/UX aspects, and developing new pages as per requirements.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "white",
            color: "black",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  white",
          }}
          date="March 2022 - July 2022 • 5 mos"
          iconStyle={{
            display: "flex",
            background: "white",
            color: "#fff",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
          icon={
            <img src={anicca} />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Software Engineer
            <br />
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Full-Time</h4>
          <small>Anicca Data Science Solutions, Bangalore, India</small>
          <p>
            Collaborated with legacy code, designed and developed new client-facing features using Angular, HTML5, CSS, and JavaScript. Ensured technical feasibility of UI/UX designs, developed reusable libraries, UI components, and applications for maximum speed and scalability.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "white",
            color: "black",
          }}
          contentArrowStyle={{
            borderRight: "7px solid  white",
          }}
          date="August 2021 - February 2022 • 7 mos"
          iconStyle={{
            display: "flex",
            background: "white",
            color: "#fff",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
          icon={<img src={pelatro} />}
        >
          <h3 className="vertical-timeline-element-title">
            Engineer-Trainee
            <br />
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Full-Time</h4>
          <small>Pelatro Solutions Private Limited, Bangalore, India</small>
          <p>
            Operated on the mViva product, deploying algorithms on a massive volume of data. Built and improved software, translated requirements into robust, scalable, and supportable test solutions, and examined closely with team members on requirement analysis.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="April 2021 - July 2021 • 4 mos"
          iconStyle={{ background: "white", color: "#fff" }}
          icon={
            <img
              width="30px"
              height="10px"
              src={felicity}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Web Development Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Internship</h4>
          <small>Felicity, Jaipur, India</small>
          <p>Migrated code from AngularJS to Angular 7, reviewed designed wireframes on Figma, and analyzed requirements to build reusable components and libraries. Integrated front-end applications with back-end code to ensure fast and error-free loading of websites.
          <br/><a href="https://felicity.care/"> Visit Felicity</a>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="January 2019 - May 2019 • 5 mos"
          iconStyle={{ background: "white", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
          Student Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Project {" "}
          <small><b>Development of Omni Channel Management </b></small></h4>
          <small>Transil.Inc, Hubballi, India</small>
          <p>
            Worked with a team of 4 engineers to create and design wireframes using Figma, developed a web application leveraging Angular, Nodejs, Express.js, and MongoDB. Constructed a hotel management database model, data flows, and functional application prototype.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="August 2017 - June 2021 • 4 yrs"
          iconStyle={{ background: "white", color: "#fff" }}
          icon={
            <img
              style={{ borderRadius: "50px" }}
              src={kle}
            />
          }
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Science in Computer Science
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelors Degree
          </h4>
          <small>KLE Technological University, Hubli, India</small>
          <p>
            <b>
              Coursework:
              <br />
            </b>
            Data Structures, Databases, Web Development, Computer Architecture, Database Management System, Computer Architecture, Data Mining and Analysis,
            Data Analysis And Decision Test, Operating Systems, Object-Oriented Design, Intro to Machine Learning & Algorithms,
            <br />
            <br />
            <b>
              Certifications:
              <br />
            </b>
            <ul className="timeline-certificates">
              <span className="timeline-img-container">
                <li>Server-side Development with NodeJS, Express and MongoDB</li>
                <a
                  href="https://www.coursera.org/account/accomplishments/certificate/GE5S9P8D2QJ4"
                  target="_blank"
                >
                  <img
                    className="timeline-cert-codepath"
                    src={course}
                  />
                </a>
              </span>
              <br></br>
              <span className="timeline-img-container">
                <li>Python Data Structures</li>
                <a
                  href="https://www.coursera.org/account/accomplishments/certificate/Z5CKGJF72TFB"
                  target="_blank"
                >
                  <img
                    className="timeline-cert"
                    src={course}
                  />
                </a>
              </span>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="timeline-element"
          iconStyle={{
            background: "var(--yellow)",
            color: "#fff",
          }}
          icon={<img src={star} />}
        />
      </VerticalTimeline>

      <div className="hidden about-section">
        <div className="about-section-media">
          <LottieAnimation animationData={projects} />
        </div>
        <div className="about-section-text">
          <h2>
            Check out<span className="markup-dark"> my projects</span>
            <br /> by{" "}
            <a href="https://github.com/aishwaryamensinkai" target="_blank">
              <span className="markup-dark">clicking here</span></a>
          </h2>
        </div>
      </div>

      <footer id="contact" className="animation contact-section">
        <div className="contact-section-text">
          <h2>
            Don't be a stranger,
            <br />
            <span className="markup-light"> Let's connect!</span> 🫱🏻‍🫲🏿
          </h2>
        </div>
        <div className="contact-section-media float-area">
          <a
            className="logo hidden floating-image-up"
            target="_blank"
            style={{ "--order": 1 }}
            href="mailto:aishwaryamensinkai@gmail.com"
          >
            <img src={gmail} alt="Gmail logo" />
          </a>

          <a
            className="logo hidden floating-image-down"
            target="_blank"
            style={{ "--order": 2 }}
            href="https://github.com/aishwaryamensinkai"
          >
            <img src={github} alt="Github logo" />
          </a>

          <a
            className="logo hidden floating-image-up"
            target="_blank"
            style={{ "--order": 3 }}
            href="https://www.linkedin.com/in/aishwarya-mensinkai/"
          >
            <img src={linkedin} alt="LinkedIn logo" />
          </a>
        </div>
      </footer>
      <div id="up-arrow" className="arrow floating-image-up">
        <a href="#home" onClick={scrollToTop}>
          <img src={up_arrow} />
        </a>
      </div>
      <div id="copyright">
        <h4>
          Developed by <span className="markup-light">Aishwarya Mensinkai</span>{" "}
          © 2024
        </h4>
        <h5> Updated on January 13, 2024.</h5>
        <h5>Built with React.js ☕️</h5>
      </div>
    </div>
  );
}
