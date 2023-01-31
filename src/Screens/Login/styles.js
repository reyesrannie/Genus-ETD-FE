import forLogo from "../../Assets/forLogo.jpg";

const style = () => {
  const icon = {
    color: "disable",
    mr: 1,
    my: 0.5,
  };

  const form = {
    borderRadius: 5,
    height: "45vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "column",
    pl: 1,
    pr: 1,
  };

  const logo = {
    width: {
      xs: "", //  0px
      sm: "", //600px
      md: "", // 900px
      lg: "25vh", // 1200px
      xl: "40vh", //1536
    },
    height: {
      xs: "", //  0px
      sm: "", //600px
      md: "", // 900px
      lg: "49vh", // 1200px
      xl: "49vh", //1536
    },

    display: { xs: "none", sm: "none", md: "none", lg: "flex", xl: "flex" },
    alignItems: "center",
    flexDirection: "column",
  };

  const logo1 = {
    width: "20vh",
    marginTop: "10vh",
  };

  const textContainer = {
    justifyContent: "center",
    display: "flex",
    my: 1,
  };
  const textContainer1 = {
    justifyContent: "center",
    display: "flex",
    my: 1,
  };

  const items = {
    display: "flex",
    alignItems: "flex-start",
    boxShadow: 5,
    borderRadius: 5,
    overflow: "hidden",

    backgroundSize: "fill",
    width: {
      xs: "40vh", //  0px
      sm: "40vh", //600px
      md: "55vh", // 900px
      lg: "70vh", // 1200px
      xl: "90vh", //1536
    },
    height: "45vh",
    my: "30vh",
  };

  return { textContainer, textContainer1, icon, form, items, logo, logo1 };
};
export default style;
