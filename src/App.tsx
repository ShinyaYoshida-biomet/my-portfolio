import React from "react";
import "./App.css";
import { Box } from "@mui/material";
import { NameAndRole } from "./components/NameAndRole";
import { Expertise } from "./components/organisms/Expertise";

function App() {
  return (
    <Box className="App">
      <Box sx={
        {
          backgroundColor: "#15202b",
          color: "white",
          display: "flex",
          alignItems: "center",
          minHeight: "100vh",
        }
      }>
        <NameAndRole name="Shinya Yoshida" />
      </Box>
      <Box sx={{
        backgroundColor: "#15202b",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}>
          <Expertise />
      </Box>
    </Box>
  );
}

export default App;
