import { Button, Grid, Zoom } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { useOpen } from "../../contexts";
import { useStyles } from "./AddButton.styles";

export const AddButton = () => {
  const classes = useStyles();
  const { open, onChangeOpenedState } = useOpen();

  const handleClick = () => {
    onChangeOpenedState();
  };
  return (
    <Grid container justifyContent="flex-end" className={classes.container}>
      <Button
        color="primary"
        size="medium"
        variant="text"
        className={classes.button}
        onClick={handleClick}
      >
        <Zoom
          in
          timeout={classes.transitions.transitionDelay}
          className={classes.transitions}
          unmountOnExit
        >
          <AddCircleIcon fontSize="large" className={classes.add} />
        </Zoom>
      </Button>
    </Grid>
  );
};
