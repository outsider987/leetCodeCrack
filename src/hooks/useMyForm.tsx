import React, { useEffect, useState, useRef, useCallback } from 'react';
import { usePrevious } from './Previous';
export interface validate {
  validate: (string: string) => boolean;
  message: string;
}
export interface errors {
  pass: boolean;
  message: string;
}

export type ValidateType<T> = {
  [P in keyof T]: validate[];
};
export type ErrorType<T> = {
  [P in keyof T]: errors;
};

export const useForm = <T extends Record<any, any>, K extends keyof any>(
  initialStates: T,
  validateList?: ValidateType<T>,
  isStrean: boolean = true
) => {
  const isSubmitted = useRef(false);
  const [values, setValues] = useState(initialStates);
  const initializeErrors: ErrorType<T> = initialStates;
  const [errors, setErrors] = useState(initializeErrors);
  const refErrors = useRef(errors);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setValues({ ...values, [name]: value.replace(/\s/g, '') });
  };

  const validating = () => {
    if (isSubmitted.current) {
      if (validateList) {
        for (const [key, vList] of Object.entries(validateList)) {
          for (const v of vList) {
            const isPass = v.validate(values[key]);
            isPass
              ? (refErrors.current = {
                  ...refErrors.current,
                  [key]: { pass: v.validate(values[key]), message: '' },
                })
              : (refErrors.current = {
                  ...refErrors.current,
                  [key]: { pass: v.validate(values[key]), message: v.message },
                });

            if (!isPass) break;
          }
        }
        setErrors(refErrors.current);
        isStrean ? (isSubmitted.current = true) : (isSubmitted.current = false);
      }
    }
  };

  useEffect(() => {
    validating();
  }, [values]);

  const handleSubmit = (data: (data?: T) => void) => {
    return (event: React.FormEvent<HTMLElement>) => {
      event.preventDefault();
      isSubmitted.current = true;
      validating();
      data(values);
    };
  };

  const validator = { values, errors, handleChange };
  return { handleSubmit, validator };
};
