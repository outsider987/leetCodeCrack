export const validateRegexp = {
  email: RegexpBindFactory(
    /^\w+((-\w+)|(\.\w+))*\@\w+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
  ),
  require: RegexpBindFactory(/\w+/),
  password: RegexpBindFactory(/(?=.*\d)(?=.*[a-z])(?=.*\[A-Z]).{6,15}$/),
};

export function RegexpBindFactory(regexp: RegExp) {
  return regexp.test.bind(regexp);
}
