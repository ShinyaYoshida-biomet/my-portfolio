import { Box, Container, Typography } from "@mui/material";
import { ScrollButton } from "../atoms/ScrollButton/ScrollButton";

export const NameAndRole = ({ name }: { name: string }) => {
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
            {name}
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
