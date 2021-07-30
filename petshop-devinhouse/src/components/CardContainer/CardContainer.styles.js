import { makeStyles } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: theme.spacing(45),
    height: theme.spacing(45),
    margin: theme.spacing(6),
    marginBottom: theme.spacing(1),
  },
  image: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: "auto",
    borderRadius: "6px",
    marginTop: theme.spacing(1),
  },
  love: {
    color: red,
    flexShrink: 0,
  },
}));
