import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import { useOpen } from "../../contexts";

export const FormDialog = (props) => {
  const { open, onChangeOpenedState } = useOpen();

  const { onClose, onSubmit, petsList } = props;

  return (
    <Dialog open={open} onClose={onClose} aria-label="form-dialog-title">
      <DialogTitle id="form-dialog-title">Adicionar Pet</DialogTitle>
      <DialogContent>
        <TextField
          id="image"
          margin="dense"
          label="Imagem"
          variant="filled"
          fullWidth
        />
        <TextField
          id="specie"
          margin="dense"
          label="Espécie"
          variant="filled"
          fullWidth
        />
        <TextField
          id="subspecies"
          margin="dense"
          label="Raça"
          variant="filled"
          fullWidth
        />
        <TextField
          id="sex"
          margin="dense"
          label="Sexo"
          variant="filled"
          fullWidth
        />
        <TextField
          id="description"
          margin="dense"
          label="Descrição"
          multiline
          rows={3}
          variant="filled"
          fullWidth
        />
        <TextField
          id="price"
          margin="dense"
          label="Preço"
          type="number"
          variant="filled"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancelar
        </Button>
        <Button onClick={onSubmit} color="primary">
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
