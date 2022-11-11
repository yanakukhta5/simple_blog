import { React, memo, useMemo } from "react";
import css from "./App.module.css";
import { Layout } from "./components/Layout";
import { Main } from "./pages/Main";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Profile } from "./pages/Profile";
import { News } from "./pages/News";
import { Login } from "./pages/Login";
import { SingleNew } from "./pages/SingleNew";
import { useTheme } from "./hooks/useTheme";
import { Register } from "./pages/Login/Register";
import { About } from "./pages/About";
import { loaderNews } from "./pages/News/loaderNews";
import { loaderSingleNew } from "./pages/SingleNew/loaderSingleNew";

const App = memo(function () {
  const themeContext = useTheme();
  const router = useMemo(
    () =>
      createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="profile" element={<Profile />} />
            <Route path="news" element={<News />} loader={loaderNews} />
            <Route
              path="news/:id"
              element={<SingleNew />}
              loader={loaderSingleNew}
            />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="about/*" element={<About />} />
          </Route>
        )
      ),
    []
  );
  return (
    <>
      <div className={`${css.app} ${themeContext.theme}`}>
        <RouterProvider router={router} />
      </div>
    </>
  );
});

export default App;
