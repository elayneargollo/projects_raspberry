import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
    titulo:
    {
        marginLeft: "220px",
        marginRight: "auto",
        marginTop: 100,
        display: 'flex'
    }
}));

export default function Titulo({ titulo, imagem }) {
    const classes = useStyles();

    return (
        <CardContent>
            <div className={classes.titulo}>
                <Typography variant="h4" component="h2" color='primary' style={{ fontWeight: 'bold' }} >{titulo}</Typography>
                <img src={imagem} alt='logotipo do sistema' style={{ marginLeft: '15px', height: '45px' }} />
            </div>
        </CardContent>
    );
}
