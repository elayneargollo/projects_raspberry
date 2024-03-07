import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { DataGrid } from '@mui/x-data-grid';
import AddIcon from '@material-ui/icons/Add';
import { useNavigate } from 'react-router-dom';
import { cadastrarSensores } from '../../routes/paths';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Tooltip from '@material-ui/core/Tooltip';
import HeaderSider from '../../components/HeaderSider/index';
import Footer from '../../components/Footer/index';
import './sytle.css';
import Logo from "../../assets/img/sensorIcons.png";
import Titulo from "../../components/Titulo/index";
import { getSensores } from '../../services/api/sensor';
import { useDispatch } from 'react-redux';
import { convertDateTimePtBr } from '../../utils/format';


const columns = [
  {  field: "id", headerName: "ID", width: 80 },
  {  field: "nome", headerName: "Nome", width: 300, editable: false  },
  {  field: "status", headerName: "Status", type: 'boolean', width: 250, editable: false  },
  {  field: "calibrado", headerName: "Calibrado", type: 'boolean', width: 250, editable: false  },
  {  field: "tag", headerName: "Tag do Sensor", width: 300 },
  {  field: "solenoide", headerName: "Tag da Solenóide", width: 250 },
  {  field: "dtLeitura", headerName: "Data de leitura", width: 250 },
  { field: "voltagem", headerName: "Tensão", width: 250, editable: false }
];

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: '80%',
    marginTop: 25,
    backgroundImage: 'linear-gradient(#99C2B9,#FFFEFF,#FFFEFF, #FFFEFF, #FFFEFF)'
  },
  tooltip: {
  backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
        fontSize: 11,
  },
  fundo:
  {
    background: '#f7f6f4',
    height: '100vh',
  },
  titulo :
  {
    marginLeft: "220px",
    marginRight: "auto",
    marginTop: 100,
    display: 'flex'
  }
}));

export default function Sensores() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [sensores, setSensores] = useState({});

  const handleChangeAdd = () => navigate(cadastrarSensores);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getItems() {
      const data = await getSensores();
      setSensores(data?.data?.sensores);
      console.log(data);
    }
    getItems();
  },[dispatch]);

  const montarDados = () => {
    if(sensores.length > 0)
    {
      return sensores?.map(sensor => {
        return {
          id: sensor?.sensorId,
          nome: sensor?.nome,
          status: sensor?.status,
          tag: sensor?.tag,
          solenoide: sensor?.solenoide?.tag,
          dtLeitura: convertDateTimePtBr(sensor?.dataLeitura),
          calibrado: sensor?.valorCalibracaoMaximo == null ? false : true,
          voltagem: sensor?.voltagem + 'V'
        }
      });
    }
  }

  return (
    <div className={classes.fundo}>
      <Titulo titulo = "Sensor" imagem = {Logo}/>

      <HeaderSider />
      <Card className={classes.root} variant="outlined" style={{ height: 650, width: '100%' }} >
        <CardActions>
          <Tooltip title="Adicionar uma nova sensor ao sistema" arrow>
            <Button style={{ fontWeight: 'bold', fontSize: "20px"}}
              variant="outlined"
              onClick={handleChangeAdd}
              startIcon={<AddIcon />}
              color='primary'
            >
              Cadastrar Sensor
            </Button>
          </Tooltip>
        </CardActions>

        <div style={{ height: 450, marginLeft: "10px", marginRight: "10px", paddingTop: "50px"}}>
          <DataGrid
            columns={columns}
            rows={montarDados()}
            pageSize={5}
            rowsPerPageOptions={[5]}
          />       
        </div>
      </Card>
      <Footer/>
    </div>
  );
}
