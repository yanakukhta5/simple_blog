import React, { memo } from "react";
import css from "./AboutTeam.module.css";

const AboutTeam = memo(function () {
  return (
    <>
      <p className={css.about}>Out Team</p>
    </>
  );
});

export { AboutTeam };
