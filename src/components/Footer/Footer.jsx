import React, { memo } from "react";
import css from "./Footer.module.css";

const Footer = memo((props) => {
  return <footer className={css.footer}>FOOTER</footer>;
});

export { Footer };
