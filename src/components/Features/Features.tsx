import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./features.scss";
import { animateWithGsap } from "../../utils/animations";
import { explore1Img, explore2Img, exploreVideo } from "../../utils";
import { useRef } from "react";

const Features = () => {
  const VideoRef = useRef<HTMLVideoElement | null>(null);

  useGSAP(() => {
    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        toggleActions: "play pause reverse restart",
        start: "-10% bottom",
      },
      onComplete: () => {
        if (VideoRef.current) {
          // Check if VideoRef.current is not null
          VideoRef.current.play();
        }
      },
    });

    animateWithGsap("#features_title", {
      y: 0,
      opacity: 1,
    });
    animateWithGsap(
      ".g_grow",
      {
        scale: 1,
        opacity: 1,
        ease: "power1",
      },
      { scrub: 5.5 }
    );
    animateWithGsap(".g_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
    });
  });

  return (
    <section className='feature-page'>
      <div className='screen'>
        <div className='container'>
          <h1 id='features_title'>Explore the full story.</h1>
        </div>
        <div className='items-container'>
          <div className='items'>
            <h2 className='title'>iPhone.</h2>
            <h2 className='title'>Forged in titanium.</h2>
          </div>
          <div className='animated-container'>
            <div className='content-pos'>
              <video
                src={exploreVideo}
                typeof='video/mp4'
                playsInline
                id='exploreVideo'
                preload='none'
                muted
                autoPlay
                ref={VideoRef}
              ></video>
            </div>
            <div className='img-container'>
              <div className='images'>
                <div className='img'>
                  <img
                    src={explore1Img}
                    alt='titanium'
                    className='feature-video g_grow'
                  />
                </div>
                <div className='img'>
                  <img
                    src={explore2Img}
                    alt='titanium2'
                    className='feature-video g_grow'
                  />
                </div>
              </div>
              <div className='final'>
                <div className='text-container'>
                  <p className='g_text'>
                    iPhone 15 Pro is{" "}
                    <span className='span-text'>
                      {" "}
                      the first iPhone to feature an aerospace-grade titanium
                      design,
                    </span>{" "}
                    using the same alloy that spacecraft use for missios to
                    Mars.
                  </p>
                </div>
                <div className='text-container'>
                  <p className='g_text'>
                    Titanium has one of the best strength-to-weight ratios of
                    any metal, making these our{" "}
                    <span className='span-text'>
                      {" "}
                      lightest pro models ever.
                    </span>{" "}
                    You'll notice the difference the moment you pick one up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
