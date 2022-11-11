import React, { memo } from "react";
import css from "./MainText.module.css";

const MainText = memo(function () {
  return (
    <div className={css.text}>
      <h1 className={css.title}>Keep caim and stay on main page</h1>
      <p className={css.subtitle}>Everything will be ok</p>
    </div>
  );
});

export { MainText };
