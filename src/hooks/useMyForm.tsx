import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  createContext,
} from 'react';
import { usePrevious } from './Previous';

export interface validateRuleType {
  validate: (string: string) => boolean;
  message?: string;
}
export interface errors {
  pass: boolean;
  message: string;
}

export type ValidateType<T> = {
  [P in keyof T]: validateRuleType[];
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
  const isPassRef = useRef(false);
  const refErrors = useRef(errors);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  function noWhiteSpaceChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value, name } = e.target;

    setValues({ ...values, [name]: value.replace(/\s/g, '') });
  }

  const validating = () => {
    if (isSubmitted.current) {
      let isPassed = true;

      if (validateList) {
        for (const [key, vList] of Object.entries(validateList)) {
          for (const v of vList) {
            const validateIspass = v.validate(values[key]);
            if (isPassed) isPassed = isPassRef.current = validateIspass;
            validateIspass
              ? (refErrors.current = {
                  ...refErrors.current,
                  [key]: { pass: v.validate(values[key]), message: '' },
                })
              : (refErrors.current = {
                  ...refErrors.current,
                  [key]: { pass: v.validate(values[key]), message: v.message },
                });

            if (!validateIspass) break;
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

  const handleSubmit = (data: (data?: T, ispass?: boolean) => void) => {
    return (event: React.FormEvent<HTMLElement>) => {
      event.preventDefault();
      isSubmitted.current = true;
      validating();
      data(values, isPassRef.current);
    };
  };

  const validator = {
    values,
    errors,
    handleChange,
    noWhiteSpaceChange,
    isPass: isPassRef.current,
  };
  return { handleSubmit, validator };
};
