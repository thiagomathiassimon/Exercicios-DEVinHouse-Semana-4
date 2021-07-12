import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    position: "sticky",
    bottom: theme.spacing(2),
    marginTop: theme.spacing(-4),
  },
  button: {
    borderRadius: "50%",
    height: "70px",
    width: "70px",
    margin: theme.spacing(1),
    marginRight: theme.spacing(15),
  },
  add: {
    fontSize: 60,
  },
  transitions: {
    height: "70px",
    width: "70px",
    transitionDelay: theme.transitions.duration.leavingScreen,
  },
}));
