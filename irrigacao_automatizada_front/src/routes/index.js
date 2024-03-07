import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import CadastroPlanta from '../pages/Plantas/Cadastrar/index';
import CadastroSolenoide from '../pages/Solenoide/Cadastrar/index';
import CadastroSensor from '../pages/Sensor/Cadastrar/index';
import CadastroRaspberry from '../pages/Configuracao/Cadastrar/index';
import Home from '../pages/Root/index';
import Login from '../pages/Login/index';
import CadastrarUsuario from '../pages/Cadastro/index';
import RecuperarConta from '../pages/RecuperaLogin/index';
import Sobre from '../pages/About/index';
import Sistema from '../pages/Sistema/index';
import Configuracao from '../pages/Configuracao/index';
import Monitoramento from '../pages/Monitoramento/index';
import Plantas from '../pages/Plantas/index';
import Sensor from '../pages/Sensor/index';
import Solenoide from '../pages/Solenoide/index';
import Alert from '../components/Alert/index';
import PrivateRoute from './privateRoute';

export const paths = require('./paths');

export default function Rotas() {
  return (
    <BrowserRouter>
      <Alert/>
      <Routes>
        { 
        <Route exact path={paths.loginSistema} element={<Login/>} /> }

        <Route exact path={paths.cadastrarNoSistema} element={<CadastrarUsuario/>} />
        <Route exact path={paths.recuperarConta} element={<RecuperarConta/>} />
        <Route exact path={paths.home} element={<Home/>} />
  
        <Route exact path={paths.about}  element={<PrivateRoute/>}>
          <Route exact path={paths.about}  element={<Sobre/>}/>
        </Route>

        <Route exact path={paths.monitoramento}  element={<PrivateRoute/>}>
          <Route exact path={paths.monitoramento}  element={<Monitoramento/>}/>
        </Route>

        <Route exact path={paths.sensor}  element={<PrivateRoute/>}>
          <Route exact path={paths.sensor}  element={<Sensor/>}/>
        </Route>

        <Route exact path={paths.solenoide}  element={<PrivateRoute/>}>
          <Route exact path={paths.solenoide}  element={<Solenoide/>}/>
        </Route>

        <Route exact path={paths.sistema}  element={<PrivateRoute/>}>
          <Route exact path={paths.sistema}  element={<Sistema/>}/>
        </Route>

        <Route exact path={paths.configuracao}  element={<PrivateRoute/>}>
          <Route exact path={paths.configuracao}  element={<Configuracao/>}/>
        </Route>

        <Route exact path={paths.plantas}  element={<PrivateRoute/>}>
          <Route exact path={paths.plantas}  element={<Plantas/>}/>
        </Route>

        <Route exact path={paths.cadastrarRaspberry}  element={<PrivateRoute/>}>
          <Route exact path={paths.cadastrarRaspberry}  element={<CadastroRaspberry/>}/>
        </Route>

        <Route exact path={paths.cadastrarPlantas}  element={<PrivateRoute/>}>
          <Route exact path={paths.cadastrarPlantas}  element={<CadastroPlanta/>}/>
        </Route>

        <Route exact path={paths.cadastrarSensores}  element={<PrivateRoute/>}>
          <Route exact path={paths.cadastrarSensores}  element={<CadastroSensor/>}/>
        </Route>

        <Route exact path={paths.cadastrarSolenoide}  element={<PrivateRoute/>}>
          <Route exact path={paths.cadastrarSolenoide}  element={<CadastroSolenoide/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}