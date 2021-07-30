import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import { useStyles } from "./CardContainer.styles";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import { useState } from "react";

export const CardContainer = (props) => {
  const classes = useStyles();
  const [love, setLove] = useState(false);

  const handleLove = () => {
    setLove(!love)
  }

  const { image, title, subtitle, description } = props;
  return (
    <Card className={classes.root} elevation={3}>
      <CardActionArea>
        <CardMedia
          className={classes.image}
          component="img"
          alt="Pet"
          image={image}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography gutterBottom variant="h5" component="h3">
            {subtitle}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Grid container justifyContent="flex-end">
        <CardActions>
          <IconButton size="small" color="primary" onClick={handleLove}>
            {!love ? <FavoriteBorderRoundedIcon /> : <FavoriteRoundedIcon className={classes.love} color="error" />}
          </IconButton>
          <IconButton size="small" color="primary">
            <ShoppingCartRoundedIcon />
          </IconButton>
        </CardActions>
      </Grid>
    </Card>
  );
};
