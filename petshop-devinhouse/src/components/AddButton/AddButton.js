import { Button, Grid, Zoom } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { useState } from "react";
import { useStyles } from "./AddButton.styles";

export const AddButton = () => {
  const classes = useStyles();

  return (
    <Grid container justifyContent="flex-end" className={classes.container}>
      <Button
        color="primary"
        size="medium"
        variant="text"
        className={classes.button}
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
