import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
  CartLatest: {
    width: "350px",
    height: "520px",
    display: "flex",
    flexDirection: "column",
    alignItems: "space-evenly",
    boxShadow: "10px 40px 50px rgba(229, 233, 246, 0.4)",
    borderRadius: "20px",
  },
  text: {
    width: "266px",
    fontSize: "16px",
  },
  more: {
    color: "#4089ED;",
    fontSize: "17px",
    marginTop: "25px",
  },
});

export default useStyle;
