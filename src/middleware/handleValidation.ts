import express from "express";
import { validationResult, ValidationChain } from "express-validator";

export const validate = (validations: ValidationChain[]) => {
  return async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    for (const validation of validations) {
      const result = await validation.run(req);
      if (result.array().length) break;
    }

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    // Mapeie os erros para extrair apenas a propriedade "msg"
    const errorMessages = errors.array().map((error) => error.msg);

    res.status(400).json({ errors: errorMessages });
  };
};
