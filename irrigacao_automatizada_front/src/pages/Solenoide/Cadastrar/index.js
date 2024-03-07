import React from 'react';
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
import { solenoide } from '../../../routes/paths';
import clsx from 'clsx';
import HeaderSider from '../../../components/HeaderSider/index';
import Footer from '../../../components/Footer/index';
import Logo from "../../../assets/img/valvula.png";
import Titulo from "../../../components/Titulo/index";
import { ValidationAddSolenoide } from "../../../utils/validations.js";
import { MensagemCadastroComSucesso } from "../../../utils/resource";
import swal from 'sweetalert';
import { postSolenoide } from '../../../services/api/solenoide';


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
    width: '40ch',
  },
  fundo:
  {
    background: '#f7f6f4',
    height: '100vh'
  }
}));

export default function CadastrarSolenoides() {
  const classes = useStyles();
  const navigate = useNavigate();

  const [tag, setTag] = React.useState('');
  const [status, setStatus] = React.useState('');
  const [voltagem, setTensao] = React.useState('');
  const [quantidadeVias, setQuantidadeVias] = React.useState('');
  const [corpo, setCorpo] = React.useState('');

  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };

  const handleChangeVias = (event) => {
    setQuantidadeVias(event.target.value);
  };

  const handleChangeCorpo = (event) => {
    setCorpo(event.target.value);
  };

  const handleChangeTensao = (event) => {
    setTensao(event.target.value);
  };

  const handleChangeReturn = () => {
    navigate(solenoide);
  }

  const handleChangeSalvar = () => {
    let dados = { tag, status, quantidadeVias, voltagem, corpo };
    var camposRequeridos = ValidationAddSolenoide(dados);

    if(camposRequeridos) return swal("Ocorreu um erro", `${camposRequeridos}`, "error");

    async function getResponse() {
      const res = await postSolenoide(dados);

      if (res.status === 201) {
        swal(MensagemCadastroComSucesso('Solenóide'));
        navigate(solenoide);
      }
      else{
        swal("Houve um erro", `${res.response.data.message}`, "error");
      }
    }

    getResponse();
  }

  return (
    <div className={classes.fundo}>
      <Titulo titulo = "Cadastro de Solenóide" imagem = {Logo}/>
      <HeaderSider />
      <Card className={classes.root} variant="outlined" >
        <CardContent>
          <div>
            <TextField className={clsx(classes.margin, classes.textField)}
              id="margin-none"
              label="Tag *"
              placeholder="Nome único"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
            />

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

           </div>  
 
            <div>
            <FormControl className={clsx(classes.margin, classes.textField)}>
              <InputLabel id="demo-simple-select-label">Corpo *</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="margin-none"
                value={corpo}
                onChange={handleChangeCorpo}
              >
                <MenuItem value={'LATAO'}>LATÃO</MenuItem>
                <MenuItem value={'INOX'}>AÇO INOX</MenuItem>
                <MenuItem value={'BRONZE'}>BRONZE</MenuItem>
                <MenuItem value={'PLASTICO'}>PLÁSTICO</MenuItem>
              </Select>
            </FormControl >

            <FormControl className={clsx(classes.margin, classes.textField)}>
              <InputLabel id="demo-simple-select-label">Quantidade de Vias *</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="margin-none"
                value={quantidadeVias}
                onChange={handleChangeVias}
              >
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
              </Select>
            </FormControl >
            </div>  
            <div>
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

