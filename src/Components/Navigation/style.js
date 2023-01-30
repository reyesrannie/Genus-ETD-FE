import image from "../../Assets/background.jpg";
const style = () => {
  const background = {
    position: "absolute",
  };
  const container = {
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    position: "fixed",
    zIndex: -1,
    height: "100%",

    filter: "blur(10px)",
  };
  const childContainer = {
    position: "relative",
    alignContent: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
  };

  const logo = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "15vh",
    marginTop: "2vh",
  };

  const sideContainer = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    my: 2,
  };

  const drawerContainer = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    p: 0,
  };

  return {
    container,
    childContainer,
    background,

    sideContainer,
    drawerContainer,
    logo,
  };
};
export default style;
