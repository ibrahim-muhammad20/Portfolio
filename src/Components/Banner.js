import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import { ArrowRightCircle, Instagram, Facebook, Tiktok, Youtube } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import { InlineWidget } from 'react-calendly';
import Rjlime2 from "../Images/ibbilogo.png";
import styled, { keyframes } from 'styled-components';

const SocialIconWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  & > svg {
    margin-right: 5px;
  }

  & > span {
    font-size: 14px;
  }
`;

const glowingAnimation = keyframes`
  0% {
    color: #fff;
    text-shadow: 0 0 5px rgba(255,255,0,0.4);
  }
  50% {
    color: #ffeb3b;
    text-shadow: 0 0 10px rgba(255,235,59,0.8);
  }
  100% {
    color: #fff;
    text-shadow: 0 0 5px rgba(255,255,0,0.4);
  }
`;

const GlowingText = styled.span`
  font-size: 16px;
  animation: ${glowingAnimation} 1.5s linear infinite;
`;

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [instagramFollowers, setInstagramFollowers] = useState('72K');
  const [facebookFollowers, setFacebookFollowers] = useState('63K');
  const [tiktokFollowers, setTiktokFollowers] = useState('48K');
  const [ytFollowers, setYoutubeFollowers] = useState('10K');
  const toRotate = ["Youtube Automation Edit! ", "Short-Form Edit", "Long-Form Edit"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  const handlePopupButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={8} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="awesome-header">Are you looking for a Professional Video Editor?</span>
                  <button onClick={handlePopupButtonClick}>
                    <span className="tagline">Contact:(+92) 3414436602 </span>
                  </button>
                  <h1>{`Hi I'm Ibrahim!   `} <span className="txt-rotate" data-period="1000" data-rotate='["Youtube Automation", "Short Form Content", "Long Form Content"]'><span className="wrap">{text}</span></span></h1>
                  <p>As a <GlowingText>Content Creator with over 180K followers</GlowingText> on social media,<br />Level 1 seller on Fiverr and a Youtube automation expert who has helped 10+ big channels grow, I believe that with my expertise in video editing, I am confident that together we can take your videos to greater heights!</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>

                  {/* Logos and follower counts */}
                  

                  {/* Popup Button */}
                  <Modal show={showPopup} onHide={handleClosePopup}>
                    <Modal.Header closeButton>
                      <Modal.Title>Schedule an Appointment</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      {/* Calendly popup content */}
                      <InlineWidget
                        url="https://calendly.com/ibbibhai007"
                        styles={{ height: '500px' }}
                      />
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClosePopup}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={Rjlime2} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>

            <div className="social-icons">
              <SocialIconWrapper onClick={() => window.open("https://www.instagram.com/ibbibhai/")}>
                <Instagram size={30} color="#bc2a8d" />
                <span className="follower-count">{instagramFollowers} followers</span>
              </SocialIconWrapper>

              <SocialIconWrapper onClick={() => window.open("https://www.facebook.com/ibrahim19BBI")}>
                <Facebook size={30} color="#3b5998" />
                <span className="follower-count">{facebookFollowers} followers</span>
              </SocialIconWrapper>

              <SocialIconWrapper onClick={() => window.open("https://www.tiktok.com/")}>
                <Tiktok size={30} color="#1c9ceb" />
                <span className="follower-count">{tiktokFollowers} followers</span>
              </SocialIconWrapper>

              <SocialIconWrapper onClick={() => window.open("https://www.youtube.com/@ibbibhai")}>
                <Youtube size={30} color="#c4302b" />
                <span className="follower-count">{ytFollowers} followers</span>
              </SocialIconWrapper>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
