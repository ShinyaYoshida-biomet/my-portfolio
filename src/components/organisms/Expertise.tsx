import { Typography } from "../atoms/Typography";
import WebIcon from "@mui/icons-material/Web";
import InsightsIcon from "@mui/icons-material/Insights";
import { Box, Grid } from "@mui/material";
import { ExpertiseCard } from "components/molecules/ExpertiseCard";

const HtmlCode = () => {
  return (
    <pre style={{ textAlign: "left" }}>
      <code>
        &lt;html lang="en"&gt;
        <br />
        &nbsp;&nbsp;&lt;head name="viewport" content="device-width"
        initial-scale="1.0"&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt; What I do for work &lt;/title&gt;
        <br />
        &nbsp;&nbsp;&lt;/head&gt;
        <br />
        &nbsp;&nbsp;&lt;body&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Frontend development is really
        exciting!
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/h1&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Maybe I should learn more about
        mobile app and backend development too.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/p&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Oops! Almost forgot to say "Hello
        World!"
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/p&gt;
        <br />
        &nbsp;&nbsp;&lt;/body&gt;
        <br />
        &lt;/html&gt;
        <br />
      </code>
    </pre>
  );
};

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
      
      <div style={{display: 'flex', justifyContent: 'center'}}>
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
