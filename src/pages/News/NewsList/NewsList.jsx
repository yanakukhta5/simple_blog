import React, { memo, useMemo } from "react";
import { NavLink } from "react-router-dom";

const NewsList = memo(function ({ news, query }) {
  query = useMemo(() => {
    if (query) return query;
    return "";
  }, [query]);
  return (
    <ul>
      {news
        .filter((elem) => elem.title.includes(query))
        .map((elem) => (
          <li key={elem.id}>
            <NavLink to={`/news/${elem.id}`}>{elem.title}</NavLink>
          </li>
        ))}
    </ul>
  );
});

export { NewsList };
