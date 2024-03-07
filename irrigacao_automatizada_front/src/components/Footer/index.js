import React from 'react';
import useStyles from './sytle';
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Container maxWidth="md">
          <Toolbar>

            <ul>CONTATO
              <li className={classes.li}>
                <Typography variant="h8" className={classes.title}>
                  elayne.natalia@ifba.edu.br
                </Typography>
              </li>

              <li className={classes.li}>
                <Typography variant="h8" className={classes.title}>
                  Desenvolvido por Elayne Natália de Oliveira de Morais
                </Typography>
              </li>
            </ul>

            <ul>INFORMAÇÃO

              <li className={classes.li}>
                <Typography variant="h8" className={classes.title}>
                  Sistema de Irrigação de Plantas Automatizado
                </Typography>
              </li>

              <li className={classes.li}>
                <Typography variant="h8" className={classes.title}>
                  Orientador: Manoel Neto
                </Typography>
              </li>
            </ul>

          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}