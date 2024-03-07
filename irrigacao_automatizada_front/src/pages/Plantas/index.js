import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { DataGrid } from '@mui/x-data-grid';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { useNavigate } from 'react-router-dom';
import { cadastrarPlantas } from '../../routes/paths';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Tooltip from '@material-ui/core/Tooltip';
import HeaderSider from '../../components/HeaderSider/index';
import Modal from '../../components/Modal/index';
import Footer from '../../components/Footer/index';
import './sytle.css';
import Logo from "../../assets/img/folha.png";
import Titulo from "../../components/Titulo/index";
import { getPlantas, deleteByIdPlantas, getByIdPlantas } from '../../services/api/planta';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import DetailsIcon from '@material-ui/icons/Details';
import CircularProgress from '@material-ui/core/CircularProgress';

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
  const columns = [
    { field: "id", headerName: "ID", width: 80 },
    { field: "nome", headerName: "Nome Popular", width: 250, editable: false },
    { field: "ambiente", headerName: "Ambiente", width: 250, editable: false },
    { field: "tipoSolo", headerName: "Tipo de Solo", width: 300 },
    { field: "porte", headerName: "Porte", width: 250 },
    { field: "fruto", headerName: "Fruto", width: 250 },
    {
      field: 'Deletar', headerName: 'Deletar', width: 250,
      renderCell: (params) => (
        <strong>
          {params.value}
          <IconButton
            aria-label="Deletar"
            title="Deletar planta"
            onClick={() => handleChangeDelete(params)}
          >
            <DeleteIcon color="primary" />
          </IconButton>
        </strong>
      ),
    },
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
  
  const handleChangeDelete = (params) => {
    console.log(`Delete => ${params.id}`);
  
    async function deletarPlanta() {
      const res = await deleteByIdPlantas(params.id);
  
      if (res.status === 200) {
        swal(`${res.data.message}`);
      }
      else {
        swal("Houve um erro", `${res.response.data.message}`, "error");
      }
    }
  
    deletarPlanta();
  }
  
  const handleChangeDetalhar = (params) => {
    console.log(`Detalhar => ${params.id}`);
  
    async function deletarPlanta() {
      const res = await getByIdPlantas(params.id);
  
      if (res.status === 200) {
        setIsOpen(true);
        setPlanta(res.data);
      }
      else {
        swal("Houve um erro", `${res.response.data.message}`, "error");
      }
    }
  
    deletarPlanta();
  }

  const [planta, setPlanta] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();
  const navigate = useNavigate();
  const [plantas, setPlantas] = useState({});
  const [loading, setLoading] = useState(true);

  const handleChangeAdd = () => navigate(cadastrarPlantas);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getItems() {
      const data = await getPlantas();
      setPlantas(data?.data?.plantas);
      setLoading(false);
    }
    getItems();
  }, [dispatch]);

  const montarDados = () => {
    if (typeof plantas.length === "undefined")
      return;

    return plantas?.map(planta => {
      return {
        id: planta?.plantaId,
        nome: planta?.nome,
        ambiente: planta?.ambiente?.tipoAmbiente,
        tipoSolo: planta?.tipoSolo?.tipoSolo,
        porte: planta?.porte?.descricao,
        fruto: planta?.fruto
      }
    });
  }

  if (loading) {
    return (
      <div class="loading">
        <CircularProgress />
      </div>
    );
  } else {
    return (
      <div>
        {isOpen && <Modal model={planta} setIsOpen={setIsOpen} />}
      <div className={classes.fundo}>
        <Titulo titulo="Planta" imagem={Logo} />

        <HeaderSider />
        <Card className={classes.root} variant="outlined" style={{ height: 650, width: '100%' }} >
          <CardActions>
            <Tooltip title="Adicionar uma nova planta ao sistema" arrow>
              <Button style={{ fontWeight: 'bold', fontSize: "20px" }}
                variant="outlined"
                onClick={handleChangeAdd}
                startIcon={<AddIcon />}
                color='primary'
              >
                Cadastrar Planta
              </Button>
            </Tooltip>
          </CardActions>

          <div style={{ height: 450, marginLeft: "10px", marginRight: "10px", paddingTop: "50px" }}>
            <DataGrid
              columns={columns}
              rows={montarDados()}
              pageSize={5}
              rowsPerPageOptions={[5]}
            />
          </div>
        </Card>
        <Footer />
      </div>
      </div>
    );
  }
}
