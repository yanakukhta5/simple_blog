import React, { memo } from "react";
import { useTheme } from "../../../hooks/useTheme";
import css from "./ChangeThemeButton.module.css";

const ChangeThemeButton = memo(function () {
  const themeContext = useTheme();
  return (
    <button
      className={`${css.themeButton} ${css[themeContext.theme]}`}
      onClick={() => {
        themeContext.setCurrentTheme(
          themeContext.theme === "light" ? "dark" : "light"
        );
      }}
    >
      Change theme
    </button>
  );
});

export { ChangeThemeButton };
