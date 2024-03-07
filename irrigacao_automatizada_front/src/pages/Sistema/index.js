import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import HeaderSider from '../../components/HeaderSider/index';
import Footer from '../../components/Footer/index';
import Titulo from "../../components/Titulo/index";
import Image from "../../assets/img/system.png";
import Esquema from "../../assets/img/esquema.png";
import EsquemaEletrico from "../../assets/img/esquemaEletrico.png";
import Sensor from "../../assets/img/sensor.png";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: '80%',
    marginTop: 25,
    backgroundImage: 'linear-gradient(#99C2B9,#FFFEFF,#FFFEFF, #FFFEFF, #FFFEFF)'
  },
  rootAcordeao: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  fundo :
  {
    background: '#f7f6f4',
    height: '100vh'
  }
}));

export default function Sistema() {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.fundo}>
      <Titulo titulo = "Sistema" imagem={Image}/>
      <HeaderSider />
      <Card className={classes.root} variant="outlined">
        <CardContent>       
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{ marginBottom: '20px'}} >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
            <Typography variant="h6" style={{ color: '#338573' }}>Informação Geral</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <List>
                  <ListItemText primary="Alimentação da solenóide: 110V" />
                  <ListItemText primary="Alimentação do raspberry: 5V" />
                  <ListItemText primary="Alimentação do sensor umidade: 3,3-5v" />
                  <ListItemText primary="Alimentação módulo Relé: 5v" />
                  <ListItemText primary="Alimentação módulo ADS1115: 2 à 5.5VDC" />
                </List>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} style={{ marginBottom: '20px'}} >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
            <Typography variant="h6" style={{ color: '#338573' }}>Equipamentos</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              <List>
                <ListItemText primary="Bicos Para Torneira Jardim 1/2 Ou 3/4 Tramontina" />
                <ListItemText primary="Mangueira Para Filtro Electrolux Pa11b Pe11x Pa21g 1/4 2mts" />
                <ListItemText primary="Estaca Jardim Vaso Pomar Gotejamento Regulável" />
                <ListItemText primary="Sensor de Umidade do Solo Higrômetro" />
                <ListItemText primary="Bico De Torneira - Saída Microtubo 1/4 Ou 3/8 - Irrigação" />
                <ListItemText primary="Derivação Em Y + 3 Engates Rápidos" />
                <ListItemText primary="Conversor Analógico Digital 4 canais ADS1115" />
                <ListItemText primary="Módulo Relé 4 Canais" />
              </List>
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} style={{ marginBottom: '20px'}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
            <Typography variant="h6" style={{ color: '#338573' }}>Esquemas</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <img src={Esquema}/>
              <img src={EsquemaEletrico}/>
              <img src={Sensor}/>
            </AccordionDetails>
          </Accordion>
        </CardContent>
      </Card>
      <Footer/>
    </div>
  );
}
