import { Typography } from "../atoms/Typography";
import WebIcon from '@mui/icons-material/Web';
import InsightsIcon from '@mui/icons-material/Insights';
import { Box, Grid } from "@mui/material";
import logo from '../../logo.svg';
import "./Expertise.css";

export const Expertise = () => {
  return (
    <Box>
      <Typography variant="h1">My Expertise</Typography>
      <Grid
        container
        sx={{
          paddingLeft: "3vw",
          paddingRight: "3vw",
          margin: "10vh auto",
          width: "70%",
        }}
      >
        <Grid
          item
          xs={5.5}
          height="60vh"
          sx={{
            borderColor: "gray",
            borderStyle: "solid",
            borderWidth: "3px",
          }}
        >
          
          <Typography variant="h4" sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>            
            <WebIcon
              sx={{
                fontSize: '3rem',
                marginRight: '2rem'
              }} />
                 Web App
          </Typography>

          <Typography
            variant="h6"
            sx={{
              textAlign: "start",
              marginLeft: "1rem",
              marginBottom: "0",
              color: "darkCyan",
            }}
          >
            {"<h1>"}
          </Typography>

          <blockquote
            className="block1"
            style={{
              fontFamily: "CustomFont",
              textAlign: "start",
            }}
          >
            <ul style={{ paddingInlineStart: '2vw' }}>
              <li>Passionate about UI/UX.</li>
              <li>Over 3 years of Web development experience.</li>
              <li>Prominence in HTML, CSS, JS.</li>
              <li>
                Make the most of React and NextJS, Vue and NuxtJS frameworks.
              </li>
            </ul>
          </blockquote>

          <Typography
            variant="h6"
            sx={{
              textAlign: "start",
              marginLeft: "1rem",
              marginBottom: "0",
              color: "darkCyan",
            }}
          >
            {"<h1>"}
          </Typography>
        </Grid>

        <Grid item xs={1}></Grid>

        <Grid
          item
          xs={5.5}
          height="60vh"
          sx={{
            borderColor: "gray",
            borderStyle: "solid",
            borderWidth: "3px",
          }}
        >
          <Typography variant="h4" sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <InsightsIcon
              sx={{
                fontSize: '3rem',
                marginRight: '2rem'
              }} />          
            Data Science
          </Typography>

          <Typography
            variant="h6"
            sx={{
              textAlign: "start",
              marginLeft: "1rem",
              marginBottom: "0",
              color: "darkCyan",
            }}
          >
            {"<h1>"}
          </Typography>

          <blockquote
            className="block1"
            style={{
              fontFamily: "CustomFont",
              textAlign: "start",
            }}
          >
            <ul style={{ paddingInlineStart: '2vw' }}>
              <li>Aspiration for a New Era Powered by Artificial Intelligence.</li>
              <li>Over 5 years of machine learning experience.</li>
              <li>Prominence in Python, R, SQL, AWS, GCP.</li>
              <li>
                Make the most of Pytorch, Scikit-Learn frameworks.
              </li>
            </ul>
          </blockquote>

          <Typography
            variant="h6"
            sx={{
              textAlign: "start",
              marginLeft: "1rem",
              marginBottom: "0",
              color: "darkCyan",
            }}
          >
            {"<h1>"}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
