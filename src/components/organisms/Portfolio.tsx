import { useTheme } from "@mui/material/styles";
import { Typography } from "../atoms/Typography";
import { Grid } from "@mui/material";
import ReactPlayer from "react-player";
import { Slideshow } from "../molecules/Slideshow";
import { CardWithMedia } from "../molecules/CardWithMedia";

export const Portfolio = () => {
  useTheme();
  return (
    <Grid container spacing={3}>
      <Grid
        item
        xs={12}
        sm={4}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: {
            xs: "center",
            sm: "center",
            md: "right",
            lg: "right",
            xl: "right",
          },
          paddingBottom: "5vh",
          width: "100%",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            display: "flex",
            justifyContent: "right",
            textAlign: "center",
            overflowWrap: "normal",
            wordWrap: "break-word",
            fontSize: {
              xs: "70px", // extra-small devices
              sm: "70px", // small devices
              md: "70px", // medium devices
              lg: "150px", // large devices
              xl: "150px", // extra-large devices
            },
          }}
        >
          My Work
        </Typography>
      </Grid>
      <Grid item xs={12} sm={8} sx={{ width: "100%" }}>
        <Slideshow
          children={[
            <CardWithMedia
              child={
                <ReactPlayer
                  url={process.env.REACT_APP_MOVIE_URL1}
                  controls
                  width="100%"
                  height="100%"
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
                  url={process.env.REACT_APP_MOVIE_URL2}
                  controls
                  width="100%"
                  height="100%"
                />
              }
              title={"AI Powered Self PR"}
              description={
                "This AI powered web app will help you to write your self PR almost automatically.You only need to remember and specify your past experiences and achievements."
              }
            />,
            <CardWithMedia
              child={
                <img src="/Coming_Soon.png" alt="" width="100%" height="100%" />
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
  );
};
