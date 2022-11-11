import React, { memo, useContext } from "react";
import { Navigation } from "./Navigation";
import css from "./Header.module.css";
import { ChangeThemeButton } from "./ChangeThemeButton";

const Header = memo(function () {
  return (
    <header className={css.header}>
      <Navigation />
      <ChangeThemeButton />
    </header>
  );
});

export { Header };
