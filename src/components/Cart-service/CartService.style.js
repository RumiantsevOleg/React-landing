import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
  CartService: {
    height: "350px",
    width: "350px",
    boxShadow: "10px 40px 50px rgba(229, 233, 246, 0.4)",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems:"center",

  },

  content: {
    width: "80%",
    height: "80%"
  },

  text: {
    color: "#7D7987",
    fontSize: "16px"
  },

  header: {
    marginTop: "30px",
    fontSize: "24px"
  }
});

export default useStyle;
