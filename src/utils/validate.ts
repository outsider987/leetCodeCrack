export const validateRegexp = {
  email: /^([a-z\d\.-])@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/.test.bind(
    /^([a-z\d\.-])@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
  ),
  require: /\w+/.test.bind(/\w+/),
  password: /(?=.*\d)(?=.*[a-z])(?=.*\[A-Z]).{6,15}$/.test.bind(
    /(?=.*\d)(?=.*[a-z])(?=.*\[A-Z]).{6,15}$/
  ),
};
