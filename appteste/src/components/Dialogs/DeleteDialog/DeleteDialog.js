import React, {useState} from 'react'

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const DeleteDialog = ({ open, handleClose, currentUserData }) => {

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>
          {`Deletar usuário(a) ${currentUserData.username}?`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Se confirmado a ação não pode ser desfeita.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(false)}>Cancelar</Button>
          <Button onClick={() => handleClose(true)} autoFocus>
            Sim
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default DeleteDialog