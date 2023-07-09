import { useState, useEffect, useRef } from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { Container, Grid } from "@mui/material";

const delay = 10000;

export const Slideshow = ({ children }: { children: React.ReactNode[] }) => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // To disable auto slide, comment out the useEffect below
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
    setIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    );
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
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            {child}
          </div>
        ))}
      </div>

      <Container sx={{marginTop: "3%"}}>
      <Grid container display="spaceBetween">
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={5}>
          <ArrowCircleLeftIcon
            sx={{ fontSize: "60px" }}
            onClick={goToPrevSlide}
          />
        </Grid>
        <Grid item xs={5}>
          <ArrowCircleRightIcon
            sx={{ fontSize: "60px" }}
            onClick={goToNextSlide}
          />
        </Grid>
        <Grid item xs={1}>
        </Grid>
        </Grid>
      </Container>
    </div>
  );
};
