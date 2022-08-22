export const validateRegexp = {
  email: RegexpBindFactory(
    /^([a-z\d\.-])@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
  ),
  require: RegexpBindFactory(/\w+/),
  password: RegexpBindFactory(/(?=.*\d)(?=.*[a-z])(?=.*\[A-Z]).{6,15}$/),
};

export function RegexpBindFactory(regexp: RegExp) {
  return regexp.test.bind(regexp);
}
