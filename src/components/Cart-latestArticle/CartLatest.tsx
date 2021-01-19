import React from 'react';
import useStyle from "./CartLatest.style.js"

interface CartLatestProps {
	img: string,
	header: string,
	text: string,
}

const CartLatest = (props: CartLatestProps) => {
	const classes = useStyle()
	return (
		<div className={classes.CartLatest}>
			<img src={props.img} alt="img"/>
			<h3>{props.header}</h3>
			<span className={classes.text}>{props.text}</span>
			<div className={classes.more}>
				Read more &#10141;
			</div>
		</div>
	)
}

export default CartLatest;
