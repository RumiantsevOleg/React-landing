import React from "react";
import useStyle from "./LatestArticles.style.js";
import CartLatest from "../../components/Cart-latestArticle/CartLatest";
import ButtonApp from "../../components/ButtonApp/ButtonApp";

const LatestArticles = () => {
  const classes = useStyle();
  return (
    <div className={classes.LatestArticles}>
      <h2 className={classes.header}>Check out our latest article</h2>
      <div className={classes.articlesWrap}>
        <CartLatest
          img={"/img/latestArticle1.png"}
          header={"Disease detection, check nup in the laboratory"}
          text={
            "In this case, the role of the health laboratory is very important to do a disease detection..."
          }
        />

        <CartLatest
          img={"/img/latestArticle2.png"}
          header={"Herbal medicines that are safe for consumption"}
          text={
            "Herbal medicine is very widely used at this time because of its very good for your health..."
          }
        />

        <CartLatest
          img={"/img/latestArticle3.png"}
          header={"Natural care for healthy facial skin"}
          text={
            "A healthy lifestyle should start from now and also for your skin health. There are some..."
          }
        />

        <div className={classes.buttonWrap}>
          <ButtonApp color={"white"} text={"View all"}/>
        </div>


      </div>
    </div>
  );
};

export default LatestArticles;
