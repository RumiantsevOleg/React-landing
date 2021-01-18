import React from 'react';
import useStyle from "./App.style.js"
import Header from "../containers/Header/Header";
import Main from "../containers/Main/Main";

const App = () => {
	const classes = useStyle()
	return (
		<div className={classes.App}>
			<Header/>
			<Main/>
		</div>
	)
}

export default App;