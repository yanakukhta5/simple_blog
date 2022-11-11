import React, { Suspense, useMemo, memo } from "react";
import { New } from "./New";
import { Comments } from "./Comments";
import { Await, useLoaderData } from "react-router-dom";

const SingleNew = memo(function () {
  const { post, comments } = useMemo(() => useLoaderData(), []);
  return (
    <div style={{ padding: "20px 20px 0px 20px" }}>
      <Suspense fallback={<p>loading New</p>}>
        <Await resolve={post}>
          <New />
        </Await>
      </Suspense>
      <Suspense fallback={<p>loading Comments</p>}>
        <Await resolve={comments}>
          <Comments />
        </Await>
      </Suspense>
    </div>
  );
});

export { SingleNew };
