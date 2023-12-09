import { Typography } from "@mui/material";

export const Contact = ({ isSmallScreen }: { isSmallScreen: boolean }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          width: "70%",
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
          together
          <br />
        </Typography>
      </div>
    </div>
  );
};
