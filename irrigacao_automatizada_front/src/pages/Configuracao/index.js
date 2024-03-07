import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { DataGrid } from '@mui/x-data-grid';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { useNavigate } from 'react-router-dom';
import { cadastrarRaspberry } from '../../routes/paths';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Tooltip from '@material-ui/core/Tooltip';
import HeaderSider from '../../components/HeaderSider/index';
import Footer from '../../components/Footer/index';
import Titulo from "../../components/Titulo/index";
import Image from "../../assets/img/system.png";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 150
  },
  {
    field: "modelo",
    headerName: "Modelo",
    width: 300,
    editable: false
  },
  {
    field: "marca",
    headerName: "Marca",
    width: 300,
    editable: false
  },
  {
    field: "ano",
    headerName: "Ano",
    width: 150
  },
  {
    field: "numeroPeca",
    headerName: "Número da peça",
    width: 250,
  },
  {
    field: 'Deletar',
    headerName: 'Deletar',
    width: 230,
    renderCell: (params) => (
      <strong>
        {params.value}
        <IconButton
          aria-label="Deletar"
          title="Deletar raspberry"
          onClick={() => handleChangeDelete(params)}
        >
          <DeleteIcon color="primary" />
        </IconButton>
      </strong>
    ),
  },
  {
    field: 'Editar',
    headerName: 'Editar',
    width: 150,
    renderCell: (params) => (
      <strong>
        <IconButton
          aria-label="Eidtar"
          title="Editar raspberry"
          onClick={() => handleChangeEdit(params)}
        >
          <EditIcon color="primary" />
        </IconButton>
      </strong>
    ),
  },
];

const handleChangeEdit = (params) => console.log(`Edite => ${params.id}`);

const handleChangeDelete = (params) => console.log(`Delete => ${params.id}`);

const rows = [
  { id: 1, modelo: "Raspberry", marca: "RASPBERRYPI3-MODB-1GB", ano: '2016', numeroPeca: '896-8665' },
  { id: 2, modelo: "Raspberry", marca: "RASPBERRYPI3-MODB-1GB", ano: '2017', numeroPeca: '896-8664' },
  { id: 3, modelo: "Raspberry", marca: "RASPBERRYPI3-MODB-1GB", ano: '2018', numeroPeca: '896-8663' },
  { id: 4, modelo: "Raspberry", marca: "RASPBERRYPI3-MODB-1GB", ano: '2019', numeroPeca: '896-8662' },
  { id: 5, modelo: "Raspberry", marca: "RASPBERRYPI3-MODB-1GB", ano: '2020', numeroPeca: '896-8661' }
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
  fundo :
  {
    background: '#f7f6f4',
    height: '100vh'
  }
}));

export default function MyApp() {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleChangeAdd = () => navigate(cadastrarRaspberry);

  return (
    <div className={classes.fundo}>
      <Titulo titulo = "Raspberry Pi" imagem={Image}/>
      <HeaderSider />
      <Card className={classes.root} variant="outlined" style={{ height: 650, width: '100%'}} >
        <CardActions>
          <Tooltip title="Adicionar um novo Raspberry Pi ao sistema" arrow>
            <Button style={{ fontWeight: 'bold', fontSize: "20px"}}
              variant="outlined"
              color="primary"
              onClick={handleChangeAdd}
              startIcon={<AddIcon />}
            >
              Cadastrar Raspberry
            </Button>
          </Tooltip>
        </CardActions>

        <div style={{ height: 450, marginLeft: "10px", marginRight: "10px" }}>
          <DataGrid
            rows={rows}
            columns={columns}
          />
        </div>

      </Card>
      <Footer/>
    </div>
  );
}
