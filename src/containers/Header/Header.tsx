import React from 'react';
import useStyle from "./Header.style.js"

const Header = () => {
	const classes = useStyle()
	return (
		<div className={classes.Header}>
			<div className={classes.content}>
				<img src={"/img/logo.png"} alt="logo"/>
				<nav className={classes.navList}>
						<div className={classes.active}>Home</div>
						<div>Find a doctor</div>
						<div>Apps</div>
						<div>Testimonials</div>
						<div>About us</div>
				</nav>
				<div className={classes.menuOpen}>

				</div>
			</div>
		</div>
	)
}

export default Header;