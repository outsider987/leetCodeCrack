import React, { useCallback, useEffect, useState,useMemo } from 'react';
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

export const useMyForm = <T extends Record<K, K>, K extends keyof any>(
  initialStates: T,
  validateList?: ValidateType<T>
) => {
  const [values, setValues] = useState(initialStates);
  const initializeErrors: ErrorType<T> =
    initialStates as unknown as ErrorType<T>;
  const [errors, setErrors] = useState(initializeErrors);

  useEffect(() => {
    console.log('wewtwe');
  }, [errors]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  
  useEffect(() => {}, [errors]);

  const handleSubmit = (t: (data:T) => void) => {
    // t(values)
    // if(validateList)
  
    // console.log( Object.entries(validateList));
    if (validateList) {
      for (const [index, v] of Object.entries(validateList)) {
        // v.validate(values);
        console.log(v)
      }
    }

    return (event: React.FormEvent<HTMLElement>) => {
      event.preventDefault();
    };
  };

//  const handleSubmit=  useMemo(
//     () => {
       
//      const handleSubmit = (t: (data:T) => void) => {
//     t(values)

//     if (validateList) {
//     //   for (const [index, v] of Object.assign(validateList).entries()) {
//     //     v.validate(values);
//     //   }
//     }

//     return (event: React.FormEvent<HTMLElement>) => {
//       event.preventDefault();
//     };
//   };
//     return handleSubmit
//       },
//     [],
// );
handleSubmit
  const validator = { values, errors, handleChange };
  return { handleSubmit, validator };
};
