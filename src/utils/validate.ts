export enum validateMethod{
    isSame='isSame'
}

export const validateRegexp = {
    email: /^([a-z\d\.-])@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/.test,
    require: /\w+/.test,
    password: /(?=.*\d)(?=.*[a-z])(?=.*\[A-Z]).{6,15}$/.test,
  };