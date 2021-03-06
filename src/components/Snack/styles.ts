import { makeStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
export const useStyles = makeStyles((theme) => ({
  close: {
    padding: theme.spacing(1 / 2),
  },
  success: {
    backgroundColor: green[600],
    flexDirection: 'row',
  },
  error: {
    backgroundColor: theme.palette.error.dark,
    flexDirection: 'row',
  },
  info: {
    backgroundColor: theme.palette.primary.dark,
    flexDirection: 'row',
  },
  warning: {
    backgroundColor: amber[700],
    flexDirection: 'row',
  },
  leftIcon: {
    fontSize: 20,
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  rightIcon: {
    fontSize: 20,
    opacity: 0.9,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
}));
