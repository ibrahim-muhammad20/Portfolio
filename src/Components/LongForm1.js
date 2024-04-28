import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import NavBar from './Navbar';

// Sample data for Vimeo video URLs
const videoUrls = [
  "https://vimeo.com/924345759","https://vimeo.com/924346022?share=copy",
  "https://vimeo.com/924345992?share=copy","https://vimeo.com/924345922?share=copy",
  "https://vimeo.com/924345718?share=copy","https://vimeo.com/924345887?share=copy",
  "https://vimeo.com/924345843?share=copy"
];

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

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr); /* Initially one video per row */
  gap: 20px;
  background-image: url('https://res.cloudinary.com/ddkai331v/image/upload/v1710525982/xkohnw9akvf06myadv8n.png');
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 80px; /* Adding padding */
  
  /* Responsive grid for tablets */
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* Two videos per row */
  }
`;

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  color: yellow;
  font-weight: bold;
  font-family: 'Brownland', sans-serif; /* Change to the font you prefer */
  padding-top: 120px;
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  overflow: hidden;
  border-radius: 20px; /* Rounded corners */
  animation: ${glowAnimation} 2s infinite alternate; /* Add glow animation */
  max-width: 600px; /* Set maximum width for larger screens */
  margin: auto; /* Center the video horizontally */
`;

const VideoIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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

const LongForm = () => {
  const [showMore, setShowMore] = useState(false);
  
  const visibleVideos = showMore ? videoUrls : videoUrls.slice(0, 9);

  return (
    <>
      <CenteredContainer>
        <Title>Long-Form Edits</Title>
      </CenteredContainer>
      <Container>
        {visibleVideos.map(videoUrl => (
          <VideoWrapper key={videoUrl}>
            <VideoIframe
              src={`https://player.vimeo.com/video/${videoUrl.split('/').pop()}`}
              title="Vimeo video player"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></VideoIframe>
          </VideoWrapper>
        ))}
      </Container>
      
      {!showMore && (
        <Button onClick={() => setShowMore(true)}>Show More</Button>
      )}
    </>
  );
};

export default LongForm;
