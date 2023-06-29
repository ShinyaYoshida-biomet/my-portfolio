import { Box, Typography } from '@mui/material';

export const Expertise = () => {
  return <Box display="flex" justifyContent={"center"}>
      <Typography        
        variant='h1'              
        sx={{
          textAlign: "center",
          fontFamily: "CustomFont"
        }}
      >
        My Expertise
      </Typography>
    </Box>

}