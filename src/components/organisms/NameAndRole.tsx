import React, { useEffect, useRef } from "react";
import { Box, Container, Typography } from "@mui/material";
import { ScrollButton } from "../atoms/ScrollButton/ScrollButton";

export const NameAndRole = ({
  name,
  isSmallScreen,
}: {
  name: string;
  isSmallScreen: boolean;
}) => {
  const nameRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    name.split("").forEach((_, i) => {
      const el = nameRef.current[i];
      if (el) {
        el.style.opacity = "0";
        const keyframes = [{ opacity: "0" }, { opacity: "1" }];
        const fillMode: FillMode = "both";
        const options = {
          delay: i * 100,
          duration: 500,
          fill: fillMode,
        };
        el.animate(keyframes, options);
      }
    });
  }, [name]);

  return (
    <>
      <Container
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginBottom: isSmallScreen ? "10rem" : "3vh",          
        }}
      >
        <Box sx={{ margin: "2rem auto" }}>
          <Typography
            variant="h1"
            fontFamily={"CustomFont"}
            sx={{ fontSize: isSmallScreen ? "70px" : "150px" }}
          >
            {name.split("").map((char, i) => (
              <span ref={(el) => (nameRef.current[i] = el)} key={i}>
                {char}
              </span>
            ))}
          </Typography>
        </Box>

        <Box sx={{ margin: "2rem auto" }}>
          {isSmallScreen ? (
            <Typography
              variant="h4"
              fontWeight={"bold"}
              fontFamily={"CustomFont"}
            >
              WEB APP DEVELOPER
              <br />
              AI ENGINEER
            </Typography>
          ) : (
            <Typography
              variant="h4"
              fontWeight={"bold"}
              fontFamily={"CustomFont"}
            >
              WEB APP DEVELOPER / AI ENGINEER.
            </Typography>
          )}
        </Box>
        <div style={{
          marginTop: "2rem",
          width: "10%",
          justifyContent: "center",
          display: "flex",
        }}>
          {isSmallScreen ? (
            <ScrollButton scrollHeightRatio={0.6} />
          ) : (
            <ScrollButton scrollHeightRatio={1.1} />
          )}
        </div>
      </Container>
    </>
  );
};
