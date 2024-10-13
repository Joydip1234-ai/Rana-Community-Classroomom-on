import React from 'react'
import Slider from 'react-slick'
//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";


const ImageSlider=({image})=>{
const settings={
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

 return(
 <div className="image-slider">
 <Slider {...settings}>
 <div>
          <img src="https://images.pexels.com/photos/2865631/pexels-photo-2865631.jpeg" alt="Slide 1" style={{ width: '50%', height: 'auto' }}/>
        </div>
        <div>
          <img src="https://via.placeholder.com/800x400?text=Slide+2" alt="Slide 2" style={{ width: '50%', height: 'auto' }}/>
        </div>
        <div>
          <img src="https://via.placeholder.com/800x400?text=Slide+3" alt="Slide 3" style={{ width: '50%', height: 'auto' }} />
        </div>
        <div>
          <img src="https://via.placeholder.com/800x400?text=Slide+4" alt="Slide 4" style={{ width: '50%', height: 'auto' }}/>
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
