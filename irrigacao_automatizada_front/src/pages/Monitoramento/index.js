import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { DataGrid } from '@mui/x-data-grid';
import Card from '@material-ui/core/Card';
import HeaderSider from '../../components/HeaderSider/index';
import Footer from '../../components/Footer/index';
import './sytle.css';
import Titulo from "../../components/Titulo/index";
import { getSensores, getByIdSensores } from '../../services/api/sensor';
import { useDispatch } from 'react-redux';
import Image from "../../assets/img/analytics.png";
import { convertDateTimePtBr } from '../../utils/format';
import IconButton from '@material-ui/core/IconButton';
import DetailsIcon from '@material-ui/icons/Details';
import swal from 'sweetalert';
import Modal from '../../components/Modal/monitoramento';

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
  titulo:
  {
    marginLeft: "220px",
    marginRight: "auto",
    marginTop: 100,
    display: 'flex'
  }
}));

export default function Plantas() {
  const classes = useStyles();
  const [sensores, setSensores] = useState({});
  const [monitora, setMonitorar] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const columns = [
    { field: "id", headerName: "ID", width: 80 },
    { field: "nome", headerName: "Planta", width: 300, editable: false },
    { field: "gotejamento", headerName: "Gotejamento", type: 'boolean', width: 200, editable: false },
    { field: "irrigada", headerName: "Irrigada", type: 'boolean', width: 200 },
    { field: "solenoide", headerName: "Solenóide", width: 200 },
    { field: "sensor", headerName: "Sensor", width: 200 },
    { field: "status", headerName: "Status", width: 150 },
    { field: "dtleitura", headerName: "Data Leitura", width: 200 },
    {
      field: ' Detalhar', headerName: 'Detalhar', width: 250,
      renderCell: (params) => (
        <strong>
          {params.value}
          <IconButton
            aria-label="Detalhar"
            title="Detalhar planta"
            onClick={() => handleChangeDetalhar(params)}
          >
            <DetailsIcon color="primary" />
          </IconButton>
        </strong>
      ),
    }
  ];

  const handleChangeDetalhar = (params) => {
    console.log(`Detalhar => ${params.id}`);

    async function detalhar() {
      const res = await getByIdSensores(params.id);
     

      if (res.status === 200) {
        setIsOpen(true);
        setMonitorar(res.data);
      }
      else {
        swal("Houve um erro", `${res.response.data.message}`, "error");
      }
    }

    detalhar();
  }

  useEffect(() => {
    async function getItems() {
      const data = await getSensores();
      setSensores(data?.data?.sensores);
    }
    getItems();
  }, [dispatch]);

  const montarDados = () => {

    console.log(sensores);
    console.log(sensores.length);

    if (sensores?.length > 0)
      return sensores?.map(sensor => {
        return {
          id: sensor?.sensorId,
          nome: sensor?.planta.nome,
          gotejamento: sensor?.solenoide?.status === "ABERTA" ? false : true,
          irrigada: sensor?.solenoide?.status === "ABERTA" ? false : true,
          solenoide: sensor?.solenoide?.tag,
          sensor: sensor?.tag,
          status: sensor?.solenoide?.status,
          dtleitura: convertDateTimePtBr(sensor?.dataLeitura),
        }
      });
  }

  return (
    <div>
      {isOpen && <Modal model={monitora} setIsOpen={setIsOpen} />}
    <div className={classes.fundo}>
      <Titulo titulo = "Monitoramento" imagem={Image}/>

      <HeaderSider />
      <Card className={classes.root} variant="outlined" style={{ height: 650, width: '100%' }} >
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
    </div>
  );
}
