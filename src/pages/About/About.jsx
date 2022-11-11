import React, { memo } from "react";
import css from "./About.module.css";
import { Routes, Route } from "react-router-dom";
import { AboutCompany } from "./AboutCompany";
import { AboutTeam } from "./AboutTeam";
import { PrettyLink } from "../../components/Header/Navigation/PrettyLink";
const About = memo(function () {
  return (
    <>
      <p className={css.about}>About</p>
      <nav style={{ margin: "0 auto" }}>
        <ul>
          <li>
            <PrettyLink to="/about/company">Company</PrettyLink>
          </li>
          <li>
            <PrettyLink to="/about/team">Team</PrettyLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="company" element={<AboutCompany />}></Route>
        <Route path="team" element={<AboutTeam />}></Route>
      </Routes>
    </>
  );
});

export { About };
