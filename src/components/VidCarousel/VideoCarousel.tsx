import { hightlightsSlides } from "../../constants";
import "./vidCarousel.scss";

const VideoCarousel = () => {
  return (
    <>
      <div className='carousel-section'>
        {hightlightsSlides.map((list, i) => (
          <div key={list.id} id='slider' className='slider'>
            <div className='container'>
              <div className='slides'></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default VideoCarousel;
