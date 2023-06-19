import { Container, Typography } from "@mui/material"

export const NameAndRole = ({ name }: { name: string }) => {
  return (
    <>
      <Container>
        <Typography variant='h1' fontFamily={"CustomFont"}>
          {name}
        </Typography>
        <Typography variant='h4' fontWeight={"bold"} fontFamily={"CustomFont"}>
          SOFTWARE ENGINEER, FRONT END & DATA SCIENCE.
        </Typography>
      </Container>
    </>
  )
}