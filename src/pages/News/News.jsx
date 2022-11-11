import React, { Suspense, memo, useMemo } from "react";
import { useLoaderData, useSearchParams, Await } from "react-router-dom";
import css from "./News.module.css";
import { SearchForm } from "./SearchForm";
import { NewsList } from "./NewsList";

const News = memo(function () {
  const { news } = useMemo(() => useLoaderData(), []);
  const [searchParams, setSearchParams] = useMemo(() => useSearchParams(), []);
  const query = useMemo(() => searchParams.get("posts"), []);

  return (
    <section className={css.news}>
      <h1 className={css.title}>NEWS</h1>
      <>
        <SearchForm setSearchParams={setSearchParams} query={query} />
        <Suspense fallback={<p>Loading....</p>}>
          <Await resolve={news}>
            {(news) => <NewsList news={news} query={query} />}
          </Await>
        </Suspense>
      </>
    </section>
  );
});
export { News };
