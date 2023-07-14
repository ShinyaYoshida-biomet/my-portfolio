import { Typography } from "../atoms/Typography";
import WebIcon from "@mui/icons-material/Web";
import "./Expertise.css";

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
    <>
      <Typography
        variant="h4"
        sx={{
          display: "flex",
          alignItems: "start",
          margin: "2rem auto",
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
            marginBottom: "0",
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
          marginLeft: "4rem",
        }}
      >
        <ul style={{ paddingInlineStart: "2vw", fontSize: "20px" }}>
          {textList.map((text) => (
            <li>{text}</li>
          ))}
        </ul>
      </blockquote>

      <div style={{ alignSelf: "start" }}>
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
      </div>
    </>
  );
};
