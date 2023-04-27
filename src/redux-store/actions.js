export const logIn = (loginData) => ({
  type: 'LOG_IN',
  payload: { login: loginData }
});

export const logOut = () => {
  return { 
    type: 'LOG_OUT',
    payload: { login: null }
  }
};