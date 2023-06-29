import { Box, Container, Typography } from "@mui/material"
import { ScrollButton } from "./atoms/ScrollButton/ScrollButton"

export const NameAndRole = ({ name }: { name: string }) => {
  return (
    <>
      <Container>
        <Typography variant='h1' fontFamily={"CustomFont"}>
          {name}
        </Typography>
        <Typography variant='h4' fontWeight={"bold"} fontFamily={"CustomFont"}>
          WEB APP DEVELOPER / DATA SCIENTIST.
        </Typography>
        <Box style={{ marginTop: "20px" }}> 
          {/* To Do あとで心地よい感じにmarginを変える */}
          <ScrollButton  />
        </Box>
        
      </Container>
    </>
  )
}