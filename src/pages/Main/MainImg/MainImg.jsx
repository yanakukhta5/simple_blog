import React, { memo } from "react";
import css from "./MainImg.module.css";

const MainImg = memo(function () {
  return (
    <div className="main-img">
      <img
        src="../../../public/img/bird.svg"
        className={css.img}
        alt="Main image"
      />
    </div>
  );
});

export { MainImg };
