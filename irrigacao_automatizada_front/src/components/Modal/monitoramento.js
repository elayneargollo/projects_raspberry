import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { convertDateTimePtBr } from '../../utils/format';

const useStyles = makeStyles((theme) => ({
    root: {
        height: 300,
        flexGrow: 1,
        minWidth: 300,
        transform: 'translateZ(0)',
        '@media all and (-ms-high-contrast: none)': {
            display: 'none',
        },
    },
    modal: {
        display: 'flex',
        padding: theme.spacing(1),
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    formulario: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '30ch',
        },
    },
}));

export default function ServerModal({ model, setIsOpen }) {
    const classes = useStyles();
    const rootRef = React.useRef(null);

    function handleClose() {
        setIsOpen(false);
    }

    return (
        <div className="edit">
            <Modal
                disablePortal
                disableEnforceFocus
                disableAutoFocus
                open
                aria-labelledby="server-modal-title"
                aria-describedby="server-modal-description"
                className={classes.modal}
                container={() => rootRef.current}
            >
                <div className={classes.paper}>
                    <form className={classes.formulario} noValidate>
                        <Typography variant="h6" style={{ color: '#296a5c' }}>Detalhe</Typography>
                        <div>
                            <TextField disabled id="standard-disabled" label="Data da última leitura do sensor" defaultValue={convertDateTimePtBr(model?.dataLeitura)} />
                            <TextField disabled id="standard-required" label="Nome do sensor" defaultValue={model?.nome} />
                            <TextField disabled id="standard-disabled" label="Planta" defaultValue={model?.planta?.nome} />
                            <TextField disabled id="standard-disabled" label="Porte da planta" defaultValue={model?.planta?.porte?.descricao} />
                            <TextField disabled id="standard-disabled" label="Ambiente da planta" defaultValue={model?.planta?.ambiente?.tipoAmbiente} />
                            <TextField disabled id="standard-disabled" label="Solo da planta" defaultValue={model?.planta?.tipoSolo?.tipoSolo} />
                            <TextField disabled id="standard-disabled" label="Status da solenoide" defaultValue={model?.solenoide?.status} />
                            <TextField disabled id="standard-disabled" label="Tag da solenoide" defaultValue={model?.solenoide?.tag} />
                            <TextField disabled id="standard-disabled" label="Calibração máxima" defaultValue={model?.valorCalibracaoMaximo} />
                            <TextField disabled id="standard-disabled" label="Calibração mínima" defaultValue={model?.valorCalibracaoMinima} />
                            <TextField disabled id="standard-disabled" label="Tensão de operação" defaultValue={model?.voltagem} />
                        </div>
                    </form>
                    <div className='edit'
                    >
                        <Button className='editButton'
                            size="small"
                            variant="contained"
                            color="primary"
                            onClick={handleClose}>Fechar</Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}