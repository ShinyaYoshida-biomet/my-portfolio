import { Typography } from "../atoms/Typography";
import { Box, Grid } from "@mui/material";
import ReactPlayer from "react-player";
import { Slideshow } from "../molecules/Slideshow";
import { CardWithMedia } from "../molecules/CardWithMedia";

export const Portfolio = () => {
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid
          item
          xs={4}
          sx={{
            display: "flex",
            alignItems: "center",
            paddingBottom: "5vh",
            width: "100%",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              justifyContent: "center",
              overflowWrap: "normal",
              wordWrap: "break-word",
              fontSize: "100px",
            }}
          >
            My Work
          </Typography>
        </Grid>
        <Grid item xs={8} sx={{ width: "100%" }}>
          <Slideshow
            children={[
              <CardWithMedia
                child={
                  <ReactPlayer
                    url={"/OnePieceFilmeFlamesDemo.mp4"}
                    controls
                    width="100%"
                    height="auto"
                  />
                }
                title={"LP Site: One Piece Film"}
                description={
                  "I'm a great fan of Japanese manga One Piece, so I made this landing site for the new imaginary film."
                }
              />,
              <CardWithMedia
                child={
                  <ReactPlayer
                    url={"/selfPRGPT.mp4"}
                    controls
                    width="100%"
                    height="auto"
                  />
                }
                title={"AI Powered Self PR"}
                description={
                  "This AI powered web app will help you to write your self PR almost automatically.You only need to remember and specify your past experiences and achievements."
                }
              />,
              <CardWithMedia
                child={
                  <img
                    src="/Coming_Soon.png"
                    alt=""
                    width="100%"
                    height="auto"
                  />
                }
                title={"Statistical Reports: Incidence rates"}
                description={
                  "Between men and women, is there any difference of lang cancer incidence rates?"
                }
              />,
            ]}
          ></Slideshow>
        </Grid>
      </Grid>
    </Box>
  );
};

