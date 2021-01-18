import React from 'react';
import useStyle from "./ButtonApp.style.js"

interface ButtonAppProps {
	color: "blue" | "white",
	text: string,

}

const ButtonApp = (props: ButtonAppProps) => {
	const classes = useStyle({color:props.color})
	return (
		<button className={classes.ButtonApp}>
			{props.text}
		</button>
	)
}

export default ButtonApp;