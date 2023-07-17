import React from "react";
import "./App.css";
import { Box } from "@mui/material";
import { NameAndRole } from "./components/organisms/NameAndRole";
import { Expertise } from "./components/organisms/Expertise";
import { Portfolio } from "./components/organisms/Portfolio";

function App() {
  let circle = document.getElementById("circle");
  return (
    <Box
      className="App"
      onMouseMoveCapture={(e) => {
        if (circle) {
          circle.style.left = e.pageX + "px";
          circle.style.top = e.pageY + "px";
        }
      }}
    >
      <div
        id="circle"
        style={{
          position: "absolute",
          height: "30px",
          width: "30px",
          borderRadius: "50%",
          border: "2px solid #0f7f9b",
          pointerEvents: "none",
          transition: "all 0.2s cubic-bezier(0.03, 0.98, 0.52, 0.99)",
          transform: "translate(-50%, -50%)",
          background: "transparent",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "5px",
            width: "5px",
            background: "#0f7f9b",
            borderRadius: "50%",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        ></div>
      </div>

      <Box
        sx={{
          color: "white",
          display: "flex",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <NameAndRole name="Shinya Yoshida" />
      </Box>
      <Box
        sx={{
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Expertise />
      </Box>
      <Box
        sx={{
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Portfolio />
      </Box>
    </Box>
  );
}

export default App;
