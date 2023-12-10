import { Box, Link, Typography } from "@mui/material";

export const Contact = ({ isSmallScreen }: { isSmallScreen: boolean }) => {
  const fontSize = isSmallScreen ? "20px" : "30px";
  const iconSize = isSmallScreen ? "30px" : "40px";
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
          flexDirection: isSmallScreen ? "column" : "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          padding: "3vw 0",
        }}
      >
        <div
          style={{
            width: isSmallScreen ? "100%" : "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
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
              textAlign: "center",
            }}
          >
            Let's start <br />
            historical projects <br />
            with me!! <br />
          </Typography>
        </div>
        <div
          style={{
            width: isSmallScreen ? "100%" : "30%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: isSmallScreen ? "10%" : "0px",
            marginBottom: isSmallScreen ? "10%" : "0px",
          }}
        >
          <img
            src={process.env.REACT_APP_MY_ICON}
            alt="myIcon"
            style={{
              maxHeight: isSmallScreen ? "160px" : "350px",
              maxWidth: isSmallScreen ? "160px" : "350px",
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
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            margin: "0 auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: isSmallScreen ? "column" : "row",
              justifyContent: "space-evenly",
              gap: "3vh",
              alignItems: isSmallScreen ? "start" : "center",
              width: isSmallScreen ? "30%" : "100%",
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
                width={iconSize}
                height="auto"
                alt="InstagramIcon"
                style={{ borderRadius: "20px" }}
              />
              <Typography sx={{ marginLeft: "10px", fontSize: fontSize }}>
                Instagram
              </Typography>
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
                width={iconSize}
                height="auto"
                alt="linkedInIcon"
                style={{ borderRadius: "20px" }}
              />
              <Typography sx={{ marginLeft: "10px", fontSize: fontSize }}>
                LinkedIn
              </Typography>
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
                width={iconSize}
                height="auto"
                alt="WhatsAppIcon"
                style={{ borderRadius: "20px" }}
              />
              <Typography sx={{ marginLeft: "10px", fontSize: fontSize }}>
                WhatsApp
              </Typography>
            </Link>
          </Box>
        </div>
      </div>
    </div>
  );
};
