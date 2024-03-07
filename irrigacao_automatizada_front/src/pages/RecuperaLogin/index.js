import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Topography from '../../components/Topography';
import Logo from "../../assets/img/logo.png";
import { useNavigate } from 'react-router-dom';
import { loginSistema } from '../../routes/paths';
import useStyles from './sytle';
import { ValidationRequired } from "../../utils/validations.js";
import { MSG_EMAIL } from "../../utils/resource";
import swal from 'sweetalert';

export default function RecuperaLogin() {
  const classes = useStyles();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');

  const handleChange = (email) => {    
    var camposRequeridos = ValidationRequired(email,email);

    if(camposRequeridos) return swal("Ocorreu um erro", `${camposRequeridos}`, "error");

    swal(MSG_EMAIL);
    navigate(loginSistema);
  }

  return (
    <div className={classes.image}>
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <img src={Logo} alt='logotipo do sistema' />
          <Topography titulo = {'Recuperar Conta'}/>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">E-mail</InputLabel>
              <Input
                id="email"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <Button className={classes.botao}
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => handleChange(email)}
            >
              Enviar
            </Button>
          </form>
        </Paper>
      </main>
    </div>
  );
}