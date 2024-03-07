import { createMuiTheme } from '@material-ui/core';
import { ptBR } from '@material-ui/core/locale';

export default createMuiTheme(
  {
    palette: {
      primary: {
        main: '#338573',
      },
      secondary: {
        main: '#A40707',
      },
    },
    typography: {
      fontFamily: 'Roboto',
      button: {
        textTransform: 'none',
      },
      select: {
        text: {
          color: ' #636363',
        },
      },
    },
    overrides: {
      MuiTooltip: {
        tooltip: {
          fontSize: '13px',
        },
      },
      MuiIconButton: {
        root: {
          padding: 4,
        },
      },
    },
    props: {
      MuiSelect: {
        MenuProps: {
          getContentAnchorEl: null,
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
          },
        },
      },
    },
  },
  ptBR
);
