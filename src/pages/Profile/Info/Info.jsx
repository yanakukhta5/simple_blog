import React, { memo } from "react";
import css from "./Info.module.css";

const Info = memo(function () {
  return (
    <div className={css.info}>
      <div className={css.img__wrapper}>
        <img
          src={
            "https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=f1bb54a15add49a09c912eac851f4ff7&cx=0.56&cy=0.4&cw=397&ch=397"
          }
          alt="Avatar"
          className={css.ava}
        />
      </div>
      <div className={css.text}>
        <p className={css.name}>Yana Yana</p>
        <p className={css.status}>
          Грусть она как пирожок с макаронами..... типа... зачем7..
        </p>
      </div>
    </div>
  );
});

export { Info };
