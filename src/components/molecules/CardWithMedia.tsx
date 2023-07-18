import { Typography } from "../atoms/Typography";
import { Card, CardContent } from "@mui/material";

export const CardWithMedia = ({
  child,
  title,
  description,
}: {
  child: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <Card sx={{ backgroundColor: "#1a2836", borderRadius: "10px" }}>
      <div>{child}</div>
      <CardContent
        sx={{
          height: "150px",
          color: "white",
          backgroundColor: "#1a2836",
          opacity: "0.9",
          overflowY: "auto",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontSize: {
              xs: "25px", // extra-small devices
              sm: "25px", // small devices
              md: "25px", // medium devices
              lg: "30px", // large devices
              xl: "30px", // extra-large devices
            },
          }}
        >
          {title}
        </Typography>
        
        <Typography
          variant="h6"
          sx={{
            display: "inline-block",
            whiteSpace: "pre-line",
            fontWeight: 'normal',
            textAlign: 'left',
            fontSize: {
              xs: "15px", // extra-small devices
              sm: "15px", // small devices
              md: "15px", // medium devices
              lg: "20px", // large devices
              xl: "20px", // extra-large devices
            },            
          }}
        >
          &thinsp; {description}
        </Typography>
      </CardContent>
    </Card>
  );
};
