import "./App.css";
import { Box } from "@mui/material";
import { NameAndRole } from "./components/organisms/NameAndRole";
import { Expertise } from "./components/organisms/Expertise";
import { Portfolio } from "./components/organisms/Portfolio";
import { CustomCursor } from "./components/molecules/CustomCursor";


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
      <CustomCursor />
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
