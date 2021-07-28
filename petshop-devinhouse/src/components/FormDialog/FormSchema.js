import * as Yup from "yup";

export const initialPet = {
  id: 0,
  species: "",
  sex: "",
  subspecies: "",
  description: "",
  price: "",
  image: "",
};

const CAMPO_OBRIGATORIO = "Campo obrigatório!";

export const petSchema = Yup.object().shape({
  species: Yup.string().required(CAMPO_OBRIGATORIO),
  subspecies: Yup.string().required(CAMPO_OBRIGATORIO),
  sex: Yup.string().required(CAMPO_OBRIGATORIO),
  description: Yup.string().required(CAMPO_OBRIGATORIO),
  price: Yup.number().required(CAMPO_OBRIGATORIO),
  image: Yup.string().required(CAMPO_OBRIGATORIO),
});
