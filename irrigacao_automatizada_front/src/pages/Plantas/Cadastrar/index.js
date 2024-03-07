import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useNavigate } from 'react-router-dom';
import { plantas } from '../../../routes/paths';
import clsx from 'clsx';
import HeaderSider from '../../../components/HeaderSider/index';
import Footer from '../../../components/Footer/index';
import Logo from "../../../assets/img/folha.png";
import Titulo from "../../../components/Titulo/index";
import { ValidationAddPlanta } from "../../../utils/validations.js";
import { MensagemCadastroComSucesso } from "../../../utils/resource";
import swal from 'sweetalert';
import { postPlantas } from '../../../services/api/planta';
import { getAmbientes } from '../../../services/api/ambiente';
import { getPortes } from '../../../services/api/porte';
import { getSolos } from '../../../services/api/solo';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: '80%',
    marginTop: 25,
    backgroundImage: 'linear-gradient(#99C2B9,#FFFEFF,#FFFEFF, #FFFEFF, #FFFEFF)'
  },
  rootForm: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    marginTop: theme.spacing(3),
    width: '30ch',
  },
  textFieldName: {
    marginTop: theme.spacing(3),
    width: '50ch',
  },
  fundo:
  {
    background: '#f7f6f4',
    height: '100vh'
  }
}));

export default function CadastrarPlantas() {
  const classes = useStyles();
  const navigate = useNavigate();

  const [ambientes, setAmbiente] = React.useState('');
  const [portes, setPortes] = React.useState('');
  const [solos, setSolos] = React.useState('');
  const [nome, setNome] = React.useState('');
  const [fruto, setFruto] = React.useState('');
  const [ambienteId, setAmbienteId] = React.useState('');
  const [porteId, setPorteId] = React.useState('');
  const [soloId, setSoloId] = React.useState('');

  const dispatch = useDispatch();

  useEffect(() => {

    async function getAmbiente() {
      const response = await getAmbientes();
      setAmbiente(response?.data.ambientes);
    }

    async function getPorte() {
      const response = await getPortes();
      setPortes(response?.data.portes);
    }

    async function getSolo() {
      const response = await getSolos();
      setSolos(response?.data.solos);
    }
    
    getAmbiente();
    getPorte();
    getSolo();

  },[dispatch]);

  const handleChange = (event) => {
    setAmbienteId(event.target.value);
  };

  const handleChangePorte = (event) => {
    setPorteId(event.target.value);
  };

  const handleChangeSolo = (event) => {
    setSoloId(event.target.value);
  };

  const handleChangeFruto = (event) => {
    setFruto(event.target.value);
  };

  const handleChangeReturn = () => {
    navigate(plantas);
  }

  const handleChangeSalvar = () => {
    let dados = {nome, fruto, ambienteId, tipoSoloId: soloId, porteId };
    var camposRequeridos = ValidationAddPlanta(dados);

    if(camposRequeridos) return swal("Ocorreu um erro", `${camposRequeridos}`, "error");

    async function getResponse() {
      const res = await postPlantas(dados);

      if (res.status === 200) {
        swal(MensagemCadastroComSucesso('Planta'));
        navigate(plantas);
      }
      else{
        swal("Houve um erro", `${res.response.data.message}`, "error");
      }
    }

    getResponse();
  }

  return (
    <div className={classes.fundo}>
      <Titulo titulo = "Cadastro de Planta" imagem = {Logo}/>
      <HeaderSider />
      <Card className={classes.root} variant="outlined" >
        <CardContent>
          <div>
            <TextField className={clsx(classes.margin, classes.textFieldName)}
              id="margin-none"
              label="Nome Popular da Planta *"
              placeholder="Informe o nome da planta"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

            <FormControl className={clsx(classes.margin, classes.textField)}>
              <InputLabel id="demo-simple-select-label">Fruto *</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="margin-none"
                value={fruto}
                onChange={handleChangeFruto}
              >
                <MenuItem value={'sim'}>Sim</MenuItem>
                <MenuItem value={'nao'}>Não</MenuItem>
              </Select>
            </FormControl >
          </div>

          <div>
            <FormControl className={clsx(classes.margin, classes.textField)}>
              <InputLabel id="demo-simple-select-label">Ambiente *</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="margin-none"
                value={ambienteId}
                onChange={handleChange}
              >                
               {ambientes.length > 0 && ambientes.map(ambiente => (
                  <MenuItem value={ambiente?.ambienteId}>{ambiente?.tipoAmbiente}</MenuItem>
                ))};
          
              </Select>
            </FormControl >

            <FormControl className={clsx(classes.margin, classes.textField)}>
              <InputLabel id="demo-simple-select-label">Porte da Planta *</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="margin-none"
                value={porteId}
                onChange={handleChangePorte}
              >
                {portes.length > 0 && portes.map(porte => (
                  <MenuItem value={porte?.porteId}>{porte?.descricao}</MenuItem>
                ))};
        
              </Select>
            </FormControl >

            <FormControl className={clsx(classes.margin, classes.textField)}>
              <InputLabel id="demo-simple-select-label">Solo *</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="margin-none"
                value={soloId}
                onChange={handleChangeSolo}
              >
                 {solos.length > 0 && solos.map(solo => (
                  <MenuItem value={solo?.soloId}>{solo?.tipoSolo}</MenuItem>
                ))};
               
              </Select>
            </FormControl >
          </div>
        </CardContent>

        <CardActions>
          <Button size="small" color="primary" onClick={handleChangeSalvar}>
            Salvar
          </Button>

          <Button size="small" color="primary" onClick={handleChangeReturn}>
            Cancelar
          </Button>

          <Button size="small" color="primary" onClick={handleChangeReturn}>
            Voltar
          </Button>
        </CardActions>
      </Card>
      <Footer />
    </div>
  );
}
