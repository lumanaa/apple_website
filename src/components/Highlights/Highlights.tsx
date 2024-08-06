import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import "./highlights.scss";
import { rightImg, watchImg } from "../../utils";
import VideoCarousel from "../VidCarousel/VideoCarousel";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
    });
    gsap.to(".link", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25,
    });
  }, []);
  return (
    <section id='highlights' className='highlights-section'>
      <div className='h-body'>
        <div className='h-container'>
          <h1 id='title' className='h-heading'>
            Get the highlights.
          </h1>
          <div className='watch'>
            <p className='link'>
              Watch the film
              <img src={watchImg} alt='watch' />
            </p>
            <p className='link'>
              Watch the event
              <img src={rightImg} alt='watch' />
            </p>
          </div>
        </div>
        <VideoCarousel/>
      </div>
    </section>
  );
};

export default Highlights;
