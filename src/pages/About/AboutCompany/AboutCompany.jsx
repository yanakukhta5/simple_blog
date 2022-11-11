import React, { memo } from "react";
import css from "./AboutCompany.module.css";

const AboutCompany = memo(function () {
  return (
    <>
      <p className={css.about}>Our company</p>
    </>
  );
});

export { AboutCompany };
