import { useState, useEffect, useRef } from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { Container, Grid } from "@mui/material";

const delay = 5000;

export const Slideshow = ({ children }: { children: React.ReactNode[] }) => {
  const [index, setIndex] = useState(0);
  const [activeButton, setActiveButton] = useState("");
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

  const handleButtonPress = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  const handleButtonRelease = () => {
    setActiveButton("");
  };

  return (
    <div
      style={{
        margin: "0 auto",
        overflow: "hidden",
        maxWidth: "800px",
        width: "100%",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          transform: `translate3d(${-index * 100}%, 0, 0)`,
          transition: "ease 1000ms",
          whiteSpace: "nowrap",
        }}
      >
        {children.map((child, index) => (
          <div
            key={index}
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "inline-block",
              height: "80%",
              width: "100%",              
            }}
          >
            {child}
          </div>
        ))}
      </div>

      <Container sx={{ marginTop: "3%" }}>
        <Grid container style={{ justifyContent: "spaceBetween" }}>
          <Grid item xs={1}></Grid>
          <Grid item xs={5}>
            <ArrowCircleLeftIcon
              sx={{
                fontSize: "60px",
                cursor: "pointer",
                color: activeButton === "left" ? "black" : "white",
              }}
              onMouseDown={() => handleButtonPress("left")}
              onMouseUp={handleButtonRelease}
              onTouchStart={() => handleButtonPress("left")}
              onTouchEnd={handleButtonRelease}
              onClick={goToPrevSlide}
            />
          </Grid>
          <Grid item xs={5}>
            <ArrowCircleRightIcon
              sx={{
                fontSize: "60px",
                cursor: "pointer",
                color: activeButton === "right" ? "black" : "white",
              }}
              onMouseDown={() => handleButtonPress("right")}
              onMouseUp={handleButtonRelease}
              onTouchStart={() => handleButtonPress("right")}
              onTouchEnd={handleButtonRelease}
              onClick={goToNextSlide}
            />
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </Container>
    </div>
  );
};
