import React, { useState } from "react";
import { Col } from "react-bootstrap";
import ReactPlayer from "react-player";
import { FaPlay, FaPause } from "react-icons/fa";

export const ProjectCard = ({ title, videoUrl, posterUrl }) => {
  const [isPlaying, setPlaying] = useState(false);

  const handlePlay = () => {
    setPlaying(true);
  };

  const handlePause = () => {
    setPlaying(false);
  };

  const handleEnded = () => {
    setPlaying(false);
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={() => setPlaying(!isPlaying)}>
        <div className="proj-overlay">
          <div className="proj-text">
            <h4>{title}</h4>
          </div>
          {!isPlaying && (
            <div className="play-pause-icons">
              {isPlaying ? <FaPause /> : <FaPlay />}
            </div>
          )}
          <ReactPlayer
            url={videoUrl}
            width="100%"
            height="100%"
            playing={isPlaying}
            controls={false}
            className="react-player"
            onPlay={handlePlay}
            onPause={handlePause}
            onEnded={handleEnded}
          />
        </div>
      </div>
    </Col>
  );
};
