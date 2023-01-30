export const saveUser = () => {
  let userSaved;
  if (sessionStorage.getItem("userToken")) {
    userSaved = sessionStorage.getItem("userToken");
  }
  return userSaved;
};

export const getUser = () => {
  const getUser = sessionStorage.getItem("userName");
  return getUser;
};
