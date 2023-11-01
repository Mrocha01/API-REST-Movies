import { checkSchema } from "express-validator";

function rateNum(value: number) {
  if (value < 0 || value > 10) {
    throw new Error("A nota precisa ser entre 0 a 10!");
  }
  return true;
}

export const movieValidator = checkSchema({
  title: {
    isString: {
      errorMessage: "O Titulo é obrigatório e deve ser uma string!",
    },
    isLength: {
      options: { min: 5 },
      errorMessage: "O Titulo deve ter pelo menos 5 caracteres.",
    },
  },
  rating: {
    isNumeric: {
      errorMessage: "A nota precisa ser um número.",
    },
    custom: {
      options: rateNum,
      errorMessage: "A nota precisa estar entre 0 e 10.",
    },
  },
  description: {
    isString: {
      errorMessage: "A descrição é obrigatória e deve ser uma string!",
    },
    isLength: {
      options: { max: 100 },
      errorMessage: "A descrição não pode ter mais de 100 caracteres.",
    },
  },
  director: {
    isString: {
      errorMessage: "O nome do diretor é obrigatório e deve ser uma string!",
    },
  },
});
