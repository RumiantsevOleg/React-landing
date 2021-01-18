import React from "react";
import useStyle from "./OurServices.style.js";
import CartService from "../Cart-service/CartService";
import ButtonApp from "../ButtonApp/ButtonApp";

const OurServices = () => {
  const classes = useStyle();

  return (
    <div className={classes.OurServices}>
      <h2>Our services</h2>
      <span>
        We provide to you the best choiches for you. Adjust it to your health
        needs and make sure your undergo treatment with our highly qualified
        doctors you can consult with us which type of service is suitable for
        your health
      </span>
      <div className={classes.services}>
        <CartService
          img={"/img/search.png"}
          header={"Search doctor"}
          text={
            "Choose your doctor from thousands of specialist, general, and trusted hospitals"
          }
        />

        <CartService
          img={"/img/pharmacy.png"}
          header={"Online pharmacy"}
          text={
            "Buy  your medicines with our mobile application with a simple delivery system"
          }
        />

        <CartService
          img={"/img/search.png"}
          header={"Search doctor"}
          text={
            "Choose your doctor from thousands of specialist, general, and trusted hospitals"
          }
        />

        <CartService
          img={"/img/search.png"}
          header={"Search doctor"}
          text={
            "Choose your doctor from thousands of specialist, general, and trusted hospitals"
          }
        />

        <CartService
          img={"/img/search.png"}
          header={"Search doctor"}
          text={
            "Choose your doctor from thousands of specialist, general, and trusted hospitals"
          }
        />

        <CartService
          img={"/img/search.png"}
          header={"Search doctor"}
          text={
            "Choose your doctor from thousands of specialist, general, and trusted hospitals"
          }
        />
      </div>

      <div className={classes.buttonWrap}>
        <ButtonApp color={"white"} text={"Learn more"} />
      </div>
    </div>
  );
};

export default OurServices;
