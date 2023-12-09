import { Box, Link, Typography } from "@mui/material";

export const Contact = ({ isSmallScreen }: { isSmallScreen: boolean }) => {
  return (
    // mobileの場合は後で縦に並べ直すか。
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          padding: "3vw 0",
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: isSmallScreen ? "column" : "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "100%",
            padding: "2vw 0",
          }}
        >
          <Link
            href={process.env.REACT_APP_INSTAGRAM_URL}
            color="inherit"
            className="mouse-enlarge"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <img
              src="instagramIcon.png"
              width={"40px"} height="auto"
              alt="InstagramIcon"
              style={{ borderRadius: "20px" }}
            />
            <Typography sx={{ marginLeft: "10px", fontSize: "30px" }}>Instagram</Typography>
          </Link>
          <Link
            href={process.env.REACT_APP_LINKEDIN_URL}
            color="inherit"
            className="mouse-enlarge"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <img
              src="linkedInIcon.png"
              width={"40px"} height="auto"
              alt="linkedInIcon"
              style={{ borderRadius: "20px" }}
            />
            <Typography sx={{ marginLeft: "10px", fontSize: "30px" }}>LinkedIn</Typography>
          </Link>
          <Link
            href={process.env.REACT_APP_WHATSAPP_URL}
            color="inherit"
            className="mouse-enlarge"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <img
              src="whatsAppIcon.png"
              width={"40px"} height="auto"
              alt="WhatsAppIcon"
              style={{ borderRadius: "20px" }}
            />
            <Typography sx={{ marginLeft: "10px", fontSize: "30px" }}>WhatsApp</Typography>
          </Link>
        </Box>
      </div>
    </div>
  );
};