import React from "react";
import useStyle from "./Section.style.js";
import ButtonApp from "../ButtonApp/ButtonApp";

interface SectionProps {
  orientation: "left" | "right";
  img: string;
  buttonColor: "blue" | "white";
  text: string;
  header: string;
  buttonText: string;
}

const Section = (props: SectionProps) => {
  const classes = useStyle({ orientation: props.orientation });
  return (
    <div className={classes.Section}>
      <div className={classes.imgWrap}>
        <img src={props.img} alt="sectionImg" />
      </div>

      <div className={classes.textWrap}>
        <h2 className={classes.header}>{props.header}</h2>
        <span className={classes.text}>{props.text}</span>
        <div className={classes.buttonWrap}>
          <ButtonApp color={props.buttonColor} text={props.buttonText} />
        </div>
      </div>
    </div>
  );
};

export default Section;
