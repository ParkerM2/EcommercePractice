import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
    },
  media: {
        height: 0,
        paddingTop: '56%',// 16:9
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
  },
    heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  Button: {
     '& > *': {
      margin: theme.spacing(1),
      justifyContent: "center",
    },
   }
}));