import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { useMatch } from "react-router-dom";
import { useTheme } from "../../../../hooks/useTheme";

const PrettyLink = memo(function ({ children, to, ...props }) {
  const themeContext = useTheme();
  const match = useMatch({
    path: to,
    end: to.length === 1,
  });
  return (
    <NavLink
      to={to}
      {...props}
      className={`${themeContext.theme}`}
      style={{
        color: match ? "red" : "black",
      }}
    >
      {children}
    </NavLink>
  );
});

export { PrettyLink };
