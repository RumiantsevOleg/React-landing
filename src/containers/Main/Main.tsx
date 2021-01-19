import React from "react";
import useStyle from "./Main.style.js";

import Section from "../../components/Section/Section";
import OurServices from "../OutServices/OurServices";
import LatestArticles from "../LatestArtices/LatestArticles";

const Main = () => {
  const classes = useStyle();

  return (
    <div className={classes.Main}>
      <div className={classes.content}>
        <Section
          orientation={"left"}
          img={"/img/virtualImg.png"}
          header={"Virtual healthcare for you"}
          buttonColor={"blue"}
          text={`
							 Trafalgar provides progressive, 
							 and affordable healthcare, 
							 accessible on mobile and online for everyone
			    `}
          buttonText={"Consult today"}
        />

        <OurServices />

        <div className={classes.sectionWrap}>
          <Section
            orientation={"right"}
            img={"/img/leadingImg.png"}
            header={"Leading healthcare providers"}
            buttonColor={"blue"}
            text={`
							 Trafalgar provides progressive, and affordable healthcare, 
							 accessible on mobile and online for everyone. 
							 To us, it’s not just work. We take pride in the solutions we deliver
			    `}
            buttonText={"Consult today"}
          />
        </div>

        <div className={classes.sectionWrap}>
          <Section
            orientation={"left"}
            img={"/img/virtualImg.png"}
            header={"Virtual healthcare for you"}
            buttonColor={"blue"}
            text={`
							 Trafalgar provides progressive, 
							 and affordable healthcare, 
							 accessible on mobile and online for everyone
			    `}
            buttonText={"Consult today"}
          />
        </div>



        <LatestArticles/>

      </div>
    </div>

  );
};

export default Main;
