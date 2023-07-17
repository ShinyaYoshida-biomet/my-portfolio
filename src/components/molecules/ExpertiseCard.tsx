import { Typography } from "../atoms/Typography";
import { Box, List, ListItem, ListItemText } from "@mui/material";

export const ExpertiseCard = ({
  title,
  textList,
  icon,
}: {
  title: string;
  textList: string[];
  icon: React.ReactNode;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", // Add this
        height: "100%", // Make sure to fill the height
      }}
    >
      <Typography
        variant="h4"
        sx={{
          display: "flex",
          alignItems: "center",
          margin: "2rem auto",
          fontSize: {
            xs: "35px", // extra-small devices
            sm: "35px", // small devices
            md: "35px", // medium devices
            lg: "50px", // large devices
            xl: "50px", // extra-large devices
          }, // Responsive font size
        }}
      >
        {icon}
        {title}
      </Typography>

      <div style={{ alignSelf: "start" }}>
        <Typography
          variant="h6"
          sx={{
            marginLeft: "1rem",
            marginBottom: "0px",
            color: "darkCyan",
          }}
        >
          {"<h1>"}
        </Typography>
      </div>

      <blockquote
        className="block1"
        style={{
          fontFamily: "CustomFont",
          textAlign: "start",
          position: "relative",
          height: "100%",
          width: "90%",
          maxHeight: "80%",
          overflow: "auto",
          margin: "0 0rem 0 2rem",
          lineHeight: 2,
          fontSize: "1.1em",
          color: "#fff",
          borderLeft: "2.5px solid darkcyan",
        }}
      >        
        <List
          sx={{
            fontSize: {
              xs: "15px", // extra-small devices
              sm: "15px", // small devices
              md: "15px", // medium devices
              lg: "30px", // large devices
              xl: "30px", // extra-large devices
            }, // Responsive font size
            paddingInlineStart: {
              xs: "1vw",
              sm: "1vw",
              md: "2vw",
              lg: "4vw",              
              xl: "4vw"
            },
            marginTop: "0rem",
          }}
        >
          {textList.map((text) => (
            <ListItem>
              <ListItemText>・{text}</ListItemText>
            </ListItem>
          ))}
        </List>
      </blockquote>

      <div style={{ alignSelf: "start" }}>
        <Typography
          variant="h6"
          sx={{
            textAlign: "start",
            marginLeft: "1rem",
            marginBottom: "1rem",
            color: "darkCyan",
          }}
        >
          {"</h1>"}
        </Typography>
      </div>
    </Box>
  );
};
