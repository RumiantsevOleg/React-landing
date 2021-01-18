import { createUseStyles } from "react-jss";

const useStyle = createUseStyles({
  ButtonApp: (props) => ({
		cursor: "pointer",
		fontSize: "18px",
		fontWeight: "700",
		padding: "12px",
		width: "100%",
		boxSizing: "border-box",
		border: "1px solid #458FF6",
		borderRadius: "55px",
		color: props.color==="blue" ? "white" : "#458FF6",
		backgroundColor: props.color==="blue" ? "#458FF6" : "white",
		"&:hover": {
			outline: "none",
			border: "none"
		},
		"&: active": {
			opacity: "0.6"
		}
	}),
});

export default useStyle;
