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
                            <TextField disabled id="standard-required" label="Material do corpo" defaultValue={model?.corpo} />
                            <TextField disabled id="standard-disabled" label="Data da última leitura" defaultValue={convertDateTimePtBr(model?.dataLeitura)} />
                            <TextField disabled id="standard-disabled" label="Quantidade de vias" defaultValue={model?.quantidadeVias} />
                            <TextField disabled id="standard-disabled" label="Status atual" defaultValue={model?.status} />
                            <TextField disabled id="standard-disabled" label="Tag de identificação" defaultValue={model?.tag} />
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