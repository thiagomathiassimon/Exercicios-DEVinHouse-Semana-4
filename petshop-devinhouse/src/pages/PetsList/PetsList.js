import { Divider, Grid } from "@material-ui/core";
import { useRef } from "react";
import { CardContainer } from "../../components";
import { Pets } from "../../services";

export const PetsList = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {Pets?.map((element) => {
          return (
            <>
              <CardContainer
                title={element.species}
                subtitle={element.subspecies}
                description={element.description}
                image={element.image}
              />
            </>
          );
        })}
      </Grid>
    </>
  );
};
