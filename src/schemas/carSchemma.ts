import Joi from "joi";

const carSchemma = Joi.object({
  title: Joi.string().required(),
  brand: Joi.string().required(),
  price: Joi.number().required(),
  age: Joi.number().integer().min(0).max(9999),
});

export default carSchemma;
