import React from 'react';
import useStyle from "./App.style.js"
import Header from "../containers/Header/Header";
import Main from "../containers/Main/Main";
import Footer from "../containers/Footer/Footer";

const App = () => {
	const classes = useStyle()
	return (
		<div className={classes.App}>
			<Header/>
			<Main/>
			<Footer/>
		</div>
	)
}

export default App;
