import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import HeaderSider from '../../components/HeaderSider/index';
import Footer from '../../components/Footer/index';
import Titulo from "../../components/Titulo/index";
import Image from "../../assets/img/sobre.png";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: '80%',
    marginTop: 25,
    backgroundImage: 'linear-gradient(#99C2B9,#FFFEFF,#FFFEFF, #FFFEFF, #FFFEFF)'
  },
  fundo :
  {
    background: '#f7f6f4',
    height: '100vh'
  }
}));

const introducao =
  'Na irrigação em geral,a aplicação de água de forma inadequada, seja em excesso ou em déficit, acarreta sérios prejuízos para a planta.'+
  'Quando em excesso, além do desperdício de água, ocorre também a saturação do solo, a lixiviação dos nutrientes e o favorecimento ao aparecimento de doenças.' +
  'Por outro lado, quando a irrigação é praticada em déficit, há também o disperdício de dinheiro e em casos mais agravantes, a morte da planta.' +
  'O manejo ou gerencimento da irrigação tem, então, o objetivo de promover o uso eficiente da água, melhorar a qualidade da planta, diminuir a incidência de pragas e entre mais.'+
  'Na irrigação doméstica, o equilíbrio da quantidade de água para irrigação é quase nunca parametrizado de acordo com as caracaterísticas do solo e clima.'+
  'O solo é um fator considerável, pois o mesmo, a depender de tamanho e natureza das partículas minerais, possuem uma característica própria de armazenamento de água.'+
  'Portanto, a reposição de água ao solo através da irrigação, na quantidade e no momento oportuno, é decisiva para o sucesso da horticultura e exige conhecimento específico e monitoramento de umidade do mesmo.'+
  'No contexto do sistema de irrigação de plantas e pequenos jardins, uma boa solução é aquela em que há um gerenciamento da irrigação, uma escolha adequada de seus métodos de acordo com as características da planta e da umidade do solo.'

const solucao = 
  'A proposta deste software é proporcionar um fluxo automático de água de acordo com as características do solo associado ao tipo determinado da planta cadastrada no sistema.'+
  'Para isto, por meio de requisições HTTP, protocolo que define regras para a comunicação entre cliente e o servidor, a aplicação desenvolvida em React realiza uma requisição para a API (Application Programming Interface), construído em Python e micro-framework Flask'+
  'cuja característica principal é manter o núcleo da aplicação simples, porém, extensível. Este micro-framework  irá devolver uma resposta a aplicação do cliente.'+
  'A API é responsável por implementar as regras de negócio, garantir os requisitos mínimos de funcionamento, persistir as informações no banco de dados e se comunicar por HTTP com o Raspberry Pi 4'+
  ', o qual, é responsável pela leitura, gerenciamento e monitoramento de variáveis de campo como sensores e válvulas.'+
  'O estilo de projeto de arquitetura utilizado neste projeto é o REST (Representational state transfer), que enfatiza a escalabilidade das integrações entre componentes e integrações de forma a separar'+
  'a lógica dos resucros da API. Os componentes são reusáveis para serem facilmente administrados através de requisições HTTP sem exigir um protocolo ou padrão específíco.'

export default function Sobre() {
  const classes = useStyles();

  return (
    <div className={classes.fundo}>
      <Titulo titulo = "Sobre" imagem={Image}/>
      <HeaderSider/>
      <Card className={classes.root} variant="outlined" >
        <CardContent>
          <Typography variant="h7" paragraph>{introducao} </Typography>
          <Typography variant="h7" paragraph>{solucao} </Typography>
        </CardContent>
      </Card>
      <Footer/>
    </div>
  );
}
