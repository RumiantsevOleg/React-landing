import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
  OurServices: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  services: {
    marginTop: "76px",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    "& div": {
      marginTop: "35px",
    },
  },

  buttonWrap: {
    marginTop: "65px",
    width: "200px",
    textAlign: "center"
  },
});

export default useStyle;
