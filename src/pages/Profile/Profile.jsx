import React, { memo } from "react";
import { Navigate } from "react-router-dom";
import { Info } from "./Info";
import { Page } from "./Page";
import css from "./Profile.module.css";
import { auth } from "../../state/Auth";
import { observer } from "mobx-react-lite";
//import { toJS } from "mobx";

const Profile = observer(function (props) {
  if (!auth.isAuth) return <Navigate to={"/login"} />;
  return (
    <section className={css.section}>
      <Info />
      <Page />
    </section>
  );
});

export { Profile };
