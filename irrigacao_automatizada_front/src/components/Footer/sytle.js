import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
    title: {
      flexGrow: 1,
    },
    root: {
      position: 'fixed',
      left: 0,
      bottom: 0,
      width: '100%',
    },
    descriptionItem:
    {
      fontSize: 11,
      margin: 0,
      textAlign: 'right',
      lineHeight: 1.3,
    },
    li:
    {
       listStyleType: 'none'
    }
  }),
);