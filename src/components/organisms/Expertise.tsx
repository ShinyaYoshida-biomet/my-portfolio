import { Typography } from "../atoms/Typography";
import WebIcon from "@mui/icons-material/Web";
import InsightsIcon from "@mui/icons-material/Insights";
import { Box, Grid } from "@mui/material";
import { ExpertiseCard } from "components/molecules/ExpertiseCard";
import { HtmlCode } from "components/molecules/HtmlCode";

export const Expertise = () => {
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
          top: "180%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <HtmlCode />
      </div>
      <Typography variant="h1">My Expertise</Typography>
      <Grid
        container
        sx={{
          paddingLeft: "3vw",
          paddingRight: "3vw",
          margin: "10vh auto",
          width: "80%",
          position: "relative",
        }}
      >
        <Grid
          item
          xs={5.5}
          height="70vh"
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
            title={"Web App"}
            textList={textListLeft}
            icon={
              <WebIcon
                sx={{
                  fontSize: "5rem",
                  marginRight: "2rem",
                }}
              />
            }
          ></ExpertiseCard>
        </Grid>

        <Grid item xs={1}></Grid>

        <Grid
          item
          xs={5.5}
          height="70vh"
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
                  fontSize: "5rem",
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
