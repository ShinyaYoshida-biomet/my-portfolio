import { Container, Typography } from "@mui/material"

export const NameAndRole = ({ name }: { name: string }) => {
  return (
    <>
      <Container>
        <Typography variant='h1' fontFamily={"CustomFont"}>
          {name}
        </Typography>
        <Typography variant='h6' fontWeight={"bold"} fontFamily={"CustomFont"}>
          {name}
        </Typography>
      </Container>
    </>
  )
}