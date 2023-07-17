import React, { useEffect, useRef } from "react";
import { Box, Container, Typography } from "@mui/material";
import { ScrollButton } from "../atoms/ScrollButton/ScrollButton";

export const NameAndRole = ({ name }: { name: string }) => {  
  const nameRef = useRef<(HTMLSpanElement | null)[]>([]);


  useEffect(() => {
    name.split("").forEach((_, i) => {
      const el = nameRef.current[i];
      if (el) {
        el.style.opacity = "0";
        const keyframes = [{ opacity: "0" }, { opacity: "1" }];
        const fillMode: FillMode = 'both'
        const options = {
          delay: i * 50, // Adjust delay as needed
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
          marginBottom: "10rem",
        }}
      >
        <div style={{ margin: "2rem auto" }}>
          <Typography
            variant="h1"
            fontFamily={"CustomFont"}
            sx={{ fontSize: "150px" }}
          >
            {name.split("").map((char, i) => (
              <span ref={(el) => (nameRef.current[i] = el)} key={i}>
                {char}
              </span>
            ))}
          </Typography>
        </div>

        <div style={{ margin: "2rem auto" }}>
          <Typography
            variant="h4"
            fontWeight={"bold"}
            fontFamily={"CustomFont"}
          >
            WEB APP DEVELOPER / AI ENGINEER.
          </Typography>
        </div>
        <Box style={{ marginTop: "2rem" }}>
          {/* To Do あとで心地よい感じにmarginを変える */}
          <ScrollButton />
        </Box>
      </Container>
    </>
  );
};
