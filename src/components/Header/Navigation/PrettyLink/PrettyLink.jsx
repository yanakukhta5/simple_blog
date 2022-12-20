import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { useMatch } from "react-router-dom";
import { theme } from "../../../../state/Theme";

const PrettyLink = memo(function ({ children, to, ...props }) {
  const match = useMatch({
    path: to,
    end: to.length === 1,
  });
  return (
    <NavLink
      to={to}
      {...props}
      className={`${theme.colorScheme}`}
      style={{
        color: match ? "red" : "black",
      }}
    >
      {children}
    </NavLink>
  );
});

export { PrettyLink };
