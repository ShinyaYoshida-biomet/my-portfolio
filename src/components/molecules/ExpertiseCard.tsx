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
        <ul style={{ paddingInlineStart: "2vw", fontSize: "20px", marginTop: '0rem' }}>
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
