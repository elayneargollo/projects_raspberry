import { ALERTA } from '../action/actionType';

const INITIAL_STATE = {
    alert: false
};

export default function AlertaReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ALERTA.EXIBIR_ALERTA:
            console.log(action.payload)
            return {
                ...state,
                alert: action.payload
            };
        default:
            return state;
    }
};