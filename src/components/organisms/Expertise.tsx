import { Typography } from "../atoms/Typography";
import WebIcon from "@mui/icons-material/Web";
import InsightsIcon from "@mui/icons-material/Insights";
import { Box, Grid } from "@mui/material";
import { ExpertiseCard } from "components/molecules/ExpertiseCard";
import { HtmlCode } from "components/molecules/HtmlCode";

export const Expertise = ({ isSmallScreen }: { isSmallScreen : boolean}) => {
  const textListLeft = [
    "Passionate about UI/UX.",
    "Over 3 years of Web development experience.",
    "Prominence in HTML, CSS, JS.",
    "Make the most of React and NextJS, Vue and NuxtJS frameworks.",
  ];

  const textListRight = [
    "Aspiration for a New Era Powered by Artificial Intelligence.",
    "Over 5 years of machine learning experience.",
    "Prominence in Python, R, SQL, AWS, GCP.",
    "Make the most of Pytorch, Scikit-Learn frameworks.",
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          top: isSmallScreen ? "170%" : "180%", 
          marginLeft: isSmallScreen ? "30%" : "50%",
          marginRight: isSmallScreen ? "30%" : "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: isSmallScreen ? "60%" : "100%",
          width: isSmallScreen ? "auto" : "60%",
        }}
      >
        <HtmlCode />
      </div>
      <Typography
        variant="h1"
        sx={{
          fontSize: {
            xs: "70px", // extra-small devices
            sm: "70px", // small devices
            md: "70px", // medium devices
            lg: "150px", // large devices
            xl: "150px", // extra-large devices
          },
        }}
      >
        Expertise
      </Typography>
      <Grid
        container
        sx={{
          paddingLeft: "3vw",
          paddingRight: "3vw",
          margin: "10vh auto",
          width: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "80%",
            xl: "80%",
          },
          position: "relative",
        }}
      >
        <Grid
          item
          xs={12}
          md={5.5}
          height={isSmallScreen ? "60vh" : "70vh"}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            borderColor: "gray",
            borderStyle: "solid",
            borderWidth: "3px",
            marginBottom: isSmallScreen ? "20px" : "0px", 
          }}
        >
          <ExpertiseCard
            title={"Web App"}
            textList={textListLeft}
            icon={
              <WebIcon
                sx={{
                  marginRight: "2rem",
                }}
              />
            }
          ></ExpertiseCard>
        </Grid>

        <Grid item xs={isSmallScreen ? 0 : 1}></Grid>

        <Grid
          item
          xs={12}
          md={5.5}
          height={isSmallScreen ? "60vh" : "70vh"}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            borderColor: "gray",
            borderStyle: "solid",
            borderWidth: "3px",
          }}
        >
          <ExpertiseCard
            title={"AI Engineering"}
            textList={textListRight}
            icon={
              <InsightsIcon
                sx={{
                  marginRight: "2rem",
                }}
              />
            }
          ></ExpertiseCard>
        </Grid>
      </Grid>
    </Box>
  );
};
