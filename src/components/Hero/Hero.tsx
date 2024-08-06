import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../../utils";

import "./hero.scss";
import { useEffect, useState } from "react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);
    return () => {
      window.removeEventListener("resize", handleVideoSrcSet); //cleanup function. Whenever my component is visible, listen for when the window gets resized, and whenever the window gets resized, update the video source. But if my component goes away, stop listening for resize events."
    };
  });

  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 2,
      duration: 1.5,
    });
    gsap.to('#cta', {
      opacity:1, delay:2, y: -50
    })
  }, []);

  return (
    <section className='hero-section'>
      <div className='hero-body'>
        <p id='hero' className='hero-title'>
          iPhone 15 Pro
        </p>
        <div className='vid-container'>
          <video
            autoPlay={true}
            muted={true}
            src={videoSrc}
            typeof='video/mp4'
            key={videoSrc}
          ></video>
        </div>
      </div>
      <div id='cta'>
        <a href='#highlights' className='btn'>
          Buy
        </a>
        <p>From $100/month or 999$</p>
      </div>
    </section>
  );
};

export default Hero;
