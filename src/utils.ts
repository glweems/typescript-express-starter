/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-expressions */
import { Request, Response, NextFunction, RequestHandler } from 'express';
import * as Validator from 'validatorjs';

export const wrap = (fn: RequestHandler) => (
  req: Request,
  res: Response,
  next: NextFunction
) => fn(req, res, next).catch(next);

export function error({
  status,
  message,
  data
}: {
  status: number;
  message: string;
  data?: any;
}): Error {
  const err = new Error(message) as Err;
  err.status = status;
  err.data = data;
  return err;
}

export const validate = ({
  data,
  rules,
  next,
  customErrorMessages
}: {
  data: any;
  rules: any;
  next: NextFunction;
  customErrorMessages?: Validator.ErrorMessages;
}) => {
  const validator = new Validator(data, rules, customErrorMessages);

  return validator.fails()
    ? next(
        error({
          status: 400,
          message: 'Bad Request',
          data: validator.errors.all()
        })
      )
    : next();
};

export const validateBody = ({
  rules,
  customErrorMessages
}: {
  rules: any;
  customErrorMessages?: Validator.ErrorMessages;
}): RequestHandler => (req: Request, res: Response, next: NextFunction): void =>
  validate({ data: req.body, rules, next, customErrorMessages });

export const validateQuery = (
  rules: any,
  customErrorMessages?: Validator.ErrorMessages
): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction): void =>
    validate({ data: req.query, rules, next, customErrorMessages });
};
