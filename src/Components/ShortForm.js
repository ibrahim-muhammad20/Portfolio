import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import NavBar from './Navbar';

// Sample data for YouTube video IDs
const videoIds = [
  "TyxWbC8jDX8", "RjCOjphs8Bs", "VRh_JG1Xnck", "oy2adMYTetI","CGnLs4m_QGI",
   "BiYCzStwHlI", "5y4_Wcbmvj8", "NA-mNiSUprw"
];

const glowAnimation = keyframes`
  0% {
    box-shadow: 0 0 10px yellow;
  }
  50% {
    box-shadow: 0 0 20px yellow;
  }
  100% {
    box-shadow: 0 0 10px yellow;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  background-image: url('https://res.cloudinary.com/ddkai331v/image/upload/v1710525982/xkohnw9akvf06myadv8n.png');
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 150px; /* Adding padding */
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
  padding-bottom: 177.77%; /* 9:16 aspect ratio */
  overflow: hidden;
  border-radius: 20px; /* Rounded corners */
  animation: ${glowAnimation} 2s infinite alternate; /* Add glow animation */
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

const ShortForm = () => {
  const [showMore, setShowMore] = useState(false);
  
  const visibleVideos = showMore ? videoIds : videoIds.slice(0, 9);

  return (
    <>
      <CenteredContainer>
        <Title>Short-Form Edits</Title>
      </CenteredContainer>
      <Container>
        {visibleVideos.map(videoId => (
          <VideoWrapper key={videoId}>
            <VideoIframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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

export default ShortForm;
