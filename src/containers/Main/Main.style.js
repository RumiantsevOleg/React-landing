import {createUseStyles} from "react-jss";

const useStyle = createUseStyles({
	Main: {
		width: "100%",
		display: "flex",
		justifyContent: "center",

	},

	content: {
		width: "1200px",
		marginTop: "84px",
	},

	"@media (max-width: 1250px)": {
		content: {
			width: "90%",

		}
	}


})

export default useStyle