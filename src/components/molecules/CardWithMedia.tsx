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
          height: "100px",
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
              xs: "30px", // extra-small devices
              sm: "30px", // small devices
              md: "30px", // medium devices
              lg: "45px", // large devices
              xl: "45px", // extra-large devices
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
            fontSize: {
              xs: "20px", // extra-small devices
              sm: "20px", // small devices
              md: "20px", // medium devices
              lg: "30px", // large devices
              xl: "30px", // extra-large devices
            },            
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};
