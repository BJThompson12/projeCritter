// uses regular expression to check for valid email input
export function validateEmail(email) {
  const regex =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  return regex.test(String(email).toLowerCase());
}

// checks that password entry is at least 8 characters
export function validatePass(pass) {
  const regex = /.{8,}$/;
  return regex.test(pass);
}