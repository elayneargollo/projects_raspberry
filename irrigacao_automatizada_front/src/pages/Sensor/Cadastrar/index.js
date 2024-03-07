import React, { useEffect }  from 'react';
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
import { sensor } from '../../../routes/paths';
import clsx from 'clsx';
import HeaderSider from '../../../components/HeaderSider/index';
import Footer from '../../../components/Footer/index';
import Logo from "../../../assets/img/sensorIcons.png";
import Titulo from "../../../components/Titulo/index";
import { ValidationAddSensor } from "../../../utils/validations.js";
import { MensagemCadastroComSucesso } from "../../../utils/resource";
import swal from 'sweetalert';
import { getSolenoides } from '../../../services/api/solenoide';
import { getPlantas } from '../../../services/api/planta';
import { postSensor } from '../../../services/api/sensor';
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
  textFieldDescricao: {
    marginTop: theme.spacing(3),
    width: '60ch',
  },
  textField: {
    marginTop: theme.spacing(3),
    width: '30ch',
  },
  fundo:
  {
    background: '#f7f6f4',
    height: '100vh'
  }
}));

export default function CadastrarSensores() {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [tag, setTag] = React.useState('');
  const [status, setStatus] = React.useState('');
  const [nome, setNome] = React.useState('');

  const [plantaId, setPlantaId] = React.useState('');
  const [plantas, setPlantas] = React.useState('');

  const [solenoideId, setSolenoideId] = React.useState('');
  const [solenoides, setSolenoides] = React.useState('');

  const [voltagem, setTensao] = React.useState('');

  const handleChangeTensao = (event) => {
    setTensao(event.target.value);
  };

  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };

  const handleChangeSolenoide = (event) => {
    setSolenoideId(event.target.value);
  };

  const handleChangePlanta = (event) => {
    setPlantaId(event.target.value);
  };

  const handleChangeReturn = () => {
    navigate(sensor);
  }

  useEffect(() => {

    async function getPlanta() {
      const response = await getPlantas();
      setPlantas(response?.data?.plantas);
    }

    async function getSolenoide() {
      const response = await getSolenoides();
      setSolenoides(response?.data?.solenoides);
    }
    
    getPlanta();
    getSolenoide();

  },[dispatch]);


  const handleChangeSalvar = () => {
    let dados = { tag, status, plantaId, solenoideId, nome, voltagem };
    var camposRequeridos = ValidationAddSensor(dados);

    if(camposRequeridos) return swal("Ocorreu um erro", `${camposRequeridos}`, "error");

    async function getResponse() {
      const res = await postSensor(dados);

      if (res.status === 200) {
        swal(MensagemCadastroComSucesso('Sensor'));
        navigate(sensor);
      }
      else{
        swal("Houve um erro", `${res.response.data.message}`, "error");
      }
    }

    getResponse();
  }

  return (
    <div className={classes.fundo}>
      <Titulo titulo = "Cadastro de Sensores" imagem = {Logo}/>
      <HeaderSider />
      <Card className={classes.root} variant="outlined" >
        <CardContent>
          <div>
            <TextField className={clsx(classes.margin, classes.textFieldDescricao)}
              id="margin-none"
              label="Tag *"
              placeholder="Identificador"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
            />
  
            <TextField className={clsx(classes.margin, classes.textFieldDescricao)}
              id="margin-none"
              label="Nome *"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

        <div>
        <FormControl className={clsx(classes.margin, classes.textField)}>
              <InputLabel id="demo-simple-select-label">Solenoide *</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="margin-none"
                value={solenoideId}
                onChange={handleChangeSolenoide}
              >
                {solenoides.length > 0 && solenoides.map(solenoide => (
                  <MenuItem value={solenoide?.solenoideId}>{solenoide?.tag}</MenuItem>
                ))};
              </Select>
            </FormControl >
            
            <FormControl className={clsx(classes.margin, classes.textField)}>
              <InputLabel id="demo-simple-select-label">Status *</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="margin-none"
                value={status}
                onChange={handleChangeStatus}
              >
                <MenuItem value={'ABERTO'}>ABERTO</MenuItem>
                <MenuItem value={'FECHADO'}>FECHADO </MenuItem>
              </Select>
            </FormControl >

            <FormControl className={clsx(classes.margin, classes.textField)}>
              <InputLabel id="demo-simple-select-label">Tensão *</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="margin-none"
                value={voltagem}
                onChange={handleChangeTensao}
              >
                <MenuItem value={5}>5V</MenuItem>
                <MenuItem value={12}>12V</MenuItem>
                <MenuItem value={24}>24V</MenuItem>
                <MenuItem value={110}>110V</MenuItem>
                <MenuItem value={220}>220v</MenuItem>
              </Select>
            </FormControl >

          <FormControl className={clsx(classes.margin, classes.textField)}>
              <InputLabel id="demo-simple-select-label">Planta *</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="margin-none"
                value={plantaId}
                onChange={handleChangePlanta}
              >
                {plantas.length > 0 && plantas.map(planta => (
                  <MenuItem value={planta?.plantaId}>{planta?.nome}</MenuItem>
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

