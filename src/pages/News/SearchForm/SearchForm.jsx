import React, { useState, memo, useMemo } from "react";

const SearchForm = memo(function (props) {
  const query = props.query;

  console.log(query);
  const [search, setSearch] = useState(query ? query : "");
  console.log(search);

  function handlerSubmit(event) {
    event.preventDefault();
    props.setSearchParams({ posts: search });
  }

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
