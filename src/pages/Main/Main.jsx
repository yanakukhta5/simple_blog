import React, { memo } from "react";
import css from "./Main.module.css";
import { MainText } from "./MainText/MainText";
import { MainImg } from "./MainImg/MainImg";

const Main = memo(function Main(props) {
  return (
    <main className={css.main}>
      <MainText />
      <MainImg />
    </main>
  );
});

export { Main };
