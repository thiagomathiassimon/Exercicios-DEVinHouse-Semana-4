import { Snackbar } from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';


const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

export const Toast = (props) => {

  const { open, handleClose, toastMessage, toastSeverity } = props;

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} data-testid="toast">
      <Alert onClose={handleClose} severity={toastSeverity}>
        {toastMessage}
      </Alert>
    </Snackbar>
  );
};
