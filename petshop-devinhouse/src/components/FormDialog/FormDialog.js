import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import { useOpen } from "../../contexts";

export const FormDialog = () => {
  const { open, onChangeOpenedState } = useOpen();

  const handleClose = () => {
    onChangeOpenedState();
  };

  return (
    <Dialog open={open} onClose={handleClose} aria-label="form-dialog-title">
      <DialogTitle id="form-dialog-title">Adicionar Pet</DialogTitle>
      <DialogContent>
        <TextField margin="dense" label="Espécie" variant="filled" fullWidth />
        <TextField margin="dense" label="Raça" variant="filled" fullWidth />
        <TextField
          margin="dense"
          label="Descrição"
          multiline
          rows={3}
          variant="filled"
          fullWidth
        />
        <TextField
          margin="dense"
          label="Preço"
          type="number"
          variant="filled"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancelar
        </Button>
        <Button onClick={handleClose} color="primary">
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
