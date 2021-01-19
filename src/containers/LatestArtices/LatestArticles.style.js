import {createUseStyles} from "react-jss";

const useStyle = createUseStyles({
	LatestArticles: {
		marginTop: "100px",
		width: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center"
	},

	articlesWrap: {
		width: "100%",
		marginTop: "60px",
		display: "flex",
		justifyContent: "space-between",
		flexWrap: "wrap",
	},

	header: {
		fontSize: "36px",
	},

	buttonWrap: {
		width: "200px",
		margin: "55px auto"
	}
})

export default useStyle
