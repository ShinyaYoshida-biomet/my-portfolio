import { Typography } from "@mui/material";

export const Contact = ({ isSmallScreen }: { isSmallScreen: boolean }) => {
  return (
    // mobileの場合は後で縦に並べ直すか。
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: "3vw 0"
      }}
    >
      <div
        style={{
          width: "50%",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: "30px", // extra-small devices
              sm: "35px", // small devices
              md: "35px", // medium devices
              lg: "75px", // large devices
              xl: "75px", // extra-large devices
            },
            textAlign: "start",
          }}
        >
          Let's start <br />
          historical projects <br />
          with me!! <br />
        </Typography>
      </div>
      <div
        style={{
          width: "30%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={process.env.REACT_APP_MY_ICON}
          alt="myIcon"
          style={{
            height: "350px",
            width: "350px",
            borderRadius: "50%",
          }}
        />
      </div>
    </div>
  );
};
