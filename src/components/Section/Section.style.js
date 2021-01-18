import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
  Section: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },

  imgWrap: {
    order: "2",
    width: "50%",
    "& img": {
      width: "100%",
      height: "100%",
    },
  },
  textWrap: (props) => ({
    order: props.orientation === "left" ? "1" : "3",
    width: "35%",
  }),
  text: {
    color: "#7D7987",
    fontSize: "21px",
  },
  header: {
    fontSize: "48px",
  },
  buttonWrap: {
    width: "200px",
    marginTop: "45px",
  },

  "@media (max-width: 1250px)": {
    Section: {
      flexDirection: "column",
    },

    imgWrap: {
      width: "100%",
    },

    textWrap: {
      width: "100% !important",
    },

    buttonWrap: {
      width: "90%",
      margin: "20px auto"
    }
  },
});

export default useStyle;
