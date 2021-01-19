import React from "react";
import useStyle from "./OurServices.style.js";
import CartService from "../../components/Cart-service/CartService";
import ButtonApp from "../../components/ButtonApp/ButtonApp";

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
          img={"/img/consultation.png"}
          header={"Consultation"}
          text={
            "Free consultation with our trusted doctors and get the best recommendations"
          }
        />

        <CartService
          img={"/img/detailsInfo.png"}
          header={"Details info"}
          text={
            "Free consultation with our trusted doctors and get the best recommendations"
          }
        />

        <CartService
          img={"/img/emergency.png"}
          header={"Emergency care"}
          text={
            "You can get 24/7 urgent care for yourself or your children and your lovely family"
          }
        />

        <CartService
          img={"/img/tracking.png"}
          header={"Tracking"}
          text={
            "Track and save your medical history and health data "
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
