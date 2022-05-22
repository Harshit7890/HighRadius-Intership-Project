import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { Search } from '../Data';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';


export function SearchDialog(props) {
  const [open, setOpen] = useState(false);
  
  const [sdata,setSdata]=useState({
    doc_id:"",
    invoice_id:"",
    cust_number:"",
    buisness_year:""
  })


  
  const handleClickOpen = () => {
    
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const changeHandler = (e) => {
    console.log(e.target.value);
    console.log(sdata)
    setSdata({ ...sdata, [e.target.name]: e.target.value });
  };
  
 
  const handleSearch=async()=>{
    
    await Search(sdata.doc_id,sdata.invoice_id,sdata.cust_number,sdata.buisness_year).then((data) =>props.setData(data.business))
    handleClose()
    
  }
 
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} sx={{
    
    '&:hover': {
      backgroundColor: '#33B8FF',
      color: 'blue',
      
  
  } }}
  style={{color:'white',borderColor:"#33B8FF"}}
     
  >
        Advance Search
      </Button>
      <Dialog open={open} onClose={handleClose} >
        <DialogTitle style={{backgroundColor:"#254E64", color:"white"}}>Advance Search</DialogTitle>
        
        <DialogContent style={{backgroundColor:"#254E64"}}>
          <DialogContentText>
            
          </DialogContentText>
         
          <Grid container spacing={5}>
            <Grid item xs={5}>
          <TextField
          sx={{backgroundColor:"white"}}
          fullWidth
            autoFocus
            margin="dense"
            name='doc_id'
            label="Document Id"
            onChange={changeHandler}
            value={sdata.doc_id}
            
            variant="filled"
          />
          </Grid>
          <Grid item xs={5}>
          <TextField
          sx={{backgroundColor:"white"}}
          fullWidth
            autoFocus
            margin="dense"
            name='invoice_id'
            label="Invoice Id"
            onChange={changeHandler}
            value={sdata.invoice_id}
          
            variant="filled"
          />
          </Grid>
          <Grid item xs={5}>
          <TextField
          sx={{backgroundColor:"white"}}
          fullWidth
            autoFocus
            margin="dense"
            name='cust_number'
            label="Customer Number"
            onChange={changeHandler}
            value={sdata.cust_number}
            
            variant="filled"
          />
          </Grid>
          <Grid item xs={5}>
          <TextField
          sx={{backgroundColor:"white"}}
          fullWidth
            autoFocus
            margin="dense"
            name='buisness_year'
            label="Business Year"
            onChange={changeHandler}
            value={sdata.buisness_year}
            
            variant="filled"
            width="50%"
          />
          </Grid>
          </Grid>
         
        </DialogContent>
        <DialogActions style={{backgroundColor:"#254E64"}}>
        <Button onClick={handleSearch} style={{color:"white"}} fullWidth>
          Search
          </Button>
          <Button onClick={handleClose} style={{color:"white"}} fullWidth>Cancel</Button>
          
        </DialogActions>
      </Dialog>
    </div>
  );
}
