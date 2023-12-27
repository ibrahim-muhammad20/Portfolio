import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import short from "../Images/Short.png";
import Long2 from "../Images/Long2.PNG";
import AD from "../Images/ad.png";
import Logo from "../Images/Logomain.png";
import automation from "../Images/automation.jpeg";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Skill = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              {/* Add your YouTube video iframe here */}
              <div className="d-flex justify-content-center">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/WNnVV49H5d8"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p>Now being a creator who has hands-on experience on how to gain both views and audience.<br></br> I could deliver you the best high-quality videos according to the material you provide!!</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={Long2} alt="Image" />
                  <h5>Long-Form Edit</h5>
                </div>
                <div className="item">
                  <img src={automation} alt="Image" />
                  <h5>Youtube Automation Edit</h5>
                </div>
                <div className="item">
                  <img src={short} alt="Image" />
                  <h5>Short-Form Edit</h5>
                </div>
                <div className="item">
                  <img src={AD} alt="Image" />
                  <h5>Ads-Edit</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;