/**
 * 
 * @param {*} token Needs token from localstorage 
 * @returns user data that can be used to find user role and other sensitive information. 
 */
export function decodeFunction(token) {
  const data = decode(token);
  const user = findUserById(data.userId);
  return user;
}
