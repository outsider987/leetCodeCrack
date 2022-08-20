import React, {
  useCallback,
  useEffect,
  useState,
  useMemo,
  useRef,
} from 'react';
import { usePrevious } from './Previous';
export interface validate {
  validate: (d: string) => boolean;
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

export const useMyForm = <T extends Record<any, any>, K extends keyof any>(
  initialStates: T,
  validateList?: ValidateType<T>
) => {
  const isSubmitted = useRef(false);
  const [values, setValues] = useState(initialStates);
  const initializeErrors: ErrorType<T> =
    initialStates as unknown as ErrorType<T>;
  const [errors, setErrors] = useState(initializeErrors);

  useEffect(() => {}, [errors, isSubmitted]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  useEffect(() => {}, [errors]);

  const handleSubmit = (data: (data?: T) => void) => {
    if (isSubmitted.current) {
      isSubmitted.current = false;
    }

    if (validateList) {
      for (const [index, vList] of Object.entries(validateList)) {
        // v.validate(values);
          for (let v of vList) {
            //   v.validate(values['email']);
              console.log(values['email'])
        }
      }
    }

    return (event: React.FormEvent<HTMLElement>) => {
      event.preventDefault();
      isSubmitted.current = true;
      data(values);
    };
  };

  const validator = { values, errors, handleChange };
  return { handleSubmit, validator };
};
