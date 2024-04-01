import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import NavBar from './Navbar';

// Sample data for Vimeo video URLs
const videoUrls = [
  "https://vimeo.com/924348310","https://vimeo.com/924348338",
  "https://vimeo.com/924348285?share=copy","https://vimeo.com/929468541?share=copy","https://vimeo.com/929468201?share=copy",
  "https://vimeo.com/924348260?share=copy","https://vimeo.com/924347644?share=copy","https://vimeo.com/924347578?share=copy","https://vimeo.com/924381564?share=copy",
  "https://vimeo.com/924381267?share=copy","https://vimeo.com/924380970?share=copy"
];

const glowAnimation = keyframes`
  0% {
    box-shadow: 0 0 8px yellow;
  }
  50% {
    box-shadow: 0 0 16px yellow;
  }
  100% {
    box-shadow: 0 0 8px yellow;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px; /* Reduced gap between videos */
  background-image: url('https://res.cloudinary.com/ddkai331v/image/upload/v1710525982/xkohnw9akvf06myadv8n.png');
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 50px; /* Reduced padding */

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr); /* Adjusted for mobile */
    padding: 20px; /* Adjusted padding for mobile */
  }
`;

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px; /* Added margin to bottom */
`;

const Title = styled.h1`
  color: yellow;
  font-weight: bold;
  font-family: 'Brownland', sans-serif; /* Change to the font you prefer */
  padding-top: 100px; /* Adjusted padding */
  margin-bottom: 0; /* Removed margin bottom */
`;

const VideoWrapper = styled.div`
  position: relative;
  width: calc(100% - 20px); /* Adjusted width */
  padding-top: 100%; /* Adjusted aspect ratio (1:1) */
  overflow: hidden;
  border-radius: 10px; /* Rounded corners */
`;

const VideoIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; /* Set height to fill the entire container */
  border: none; /* Remove border */
  border-radius: 70px; /* Rounded corners */
  box-shadow: 0 0 8px yellow; /* Initial glow effect */
  animation: ${glowAnimation} 2s infinite alternate; /* Add glow animation */
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
`;

const VimeoVideos = () => {
  const [showMore, setShowMore] = useState(false);
  
  const visibleVideos = showMore ? videoUrls : videoUrls.slice(0, 9);

  return (
    <>
      <CenteredContainer>
        <Title>Short-Form Videos</Title>
      </CenteredContainer>
      <Container>
        {visibleVideos.map(videoUrl => {
          const videoId = videoUrl.split('/').pop();
          return (
            <VideoWrapper key={videoId}>
              <VideoIframe
                src={`https://player.vimeo.com/video/${videoId}`}
                title="Vimeo video player"
                frameborder="0"
                allow="autoplay; fullscreen"
                allowfullscreen
              ></VideoIframe>
            </VideoWrapper>
          );
        })}
      </Container>
      
      {!showMore && (
        <Button onClick={() => setShowMore(true)}>Show More</Button>
      )}
    </>
  );
};

export default VimeoVideos;
