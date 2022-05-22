import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect, useState } from 'react';
import { EditData } from '../Data';
import { color } from '@mui/system';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';

export function EditDialog(props) {
  const [open, setOpen] = useState(false);

  const [edata, setEdata] = useState({
    invoice_currency: "",
    cust_payment_terms: ""
  })


  useEffect(() => {
    console.log(props.sl_no)
  }, [])
  const handleClickOpen = () => {
    console.log(props.sl_no)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const changeHandler = (e) => {
    console.log(e.target.value);
    console.log(edata)
    setEdata({ ...edata, [e.target.name]: e.target.value });
  };

  const handleEdit = async (e) => {
    for (let i = 0; i < props.selected.length; i++) {
    console.log(edata, props.selected[i])
    EditData(edata, props.selected[i]);
    handleClose();
    }
  }


  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} disabled={props.selected.length < 1} sx={{

        '&:hover': {
          backgroundColor: '#33B8FF',
          color: 'blue',

        }
      }} style={{ color: 'white' }}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Edit
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle style={{
          backgroundColor: "#254E64",
          color: "white"
        }}>Edit</DialogTitle>

        <DialogContent style={{ backgroundColor: "#254E64" }}>
          <DialogContentText>

          </DialogContentText>
        
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  sx={{ backgroundColor: "white" }}
                  autoFocus
                  margin="dense"
                  name='invoice_currency'
                  label="Invoice Currency"
                  onChange={changeHandler}
                  value={edata.invoice_currency}
                  fullWidth
                  variant="filled"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  sx={{ backgroundColor: "white" }}
                  fullWidth
                  autoFocus
                  margin="dense"
                  name='cust_payment_terms'
                  label="Customer Payment Terms"
                  onChange={changeHandler}
                  value={edata.cust_payment_terms}

                  variant="filled"
                />
              </Grid>
            </Grid>
         
        </DialogContent>
        <DialogActions style={{ backgroundColor: "#254E64" }}>
          <Button onClick={handleEdit} style={{ color: "white" }} fullWidth>Edit</Button>
          <Button onClick={handleClose} style={{ color: "white" }} fullWidth>Cancel</Button>

        </DialogActions>
      </Dialog>
    </div>
  );
}
