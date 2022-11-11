import React, { memo, useMemo } from "react";
import { useAsyncValue } from "react-router-dom";

const New = memo(function (props) {
  const post = useMemo(() => useAsyncValue(), []);
  return (
    <div style={{ padding: "20px 0px" }}>
      <h1 style={{ fontSize: "30px" }}>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
});

export { New };
