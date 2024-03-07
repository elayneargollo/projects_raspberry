import { ERRO_LOGIN_REQUIRED } from './resource';

export function ValidationLoginFields(username, password)
{
  if(!username || !password) return ERRO_LOGIN_REQUIRED;
}

export function ValidationRequired(nomeCampo, email)
{
  if(!email) return `Campo ${nomeCampo} é obrigatório`;
}

export function ValidationRequiredCadastro(dados)
{
  if(!dados.nome) return `Campo Nome é obrigatório`;
  if(!dados.sobrenome) return `Campo Sobrenome é obrigatório`;
  if(!dados.email) return `Campo E-mail é obrigatório`;
  if(!dados.password) return `Campo Senha é obrigatório`;
}

export function ValidationAddPlanta(dados)
{
  if(!dados.ambienteId) return `Campo Ambiente é obrigatório`;
  if(!dados.porteId) return `Campo Porte da Planta é obrigatório`;
  if(!dados.tipoSoloId) return `Campo Solo é obrigatório`;
  if(!dados.fruto) return `Campo Fruto é obrigatório`;
  if(!dados.nome) return `Campo Nome Popular da Planta é obrigatório`;
}

export function ValidationAddSolenoide(dados)
{
  if(!dados.tag) return `Campo Tag é obrigatório`;
  if(!dados.status) return `Campo Status é obrigatório`;
  if(!dados.quantidadeVias) return `Campo Quantidade de vias é obrigatório`;
  if(!dados.voltagem) return `Campo Tensão é obrigatório`;
  if(!dados.corpo) return `Campo Corpo é obrigatório`;
}

export function ValidationAddSensor(dados)
{
  if(!dados.tag) return `Campo Tag é obrigatório`;
  if(!dados.status) return `Campo Status é obrigatório`;
  if(!dados.plantaId) return `É necessário escolher ao menos uma planta`;
  if(!dados.solenoideId) return `É necessário associar ao menos a uma solenóide`;
  if(!dados.nome) return `Campo Nome é obrigatório`;
}