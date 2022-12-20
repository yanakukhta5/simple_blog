import { React, memo, useMemo } from "react";
import css from "./App.module.css";
import { Layout } from "./components/Layout";
import { Main } from "./pages/Main";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  useRouteError,
  isRouteErrorResponse,
} from "react-router-dom";
import { Profile } from "./pages/Profile";
import { News } from "./pages/News";
import { Login } from "./pages/Login";
import { SingleNew } from "./pages/SingleNew";
import { theme } from "./state/Theme";
import { Register } from "./pages/Login/Register";
import { About } from "./pages/About";
import { loaderNews } from "./pages/News/loaderNews";
import { loaderSingleNew } from "./pages/SingleNew/loaderSingleNew";
import { RouteErrorBoundary } from "./components/RouteErrorBoundary";
import { CreatePost } from "./pages/CreatePost";
import { observer } from "mobx-react-lite";

const App = observer(function () {
  const router = useMemo(
    () =>
      createBrowserRouter(
        createRoutesFromElements(
          <Route
            path="/"
            element={<Layout />}
            errorElement={<RouteErrorBoundary />}
          >
            <Route index element={<Main key="main" />} />
            <Route path="profile" element={<Profile key="profile" />} />
            <Route path="news" element={<News />} loader={loaderNews} />
            <Route path="news/createPost" element={<CreatePost />} action="" />
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
      <div className={`${css.app} ${theme.colorScheme}`}>
        <RouterProvider router={router} />
      </div>
    </>
  );
});

export default App;
