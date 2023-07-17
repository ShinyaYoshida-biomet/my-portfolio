import { useTheme } from "@mui/material/styles";
import { Typography } from "../atoms/Typography";
import { Grid } from "@mui/material";
import ReactPlayer from "react-player";
import { Slideshow } from "../molecules/Slideshow";
import { CardWithMedia } from "../molecules/CardWithMedia";
import { useMediaQuery } from "@mui/material";

export const Portfolio = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  // useTheme();
  return (
    <Grid
      container
      spacing={{ xl: 3, lg: 3, md: 1, sm: 1, xs: 1 }}
      height="100%"
    >
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
            md: "flex-end",
            lg: "flex-end",
            xl: "flex-end",
          },
          paddingBottom: {
            xl: "5vh",
            lg: "5vh",
            md: "2vh",
            sm: "2vh",
            xs: "2vh",
          },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            display: "flex",
            justifyContent: {
              xs: "center",
              sm: "center",
              md: "flex-end",
              lg: "flex-end",
              xl: "flex-end",
            },
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
      <Grid item xs={12} sm={8} sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: {
          xs: "center",
          sm: "center",
          md: "flex-end",
          lg: "flex-end",
          xl: "flex-end",
        },
        paddingBottom: {
          xl: "5vh",
          lg: "5vh",
          md: "2vh",
          sm: "2vh",
          xs: "2vh",
        },
      }}>
        {!isSmallScreen ? (
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
                  <img
                    src="/Coming_Soon.png"
                    alt=""
                    width="100%"
                    height="100%"
                  />
                }
                title={"Statistical Reports: Incidence rates"}
                description={
                  "Between men and women, is there any difference of lang cancer incidence rates?"
                }
              />,
            ]}
          ></Slideshow>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "80%",
              gap: "20px", // You can adjust this value to provide the spacing you want
            }}
          >
              <CardWithMedia
                child={
                  <ReactPlayer
                    url={process.env.REACT_APP_MOVIE_URL1}
                    controls
                    width="100%"
                    height="100%" // Set height to 100%
                  />
                }
                title={"LP Site: One Piece Film"}
                description={
                  "I'm a great fan of Japanese manga One Piece, so I made this landing site for the new imaginary film."
                }
              />
              <CardWithMedia
                child={
                  <ReactPlayer
                    url={process.env.REACT_APP_MOVIE_URL2}
                    controls
                    width="100%"
                    height="100%" // Set height to 100%
                  />
                }
                title={"AI Powered Self PR"}
                description={
                  "This AI powered web app will help you to write your self PR almost automatically.You only need to remember and specify your past experiences and achievements."
                }
              />
              <CardWithMedia
                child={<img src="/Coming_Soon.png" alt="" width="100%" />}
                title={"Statistical Reports: Incidence rates"}
                description={
                  "Between men and women, is there any difference of lang cancer incidence rates?"
                }
              />
          </div>
        )}
      </Grid>
    </Grid>
  );
};
