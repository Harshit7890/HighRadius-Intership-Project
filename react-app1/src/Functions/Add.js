import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { addData } from '../Data';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';



const initialValue = {
  business_code: "",
  cust_number: "",
  clear_date: new Date().getDate(),
  buisness_year: "",
  doc_id: "",
  document_create_date: new Date().getDate(),
  due_in_date: new Date(),
  invoice_currency: "",
  document_type: "",
  posting_id: "",
  total_open_amount: "",
  posting_date: new Date(),
  baseline_create_date: new Date(),
  cust_payment_terms: "",
  invoice_id: "",
};


export function AddDialog(business_code, cust_number, clear_date, buisness_year, doc_id, posting_date,
  document_create_date, due_in_date, invoice_currency, document_type, posting_id, total_open_amount,
  baseline_create_date, cust_payment_terms, invoice_id) {



  const [invoice, setInvoice] = useState(initialValue);

  const changeHandler = (e) => {
    console.log(e.target.value);
    console.log(invoice)
    setInvoice({ ...invoice, [e.target.name]: e.target.value });
  };




  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleAdd = async (e) => {
    e.preventDefault();
    let response = await addData(invoice);

    if (response) {
      setInvoice({
        business_code: '', cust_number: '', clear_date: '', buisness_year: '',
        doc_id: '', posting_date: '', document_create_date: '', due_in_date: '', invoice_currency: '', document_type: '',
        posting_id: '', total_open_amount: '', baseline_create_date: '', cust_payment_terms: '', invoice_id: ''
      })

    }
    
    handleClose();

  }



  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} sx={{

        '&:hover': {
          backgroundColor: '#33B8FF',
          color: 'blue',

        }
      }} style={{ color: 'white', borderColor: "#33B8FF" }}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        ADD
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="20px" >
        <DialogTitle style={{ backgroundColor: "#254E64", color: "white" }}>Add</DialogTitle>
        <DialogContent style={{ backgroundColor: "#254E64" }}>
          <DialogContentText>

          </DialogContentText>
         
            <Grid container spacing={5}>
              <Grid item xs={3}>
                <TextField sx={{ backgroundColor: "white" }} fullWidth autoFocus margin="dense" onChange={changeHandler} name='business_code' value={invoice.business_code} label="Business Code" variant="filled" />
               
              </Grid>
              <Grid item xs={3}>
                <TextField sx={{ backgroundColor: "white" }} fullWidth autoFocus margin="dense" onChange={changeHandler} name='cust_number' value={invoice.cust_number} label="Customer Number" variant="filled" />
              </Grid>
              <Grid item xs={3}>
                <TextField sx={{ backgroundColor: "white" }} fullWidth autoFocus margin="dense" onChange={changeHandler} name='clear_date' value={invoice.clear_date} label="Clear Date" variant="filled" type="date" />
              </Grid>
              <Grid item xs={3}>
                <TextField sx={{ backgroundColor: "white" }} fullWidth autoFocus margin="dense" onChange={changeHandler} name='buisness_year' value={invoice.buisness_year} label="Buisness Year" variant="filled" />

              </Grid>
              <Grid item xs={3}>
                <TextField sx={{ backgroundColor: "white" }} fullWidth autoFocus margin="dense" onChange={changeHandler} name='doc_id' value={invoice.doc_id} label="Document Id" variant="filled" />

              </Grid>
              <Grid item xs={3}>
                <TextField sx={{ backgroundColor: "white" }} fullWidth autoFocus margin="dense" onChange={changeHandler} name='posting_date' value={invoice.posting_date} label="Posting Date" variant="filled" type="date" />

              </Grid>
              <Grid item xs={3}>
                <TextField sx={{ backgroundColor: "white" }} fullWidth autoFocus margin="dense" onChange={changeHandler} name='document_create_date' value={invoice.document_create_date} label="Document Create Date" variant="filled" type="date" />

              </Grid>
              <Grid item xs={3}>
                <TextField sx={{ backgroundColor: "white" }} fullWidth autoFocus margin="dense" onChange={changeHandler} name='due_in_date' value={invoice.due_in_date} label="Due Date" variant="filled" type="date" />

              </Grid>
              <Grid item xs={3}>
                <TextField sx={{ backgroundColor: "white" }} fullWidth autoFocus margin="dense" onChange={changeHandler} name='invoice_currency' value={invoice.invoice_currency} label="Invoice Currency" variant="filled" />

              </Grid>
              <Grid item xs={3}>
                <TextField sx={{ backgroundColor: "white" }} fullWidth autoFocus margin="dense" onChange={changeHandler} name='document_type' value={invoice.document_type} label="Document Type" variant="filled" />

              </Grid>
              <Grid item xs={3}>
                <TextField sx={{ backgroundColor: "white" }} fullWidth autoFocus margin="dense" onChange={changeHandler} name='posting_id' value={invoice.posting_id} label="Posting Id" variant="filled" />

              </Grid>
              <Grid item xs={3}>
                <TextField sx={{ backgroundColor: "white" }} fullWidth autoFocus margin="dense" onChange={changeHandler} name='total_open_amount' value={invoice.total_open_amount} label="Total Open Amount" variant="filled" />

              </Grid>
              <Grid item xs={3}>
                <TextField sx={{ backgroundColor: "white" }} fullWidth autoFocus margin="dense" onChange={changeHandler} name='baseline_create_date' value={invoice.baseline_create_date} label="Baseline Create Date" variant="filled" type="date" />

              </Grid>
              <Grid item xs={3}>
                <TextField sx={{ backgroundColor: "white" }} fullWidth autoFocus margin="dense" onChange={changeHandler} name='cust_payment_terms' value={invoice.cust_payment_terms} label="Customer Payment Terms" variant="filled" />

              </Grid>
              <Grid item xs={3}>
                <TextField sx={{ backgroundColor: "white" }} fullWidth autoFocus margin="dense" onChange={changeHandler} name='invoice_id' value={invoice.invoice_id} label="Invoice Id" variant="filled" />
              </Grid>
            </Grid>

        
        </DialogContent>
        <DialogActions style={{ backgroundColor: "#254E64" }}>

          <br />

          <Button variant="outlined" onClick={handleAdd} style={{ color: "white" }} fullWidth>

            ADD

          </Button>


          <Button variant="outlined" onClick={handleClose} style={{ color: "white" }} fullWidth>Cancel</Button>


        </DialogActions>
      </Dialog>
    </div>
  );
}
