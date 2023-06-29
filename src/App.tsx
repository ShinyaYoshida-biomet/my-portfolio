import React from "react";
import "./App.css";
import { Box } from "@mui/material";
import { NameAndRole } from "./components/NameAndRole";

function App() {
  return (
    <Box className="App" style={
      {
        backgroundColor: "#15202b",
        color: "white",
        // height: "100vh",
      }
    }>
      <NameAndRole name="Shinya Yoshida" />
    </Box>
  );
}

export default App;
