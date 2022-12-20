import React, { memo } from "react";
import { observer } from "mobx-react-lite";
import { theme } from "../../../state/Theme";
import css from "./ChangeThemeButton.module.css";

const ChangeThemeButton = observer(function () {
  return (
    <button
      className={`${css.themeButton} ${css[theme]}`}
      onClick={theme.changeTheme}
    >
      Change theme
    </button>
  );
});

export { ChangeThemeButton };
