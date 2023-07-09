import { useState, useEffect, useRef } from 'react';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;

export const Slideshow = (
  { children }: { children: React.ReactNode[] }
) => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === children.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index, children.length]);

  const goToPrevSlide = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? colors.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setIndex((prevIndex) => (prevIndex === colors.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {children.map((child, index) => (
          <div
            className="slide"
            key={index}
            style={{ justifyContent: 'center', alignItems: 'center' }}
          >
            {child}
          </div>
        ))}
      </div>

      <div className="slideshowArrows">
        <button className="slideshowArrow" onClick={goToPrevSlide}>
          <NavigateBeforeIcon />
        </button>
        <button className="slideshowArrow" onClick={goToNextSlide}>
          <NavigateNextIcon />
        </button>
      </div>
    </div>
  );
}

