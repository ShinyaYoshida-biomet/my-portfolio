import { Typography } from "../atoms/Typography";
import { Box, Card, CardContent, Grid } from "@mui/material";
import ReactPlayer from "react-player";
import { Slideshow } from "../molecules/Slideshow";

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
              <Card sx={{ backgroundColor: "#1a2836", height: "100%" }}>
                <div>
                  <ReactPlayer
                    url={"/OnePieceFilmeFlamesDemo.mp4"}
                    controls
                    width="100%"
                    height="auto"
                  />
                </div>
                <CardContent
                  sx={{
                    height: "20%",
                    color: "white",
                    backgroundColor: "#1a2836",
                    opacity: "0.9",
                    overflowY: "auto",
                  }}
                >
                  <Typography variant="h4">LP Site: One Piece Film</Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      display: "inline-block",
                      whiteSpace: "pre-line",
                    }}
                  >
                    I'm a great fan of Japanese manga One Piece, so I made this
                    landing site for the new imaginary film.
                  </Typography>
                </CardContent>
              </Card>,
              <Card sx={{ backgroundColor: "#1a2836", height: "100%" }}>
                <ReactPlayer
                  url={"/selfPRGPT.mp4"}
                  controls
                  width="100%"
                  height="auto"
                />
                <CardContent
                  sx={{
                    height: "20%",
                    color: "white",
                    backgroundColor: "#1a2836",
                    opacity: "0.9",
                    overflowY: "auto",
                  }}
                >
                  <Typography variant="h4">AI Powered Self PR</Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      display: "inline-block",
                      whiteSpace: "pre-line",
                    }}
                  >
                    This AI powered web app will help you to write your self PR almost automatically.
                    You only need to remember and specify your past experiences and achievements.
                  </Typography>
                </CardContent>
              </Card>,
              <Card sx={{ backgroundColor: "#1a2836" }}>
                <img src="/Coming_Soon.png" alt="" width="100%" height="80%" />
                <CardContent
                  sx={{
                    height: "20%",
                    color: "white",
                    backgroundColor: "#1a2836",
                    opacity: "0.9",
                  }}
                >
                  <Typography variant="h4">Statistical Reports</Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      display: "inline-block",
                      whiteSpace: "pre-line",
                    }}
                  >
                    Between men and women, is there any difference of lang
                    cancer incidence rates?
                  </Typography>
                </CardContent>
              </Card>,
            ]}
          ></Slideshow>
        </Grid>
      </Grid>
    </Box>
  );
};
