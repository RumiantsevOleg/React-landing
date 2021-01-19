import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
  Footer: {
    width: "100%",
    height: "432px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(183.41deg, #67C3F3 -8.57%, #5A98F2 82.96%)",
  },

  content: {
    width: "75%",
    height: "55%",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
  },

  trafalgarWrap: {
    height: "100%",
    width: "390px",
  },

  itemsWrap: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",

    "& h3": {
      fontSize: "20px",
    },
    "& span": {
      fontSize: "18px",
      fontWeight: "300",
    },
  },

  logoWrap: {
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
  },

  logo: {
    backgroundColor: "#fff",
    borderRadius: "50%",
    width: "35px",
    height: "35px",
    color: "#5A98F2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "23px",
    fontWeight: "bold",
    marginRight: "20px",
  },

  lastText: {
    marginTop: "40px",
  },

  "@media (max-width: 1250px)": {
    itemsWrap: {
      display: "none",
    },

    Footer: {
      height: "350px",
    },
  },
});

export default useStyle;
