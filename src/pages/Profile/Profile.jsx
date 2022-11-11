import React, { memo } from "react";
import { Navigate } from "react-router-dom";
import { Info } from "./Info";
import { Page } from "./Page";
import css from "./Profile.module.css";

const Profile = memo(function (props) {
  const isAuth = localStorage.getItem("isAuth") === "true";
  if (!isAuth) return <Navigate to={"/login"} />;
  return (
    <section className={css.section}>
      <Info />
      <Page />
    </section>
  );
});

export { Profile };
