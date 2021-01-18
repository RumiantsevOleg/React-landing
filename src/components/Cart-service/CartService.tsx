import React from "react";
import useStyle from "./CartService.style.js";

interface CartService {
  img: string;
  header: string;
  text: string;
}

const CartService = (props: CartService) => {
  const classes = useStyle();

  return (
    <div className={classes.CartService}>
      <div className={classes.content}>
        <img src={props.img} alt="img" />
        <h3 className={classes.header}>{props.header}</h3>
        <span className={classes.text}>{props.text}</span>
      </div>
    </div>
  );
};

export default CartService;
