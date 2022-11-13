import React, { useState, memo } from "react";
import { useEffect } from "react";

const SearchForm = memo(function ({ query, setSearchParams }) {
  const searchQuery = query ? query : "";
  const [search, setSearch] = useState(searchQuery);

  function handlerSubmit(event) {
    event.preventDefault();
    setSearchParams({ posts: search });
  }

  useEffect(() => {
    setSearch(searchQuery);
  }, [query]);

  return (
    <form
      action="/"
      style={{ margin: "20px" }}
      className="searchform"
      onSubmit={handlerSubmit}
    >
      <input
        type="search"
        name="search"
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <input type="submit" value="Search" />
    </form>
  );
});

export { SearchForm };
