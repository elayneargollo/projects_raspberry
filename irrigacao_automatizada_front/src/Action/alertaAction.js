import { ALERTA } from './actionType';

const exibirAlerta = (props) => dispatch => {
    console.log('$ Action')
    dispatch({
        type: ALERTA.EXIBIR_ALERTA,
        payload: props
    });
}

export default {
    exibirAlerta,
}