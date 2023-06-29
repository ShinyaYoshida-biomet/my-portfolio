import {Typography} from './atoms/Typography';
import { Box, Grid } from '@mui/material';

export const Expertise = () => {
  return <Box>
      <Typography        
        variant='h1'
      >
        My Expertise
    </Typography>
    <Grid container>
      <Grid
        item xs={5.5}
        height='50vh'
        sx={{
          borderColor: 'gray',          
          borderStyle: 'solid',
          borderWidth: '3px'
        }}
      >
        <Typography variant='h4'>
          Web App
        </Typography>
      </Grid>
      <Grid item xs={1}></Grid>
      <Grid
        item xs={5.5}
        height='50vh'
        sx={{
          borderColor: 'gray',
          borderStyle: 'solid',
          borderWidth: '3px'
        }}
      >
        <Typography variant='h4'>
          Data Science
        </Typography>
      </Grid>
    </Grid>
    </Box>

}