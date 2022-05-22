import { Grid } from '@mui/material';

import { Typography } from '@mui/material';
import { MyGrid } from './Components/myGrid';
import styles from './mystyle1.module.css';
import './mystyle3.css';

function App() {
  return <>

    <Grid container spacing={5}>
      <Grid item xs={3} >
        <img src='http://127.0.0.1:8887/Group%2020399.svg' className={styles.img2} ></img>
      </Grid>
      <Grid item xs={5}>
        <img src='http://127.0.0.1:8887/logo.svg' className={styles.img1} ></img>
      </Grid>
    </Grid>


    <br />
    <Typography align="left" variant='h6'>
      Invoice List
    </Typography>
    <br />
    <MyGrid />
    <br />

  </>



}

export default App;






























