import { Typography } from "../atoms/Typography";
import { Box, Grid } from "@mui/material";
import ReactPlayer from "react-player";
import { Slideshow  } from "../molecules/Slideshow";

export const Portfolio = () => {
  return (
    <Box>      
      <Grid container spacing={3}>
        <Grid item xs={4} sx={{ width: "100%" }}>
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              overflowWrap: "normal",
              wordWrap: "break-word",
              fontSize: "100px",
            }}
          >
            My Work
          </Typography>
        </Grid>
        <Grid item xs={8} sx={{width: '100%'}}>
          <Slideshow children={
            [
              <ReactPlayer
              url={"/OnePieceFilmeFlamesDemo.mp4"}
              controls
              width="80%"
              height="auto"
              />,
              <ReactPlayer
                url={"/OnePieceFilmeFlamesDemo.mp4"}
                controls
                width="80%"
                height="auto"
              />,
              <ReactPlayer
                url={"/OnePieceFilmeFlamesDemo.mp4"}
                controls
                width="80%"
                height="auto"
              />,              
            ]}></Slideshow>          
        </Grid>
      </Grid>
    </Box>
  );
};
