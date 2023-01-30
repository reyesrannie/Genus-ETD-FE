const responsive = () => {
  const loginScreen = {
    width: {
      xs: 100,
      sm: 150,
      md: 250,
      lg: 350,
      xl: 400,
    },
    border: "2px solid",
    borderRadius: 5,
    padding: "1%",
  };
  const button = {
    marginTop: "15%",
    width: {
      xs: 100,
      sm: 150,
      md: 250,
      lg: 350,
      xl: 400,
    },
    border: "1px solid",
    borderRadius: 5,
    padding: "1%",
    backgroundColor: "beige",
  };
  return { loginScreen, button };
};
export default responsive;
