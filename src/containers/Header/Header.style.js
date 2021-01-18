import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
  Header: {
    display: "flex",
    justifyContent: "center",
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    width: "1200px",
    marginTop: "40px",
  },
  navList: {
    cursor: "pointer",
    width: "45%",
    display: "flex",
    justifyContent: "space-between",
    color: "#7D7987",
  },

  active: {
    color: "#1F1534",
  },

  menuOpen: {
    display: "none"
  },

  "@media (max-width: 1250px)": {
    content: {
      width: "95%",
    },

    navList: {
      display: "none"
    }

  }
});

export default useStyle;
