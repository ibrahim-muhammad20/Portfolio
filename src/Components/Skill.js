import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import short from "../Images/Short.png"
import Long2 from "../Images/Long2.PNG"
import AD from "../Images/ad.png"
import Logo from "../Images/Logomain.png"
import automation from "../Images/automation.jpeg"
export default function Skill() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    
      return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>We are a team of experts  having helped 40+ big faceless channels grow!<br></br>So from the years of experience we have gained we aim to bring the best Video Editing service possible!</p>
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
            {/* <img className="background-image-left" src={Logo} alt="Image" /> */}
        </section>
      )
    }

