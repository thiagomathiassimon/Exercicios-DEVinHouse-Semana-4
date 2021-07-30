export const Pets = [
  {
    id: 1,
    species: "Gato",
    sex: "male",
    subspecies: "Persa",
    description: "Um belo gato persa. Muito amigável e bonito!",
    price: 2000.0,
    image:
      "https://www.petlove.com.br/dicas/wp-content/uploads/2018/04/persa.png",
  },
  {
    id: 2,
    species: "Gato",
    sex: "female",
    subspecies: "Persa",
    description: "Uma bela gata persa. Muito amigável e bonita!",
    price: 2500.0,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Persialainen.jpg/200px-Persialainen.jpg",
  },
  {
    id: 3,
    species: "Gato",
    sex: "male",
    subspecies: "Mestiço",
    description: "Um belo gato. Muito amigável e bonito!",
    price: 500.0,
    image:
      "https://image.freepik.com/fotos-gratis/adoravel-gato-persa-preto_58409-14450.jpg",
  },
  {
    id: 4,
    species: "Gato",
    sex: "male",
    subspecies: "Maine Coon",
    description: "Um belo gato maine coon. Muito amigável e bonito!",
    price: 5000.0,
    image:
      "https://awebic.com/wp-content/uploads/2016/08/awebic-maine-coon-5.jpg",
  },
];

export const post = (value = {}) => {
  const hasNumber = value.species.match("[0-9]+");
  console.log("hasNumber", hasNumber)
  if (hasNumber) {
    return false;
  } else {
    Pets.push(value);
    return true;
  }
};
