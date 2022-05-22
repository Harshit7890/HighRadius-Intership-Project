import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { deleteData } from '../Data';
export function DeleteDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = async (e) => {
    for (let i = 0; i < props.selected.length; i++) {
      console.log(props.selected[i])
      deleteData(props.selected[i]);
    }


    handleClose()

  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} disabled={props.selected.length < 1} sx={{

        '&:hover': {
          backgroundColor: '#33B8FF',
          color: 'blue',

        }
      }} style={{ color: 'white', borderColor: "#33B8FF" }}>

        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Delete
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{ color: "white", backgroundColor: "#254E64" }}>Delete Records</DialogTitle>
        <DialogContent style={{ backgroundColor: "#254E64" }} >
          <DialogContentText style={{ backgroundColor: "#254E64", color: "white" }}>
            Are you sure you want to delete these record[s] ?
          </DialogContentText>

        </DialogContent>
        <DialogActions style={{ backgroundColor: "#254E64" }}>
          <Button onClick={handleDelete} variant="outlined" style={{ color: "white" }} fullWidth>Delete</Button>
          <Button onClick={handleClose} variant="outlined" style={{ color: "white" }} fullWidth>Cancel</Button>

        </DialogActions>
      </Dialog>
    </div>
  );
}
