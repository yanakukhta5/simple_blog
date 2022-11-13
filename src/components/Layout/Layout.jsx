import React, { memo } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";

const Layout = memo(function () {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  );
});

export { Layout };
