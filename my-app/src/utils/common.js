export function validateString (str, maxLength) {
  if (str.length > maxLength || /\s/.test(str)) {
    return false;
  }

  const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!"#$%&'()*+,\-./:;<=>?@\\[\\\]^_`{|}~]).*$/;
  return regex.test(str);
}