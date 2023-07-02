import { Typography } from "../atoms/Typography";
import { Box, Card, CardContent, Grid } from "@mui/material";
import ReactPlayer from "react-player";
import { Slideshow } from "../molecules/Slideshow";

export const Portfolio = () => {
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={4} sx={{ width: "100%" }}>
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
              <Card>
                <div>
                  <ReactPlayer
                    url={"/OnePieceFilmeFlamesDemo.mp4"}
                    controls
                    width="100%"
                    height="80%"
                  />
                </div>
                <CardContent sx={{ height: '20%' }}>
                  <Typography variant="h6">hoeghoge</Typography>
                </CardContent>
              </Card>,
              <Card>
                <ReactPlayer
                  url={"/selfPRGPT.mp4"}
                  controls
                  width="100%"
                  height="80%"
                />
                <CardContent sx={{ height: '20%' }}>
                  <Typography variant="h6">hoeghoge</Typography>
                </CardContent>
              </Card>,
              <Card>
                <img src="/Coming_Soon.png" alt="" width="100%" height="80%" />
                <CardContent sx={{ height: '20%' }}>
                  <Typography variant="h6">hoeghoge</Typography>
                </CardContent>
              </Card>,
            ]}
          ></Slideshow>
        </Grid>
      </Grid>
    </Box>
  );
};
