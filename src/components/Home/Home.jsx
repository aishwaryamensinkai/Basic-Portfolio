import React, { useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import hero_avatar from "/src/assets/me.png";
import About from "../About/About.jsx";
import down_arrow from "../../assets/down-arrow.svg";
import LottieAnimation from "../AnimationComponent/AnimationComponent";
import totoro from "/src/assets/totoro.json";
import noface from "/src/assets/no-face.json";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const handleGetResumeClick = () => {
    const pdfUrl =
      "https://drive.google.com/file/d/1VEYp1yLE_oaQEAG3wsa7CLnOyXAjPM_4/view?usp=sharing";

    // Open the PDF file in a new tab
    window.open(pdfUrl, "_blank");
  };

  const handleExperiencesClick = () => {
    // Close the modal
    onClose();

    // Navigate to the desired URL
    navigate("/#experiences");

    // Scroll to the #experiences section
    setTimeout(() => {
      const experiencesSection = document.getElementById("experiences");
      if (experiencesSection) {
        experiencesSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 300); // Adjust the delay as needed
  };

  return (
    <span>
      <div className="bubbles">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>
      <div id="home" className="home">
        <div className="hero">
          <div className="hero-content">
            <div className="hero-info">
              <h2 className="hero-intro">
                HI THERE
                <span className="ghibli">
                  <LottieAnimation animationData={noface} />
                </span>
                ! I'M
              </h2>
              <h1>Aishwarya Mensinkai</h1>
              <h2 className="hero-intro">
                Software Engineer
                <span className="ghibli">
                  <LottieAnimation animationData={totoro} />
                </span>
                Student
              </h2>
              <p>
                Computer Science <span id="at">@</span> Syracuse University <div dangerouslySetInnerHTML={{ __html: '</>' }} />
              </p>
              <div className="hero-btns">
                <Button className="button" onClick={handleGetResumeClick}>
                  Get Resume
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </Button>
                <Button className="button" onClick={onOpen}>
                  About Me
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </Button>
              </div>

              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent
                  style={{
                    color: "var(--yellow)",
                    backgroundColor: "var(--medium-gray)",
                  }}
                >
                  <ModalHeader>Who I am 🧑‍💻</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody style={{ color: "var(--yellow)" }}>
                    <p>👋 Hello, there! I'm <strong>Aishwarya Girish Mensinkai</strong>.</p>
                    <p>🚀 I'm a passionate Software Engineer.</p>
                    🎓 Currently, I'm a graduate student pursuing my Masters in Computer Science at
                      <strong> Syracuse University, New York</strong> (Class of 2024).
                    <br/> My expertise spans web development,
                    data science, and software engineering. With a solid foundation in programming languages
                    like Python, Java, and JavaScript, coupled with experience in database management systems
                    like SQL and MongoDB, I've contributed to various projects, from redesigning websites for
                    better user experiences to developing robust applications. I thrive in collaborative environments,
                    where I can leverage my technical skills to tackle challenges and drive innovation. Outside of
                    coding, I enjoy exploring new technologies, contributing to open-source projects,
                    and staying updated on industry trends.
                    <br></br>
                    I find pleasure in solving problems and working with others
                    to do so. Feel free to check out the whole site that I
                    developed with lots of 💛!
                  </ModalBody>

                  <ModalFooter>
                    <Button
                      style={{
                        color: "var(--yellow)",
                        backgroundColor: "var(--medium-gray)",
                      }}
                      colorScheme="var(--yellow)"
                      mr={3}
                      onClick={onClose}
                      _hover={{
                        color: "black",
                        backgroundColor: "var(--clear-yellow)",
                      }}
                      className="modal-button"
                    >
                      Close
                    </Button>
                    <Button
                      style={{
                        color: "var(--yellow)",
                        backgroundColor: "var(--medium-gray)",
                      }}
                      colorScheme="var(--yellow)"
                      variant="ghost"
                      onClick={handleExperiencesClick}
                      className="modal-button"
                    >
                      Experiences
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </div>
            <div className="hero-img">
              <img src={hero_avatar} alt="Aishwarya"></img>
            </div>
          </div>
        </div>
        <div className="arrow floating-image-down">
          <a href="#about">
            <img src={down_arrow} />
          </a>
        </div>
        <About></About>
      </div>
    </span>
  );
}
