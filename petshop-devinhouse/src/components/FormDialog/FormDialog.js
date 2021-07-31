import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import { useOpen } from "../../contexts";
import { initialPet, petSchema } from "./FormSchema";

export const FormDialog = (props) => {
  const { open } = useOpen();

  const { onClose, onSubmit } = props;

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        aria-label="form-dialog-title"
        fullWidth
      >
        <Formik
          initialValues={initialPet}
          onSubmit={onSubmit}
          validationSchema={petSchema}
        >
          {({
            values,
            setFieldValue,
            isSubmitting,
            isValid,
            errors,
            resetForm,
            touched,
          }) => (
            <Form>
              <DialogTitle id="form-dialog-title">Adicionar Pet</DialogTitle>
              <DialogContent>
                <Field
                  name="image"
                  margin="dense"
                  label="Imagem"
                  variant="filled"
                  fullWidth
                  as={TextField}
                  error={touched?.image && errors.image}
                />
                {touched?.image && errors.image && (
                  <div style={{ color: "red" }}>{errors.image}</div>
                )}
                <Field
                  name="species"
                  margin="dense"
                  label="Espécie"
                  variant="filled"
                  fullWidth
                  as={TextField}
                  error={touched?.species && errors.species}
                />
                {touched?.species && errors.species && (
                  <div style={{ color: "red" }}>{errors.species}</div>
                )}
                <Field
                  name="subspecies"
                  margin="dense"
                  label="Raça"
                  variant="filled"
                  fullWidth
                  as={TextField}
                  error={touched?.subspecies && errors.subspecies}
                />
                {touched?.subspecies && errors.subspecies && (
                  <div style={{ color: "red" }}>{errors.subspecies}</div>
                )}
                <Field
                  name="sex"
                  margin="dense"
                  label="Sexo"
                  variant="filled"
                  fullWidth
                  as={TextField}
                  error={touched?.sex && errors.sex}
                />
                {touched?.sex && errors.sex && (
                  <div style={{ color: "red" }}>{errors.sex}</div>
                )}
                <Field
                  name="description"
                  margin="dense"
                  label="Descrição"
                  multiline
                  rows={3}
                  variant="filled"
                  fullWidth
                  as={TextField}
                  error={touched?.description && errors.description}
                />
                {touched?.description && errors.description && (
                  <div style={{ color: "red" }}>{errors.description}</div>
                )}
                <Field
                  name="price"
                  margin="dense"
                  label="Preço"
                  type="number"
                  variant="filled"
                  fullWidth
                  as={TextField}
                  error={touched?.price && errors.price}
                />
                {touched?.price && errors.price && (
                  <div style={{ color: "red" }}>{errors.price}</div>
                )}
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={onClose}
                  color="secondary"
                >
                  Cancelar
                </Button>
                <Button onClick={resetForm} color="inherit">
                  Limpar
                </Button>
                <Button
                  disabled={!isValid}
                  type="submit"
                  color="primary"
                >
                  Salvar
                </Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </Dialog>
    </>
  );
};
