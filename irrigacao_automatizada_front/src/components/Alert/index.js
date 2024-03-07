import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles';
import  alertaAction  from '../../action/alertaAction';
import Alert from '@mui/material/Alert';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function CustomizedSnackbars() {
  /* error | warning | info | success */
  const dispatch = useDispatch();
  const classes = useStyles();
  const alert = useSelector(state => state.AlertaReducer.alert);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    dispatch(alertaAction.exibirAlerta(false));
  };

  return (
    <div className={classes.root} id="AlertComponent">
      <Snackbar
        open={alert?.mensagem}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert 
          elevation={6}
          variant="filled"
          onClose={handleClose}
          severity={alert?.tipo}
        >
          {alert?.mensagem}
        </Alert >
      </Snackbar>
    </div>
  );
}