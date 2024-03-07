import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import image from '../../assets/img/plantas.jpeg';
import imageRega from '../../assets/img/rega.jpeg';
import imageAutomatizacao from '../../assets/img/automatizacao.jpeg';
import imagePlanta from '../../assets/img/plantas-Patrycia.jpeg';
import jardim from '../../assets/img/jardim.jpeg';
import imageIrrigacao from '../../assets/img/irrigacao.jpeg';
import imageIrrigacaoAspersao from '../../assets/img/irrigacao-cpt.jpeg';
import imageGotejamento from '../../assets/img/gotejamento.jpeg';
import './Sytle.css';
import Typography from '@material-ui/core/Typography';
import HeaderSider from '../../components/HeaderSider/index';
import Footer from '../../components/Footer/index';

const useStyles = makeStyles((theme) => ({
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  rootText: {

      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 1000,
      marginTop: 25
  },
  root: {
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 1000,
    marginTop: 120
  },
  fundo :
  {
    background: '#f7f6f4',
    height: '100vh'
  }
}));


const plantas = [
  {
    img: imageAutomatizacao,
    author: 'author',
  },
  {
    img: imagePlanta,
    author: 'author',
  },
  {
    img: image,
    author: 'author',
  },
  {
    img: jardim,
    author: 'author',
  }
];

const itemData = [
  {
    img: imageIrrigacao,
    author: 'author',
  },
  {
    img: imageRega,
    author: 'author',
  },
  {
    img: imageIrrigacaoAspersao,
    author: 'author',
  },
  {
    img: imageGotejamento,
    author: 'author',
  }
];


const planta =
  ' As plantas tem defesas tanto a falta de água quanto a água em excesso. Na seca, elas fecham as folhas ou acabam  criando espinhos, já quando são regadas demais, elas não '+
  'conseguem reverter a ação de absorver a água dificultando a oxigenação das raizes, apoderecendo-as. Esse projeto propõe uma solução automatizada para plantas domésticas ' +
  'utilizando a plataforma Raspberry Pi juntamente com sensores e atuadores que sejam capazes não somente de avaliar a quantidade de água suficiente conforme a especificação de cada planta '+
  'cadastrada no sistema para manter seu solo úmido e preservar a qualidade e vida da mesma como também reduzir falhas humanas.'

const irrigacao =
  'Este sistema utiliza a técnica de irrigação por gotejamento.'+
  'Essa é uma técnica eficaz e prática de molhar as plantas com a quantidade adequada de água por meio de tubos que ficam próximos às raízes, diferente de outros métodos, em que a irrigação é feita por toda a superfície simultaneamente, deixando as plantas úmidas e causando o escoamento.' +
  'A água é aplicada de forma pontual, por meio das gotas, fornecendo a quantidade de água adequada que as raízes de cada planta necessitam. O sistema funciona da seguinte maneira: a água é distribuída de forma lenta, por meio de canos e mangueiras, contendo emissores ou gotejadores, que se estendem ao longo das linhas das plantas. Assim, esses emissores distribuem água uniformemente em toda a plantação.'
 

export default function SingleLineImageList() {
  const classes = useStyles();

  return (
    <div className={classes.fundo}>
      <HeaderSider/>
      <div className={classes.root}>
        <Typography variant="h4" paragraph color='primary' style={{ fontWeight: 'bold' }}>Plantas </Typography>
        <Typography variant="h7" paragraph>{planta} </Typography>

        <div className={classes.rootText}>
          <ImageList cols={4}>
            {plantas.map((item) => (
              <ImageListItem key={item.img}>
                <img src={item.img} alt={item.title} />
                <ImageListItemBar
                  title={item.title}
                  classes={{
                    root: classes.titleBar,
                    title: classes.title,
                  }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>

        <Typography variant="h4" paragraph color='primary' style={{ fontWeight: 'bold', paddingTop: '20px' }}>Irrigação </Typography>
        <Typography variant="h7" paragraph>{irrigacao} </Typography>
        
        <div className={classes.rootText}>
          <ImageList cols={4}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img src={item.img} alt={item.title} />
                <ImageListItemBar
                  title={item.title}
                  classes={{
                    root: classes.titleBar,
                    title: classes.title,
                  }}
                />
              </ImageListItem>
            ))}
          </ImageList>
      </div>
      </div>
      <Footer/>
    </div>
  );
}
