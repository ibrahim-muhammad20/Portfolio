// projectcard.js
import React from "react";
import { Col } from "react-bootstrap";
import styled, { keyframes } from "styled-components";
import ReactPlayer from "react-player";

// Keyframes for the glow animation
const glowAnimation = keyframes`
  0% {
    box-shadow: 0 0 10px red;
  }
  50% {
    box-shadow: 0 0 20px red;
  }
  100% {
    box-shadow: 0 0 10px red;
  }
`;

// Styled component for the parent container
const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
  border-radius: 10px;
  padding: 10px; /* Add padding to extend the glow effect */
  display: flex;
  flex-direction: column;
  align-items: center; /* Center horizontally */
  justify-content: center; /* Center vertically */
`;

// Styled component for the glow effect
const GlowEffect = styled.div`
  position: absolute;
  top: -10px;
  left: -10px;
  width: calc(100% + 20px);
  height: calc(100% + 20px);
  border-radius: 10px;
  box-shadow: 0 0 10px red; /* Initial glow effect */
  animation: ${glowAnimation} 2s infinite alternate; /* Glow animation */
  z-index: -1; /* Move behind the video */
`;

// Styled component for the title
const Title = styled.h3`
  color: #fff;
  font-size: 18px;
  margin-bottom: 10px;
`;

const ProjectCard = ({ title, videoUrl }) => {
  return (
    <Col size={4} sm={6} md={4}>
      <VideoContainer>
        <GlowEffect />
        <Title>{title}</Title>
        <ReactPlayer
          url={videoUrl}
          width="100%" // Set width to 100%
          height="100%" // Set height to auto to maintain aspect ratio
          controls={true} // Enable default Vimeo controls
        />
      </VideoContainer>
    </Col>
  );
};

export default ProjectCard;
