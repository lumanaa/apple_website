import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { chipImg, frameImg, frameVideo } from "../../utils";
import "./howItWorks.scss";
import { useRef } from "react";
import { animateWithGsap } from "../../utils/animations";

const HowItWorks = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });
    animateWithGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);
  return (
    <section className='chip-section'>
      <div className='screen'>
        <div id='chip'>
          <img src={chipImg} alt='chip' width={180} height={180} />
        </div>
        <div className='text-container'>
          <h2 className='hiw-title'>
            A17 Pro chip.
            <br /> A monster win for gaming.
          </h2>
          <p className='hiw-subtitle'>
            It's here. The biggest redesign in the history of Apply GPUs.
          </p>
        </div>
        <div className='video-container'>
          <div className='video-player'>
            <div className='video'>
              <img src={frameImg} alt='frame' />
            </div>
            <div className='hiw-video'>
              <video
                src={frameVideo}
                typeof='video/mp4'
                playsInline
                preload='none'
                muted
                autoPlay
                ref={videoRef}
              ></video>
            </div>
          </div>
          <p>Honkai: Star Rail</p>
        </div>
        <div className='final'>
          <div className='text-container'>
            <p className=' g_fadeIn'>
              A17 Pro is an entirely new class of iPhone chip that delivers our
              space{" "}
              <span className='span-text'>
                {" "}
                best graphic performance by far
              </span>
            </p>
          <div className='text-container'>
            <p className='g_fadeIn'>
              Mobile{" "}
              <span className='span-text'>
                {" "}
                games will look and feel so immersive,
              </span>{" "}
              with incredibly detailed environments and characters.
            </p>
          </div>
          </div>
          <div className='lower-text g_fadeIn'>
            <p>New</p>
            <p className="big">Pro-class GPU</p>
            <p>with 6 cores</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
