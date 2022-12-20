import React, { Suspense, useMemo } from "react";
import { useLoaderData, useSearchParams, Await } from "react-router-dom";
import css from "./News.module.css";
import { SearchForm } from "./SearchForm";
import { NewsList } from "./NewsList";
import { auth } from "../../state/Auth";
import { PrettyLink } from "../../components/Header/Navigation/PrettyLink";
import { observer } from "mobx-react-lite";

const News = observer(function () {
  const { news } = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("posts");
  const isAuth = useMemo(() => auth.isAuth, [auth]);
  return (
    <section className={css.news}>
      <h1 className={css.title}>NEWS</h1>
      <SearchForm setSearchParams={setSearchParams} query={query} />
      <PrettyLink to={isAuth ? "createPost" : "/login"}>
        {isAuth ? "Create new post" : "login to be able to create new posts!"}
      </PrettyLink>
      <Suspense fallback={<p>Loading....</p>}>
        <Await resolve={news}>
          {(news) => <NewsList news={news} query={query} />}
        </Await>
      </Suspense>
    </section>
  );
});
export { News };
