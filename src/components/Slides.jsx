import { useState } from 'react';
import './Slides.css';

const Slides = ({ slides }) => {
  const [slide, setSlide] = useState(0);
  const currentSlide = slides[slide];
  const maxSlide = slides.length;

  const prevSlideHandler = () => setSlide((((slide - 1) % maxSlide) + maxSlide) % maxSlide);

  const nextSlideHandler = () => setSlide((slide + 1) % maxSlide);

  return (
    <div>
      <div className="slide card">
        <div className="card-content cyan-text text-darken-2">
          <span className="card-title">{currentSlide.title}</span>
          <p>{currentSlide.text}</p>
        </div>
      </div>
      <div className="buttons center-align">
        <button className="btn btn-small cyan" onClick={prevSlideHandler}>Prev</button>
        <button className="btn btn-small cyan" onClick={nextSlideHandler}>Next</button>
      </div>
    </div>
  )
};

export default Slides;