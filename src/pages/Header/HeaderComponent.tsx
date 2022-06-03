import React from 'react';
import './HeaderComponent.scss';
import { Grid, TextField, Card , CardContent, CardHeader, CardMedia, IconButton, Typography, Menu,MenuItem,Box,Button,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle} from '@mui/material';

const HeaderComponent = () => {
    const [open, setOpen] = React.useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return (
       <div className='header'>
            <Grid container spacing={2}>
                <Grid item xs={9}>
                    <div className='companyName'>KR-MART</div>
                </Grid>
                <Grid className='mtop' item xs={1}>
                    <Button variant="contained" onClick={handleClickOpen}>Supply 1</Button>
                </Grid>
                <Grid className='mtop' item xs={1}>
                    <Button variant="contained" onClick={handleClickOpen}>Supply 2</Button>
                </Grid>
                <Grid className='mtop' item xs={1}>
                    <Button variant="contained" onClick={handleClickOpen}>Supply 3</Button>
                </Grid>
            </Grid>
            <Dialog open={open} onClose={handleClose}  fullWidth>
        <DialogTitle>Address</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText> */}
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add</Button>
        </DialogActions>
      </Dialog>
        </div>
    );
};

export default HeaderComponent;
