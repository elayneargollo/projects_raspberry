import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Logo from "../../assets/img/logo.png";
import { useNavigate } from 'react-router-dom';
import { loginSistema } from '../../routes/paths';
import useStyles from './sytle';
import Link from '@material-ui/core/Link';
import Grid from '@mui/material/Grid';
import Topography from '../../components/Topography';
import { ValidationRequiredCadastro } from "../../utils/validations.js";
import swal from 'sweetalert';
import { cadastroUsuario } from '../../services/api/users';

export default function SignIn() {
  const classes = useStyles();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');

  async function handleChange(nome, sobrenome, email, password) {    
    let dados = { nome, sobrenome, email, password };
    var camposRequeridos = ValidationRequiredCadastro(dados);

    if(camposRequeridos) return swal("Ocorreu um erro", `${camposRequeridos}`, "error");

    async function getResponse() {
      const res = await cadastroUsuario(dados);

      if (res.status === 201) {
        swal(`${res.data.message}`);
        navigate(loginSistema);
      }
      else{
        swal("Houve um erro", `${res.response.data.message}`, "error");
      }
    }

    getResponse();
  }

  return (
    <div className={classes.image}>
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <img src={Logo} alt='logotipo do sistema' />
          <Topography titulo = {'  Cadastre-se'}/>
          <form className={classes.form}>

          <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="nome">Nome</InputLabel>
              <Input
                name="nome"
                type="nome"
                id="nome"
                autoFocus
                autoComplete="current-password"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="sobrenome">Sobrenome</InputLabel>
              <Input
                name="sobrenome"
                type="sobrenome"
                id="sobrenome"
                autoComplete="current-password"
                value={sobrenome}
                onChange={(e) => setSobrenome(e.target.value)}
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">E-mail</InputLabel>
              <Input
                id="email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Senha</InputLabel>
              <Input
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>            
            <Button className={classes.botao}
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => handleChange(nome, sobrenome, email, password)}
            >
              Inscreva-se
            </Button>
            <Grid container className={classes.espacamento}>
              <Grid item xs>
                <Link href={loginSistema} variant="body2">
                    Já tem uma conta? Entrar
                </Link>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </main>
    </div>
  );
}