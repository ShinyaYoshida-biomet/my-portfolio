import "./App.css";
import { NameAndRole } from "./components/organisms/NameAndRole";
import { Expertise } from "./components/organisms/Expertise";
import { Portfolio } from "./components/organisms/Portfolio";
import { CustomCursor } from "./components/molecules/CustomCursor";
import { Box, useTheme, useMediaQuery } from "@mui/material";

function App() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  
  return (
    <Box
      className="App"
    >
      <CustomCursor isSmallScreen={isSmallScreen} />
      <Box
        sx={{
          color: "white",
          display: "flex",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <NameAndRole name="Shinya Yoshida" isSmallScreen={isSmallScreen} />
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
        <Expertise isSmallScreen={isSmallScreen} />
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
        <Portfolio isSmallScreen={isSmallScreen}  />
      </Box>
    </Box>
  );
}

export default App;
