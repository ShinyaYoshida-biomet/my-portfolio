import { Typography } from '../atoms/Typography';
import { Box, Grid } from '@mui/material';
import './Expertise.css'

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
        <blockquote className='block1' style={{fontFamily: 'CustomFont'}}>
          Passionate about UI/UX.
          Over 4 years of development experience in HTML, CSS, JS, React and NextJS frameworks.
        </blockquote>
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
        <blockquote className='block1' style={{ fontFamily: 'CustomFont' }}>
          Passionate about UI/UX.
          Over 4 years of development experience in HTML, CSS, JS, React and NextJS frameworks.
        </blockquote>        
      </Grid>
    </Grid>
    </Box>

}