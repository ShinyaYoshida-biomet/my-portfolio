import { Typography } from "../atoms/Typography";
import { Grid } from "@mui/material";
import ReactPlayer from "react-player";
import { Slideshow } from "../molecules/Slideshow";
import { CardWithMedia } from "../molecules/CardWithMedia";


export const Portfolio = ({ isSmallScreen }: { isSmallScreen : boolean}) => {
  const children = [
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
        <ReactPlayer
          url={process.env.REACT_APP_MOVIE_URL3}
          controls
          width="100%"
          height="100%"
        />
      }
      title={"Menu Helper Chat App"}
      description={
        "The innovative app for restaurant owner or staffs. This app will help customers to understand what the menu is like and what the ingredients are like. It will work not only in laptop environment but also in mobile app environment."
      }
    />,
    <CardWithMedia
      child={
        <ReactPlayer
          url={process.env.REACT_APP_MOVIE_URL1}
          controls
          width="100%"
          height="100%"
        />
      }
      title={"LP: One Piece Film"}
      description={
        "I'm a great fan of Japanese manga, One Piece, so I made this landing site for the new imaginary film." +
        "This is an imaginary story of the film, so please don't expect the real film."
      }
    />,    
  ];

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
      <Grid
        item
        xs={12}
        sm={8}
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
        {!isSmallScreen ? (
          <Slideshow
            children={children}
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
              gap: "20px",
            }}
            >
              {children.map(
                (child) => child
              )}
          </div>
        )}
      </Grid>
    </Grid>
  );
};
