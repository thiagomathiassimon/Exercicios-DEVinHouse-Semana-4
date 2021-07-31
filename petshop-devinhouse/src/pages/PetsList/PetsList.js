import { Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import { AddButton, CardContainer, FormDialog } from "../../components";
import { Toast } from "../../components/Toast";
import { OpenForm, OpenProvider, useOpen } from "../../contexts";
import { Pets, post } from "../../services";

export const PetsList = () => {
  const [pets, setPets] = useState();

  const [toastOpen, setToastOpen] = useState(false);
  const [isSuccessToast, setIsSuccessToast] = useState(false);

  const { open, onChangeOpenedState } = useOpen();

  useEffect(() => setPets(Pets), []);

  const handleClose = () => {
    onChangeOpenedState();
  };

  const handleSubmit = (values, { setSubmitting }) => {
    const successful = post(values);
    if (!!successful) {
      handleClose();
    }
    setIsSuccessToast(successful);
    setToastOpen(true);
  };

  const handleToastClose = () => {
    setToastOpen(false);
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
                key={element.image}
                title={element.species}
                subtitle={element.subspecies}
                description={element.description}
                image={element.image}
              />
            </>
          );
        })}
        <AddButton onChangeOpenedState={onChangeOpenedState} />
        <FormDialog
          open={open}
          petsList={pets}
          onClose={handleClose}
          onSubmit={handleSubmit}
          toastOpen={toastOpen}
          setToastOpen={setToastOpen}
          isSuccessToast={isSuccessToast}
          setIsSuccessToast={setIsSuccessToast}
        />
        <Toast
          open={toastOpen}
          handleClose={handleToastClose}
          toastSeverity={isSuccessToast ? "success" : "error"}
          toastMessage={
            isSuccessToast
              ? "Pet adicionado com sucesso!"
              : "Não foi possível adicionar o pet!\nVerifique os campos e tente novamente!"
          }
        />
      </Grid>
    </>
  );
};
