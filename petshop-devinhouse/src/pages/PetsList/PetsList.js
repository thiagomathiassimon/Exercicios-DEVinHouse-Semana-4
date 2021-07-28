import { Divider, Grid } from "@material-ui/core";
import { useEffect, useRef, useState } from "react";
import { AddButton, CardContainer, FormDialog } from "../../components";
import { useOpen } from "../../contexts";
import { Pets } from "../../services";

export const PetsList = () => {
  const [pets, setPets] = useState();

  const { open, onChangeOpenedState } = useOpen();

  useEffect(() => setPets(Pets), [Pets]);

  const handleClose = () => {
    onChangeOpenedState();
  };

  const handleSubmit = () => {
    const image = document.getElementById("image")?.value;
    const specie = document.getElementById("specie")?.value;
    const sex = document.getElementById("sex")?.value;
    const subspecies = document.getElementById("subspecies")?.value;
    const description = document.getElementById("description")?.value;
    const price = document.getElementById("price")?.value;

    const newPet = {
      id: Pets.length + 1,
      species: specie,
      sex: sex,
      subspecies: subspecies,
      description: description,
      price: price,
      image: image,
    };

    console.log(newPet);
    Pets.push(newPet);
    console.log(Pets);
    handleClose();
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {pets?.map((element) => {
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
        <AddButton />
        <FormDialog
          petsList={pets}
          onClose={handleClose}
          onSubmit={handleSubmit}
        />
      </Grid>
    </>
  );
};
