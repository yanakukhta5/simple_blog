import React, { memo } from "react";
import { PrettyLink } from "./PrettyLink";
import css from "./Navigation.module.css";

const Navigation = memo(function () {
  return (
    <nav className={css.nav}>
      <ul className={css.ul}>
        <li>
          <PrettyLink to="/">Main</PrettyLink>
        </li>
        <li>
          <PrettyLink to="/news">News</PrettyLink>
        </li>
        <li>
          <PrettyLink to="/about">About</PrettyLink>
        </li>
        <li>
          <PrettyLink to="/profile">Profile</PrettyLink>
        </li>
      </ul>
    </nav>
  );
});

export { Navigation };
