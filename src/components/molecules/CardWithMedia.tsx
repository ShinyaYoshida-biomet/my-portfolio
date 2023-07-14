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
    <Card sx={{ backgroundColor: "#1a2836", height: "100%" }}>
      <div>{child}</div>
      <CardContent
        sx={{
          height: "30%",
          color: "white",
          backgroundColor: "#1a2836",
          opacity: "0.9",
          overflowY: "auto",
        }}
      >
        <Typography variant="h4">{title}</Typography>
        <Typography
          variant="h6"
          sx={{
            display: "inline-block",
            whiteSpace: "pre-line",
            fontWeight: 'normal'
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};
