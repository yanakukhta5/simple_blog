import React, { Suspense, useMemo, memo } from "react";
import { New } from "./New";
import { Comments } from "./Comments";
import { Await, useLoaderData, useAsyncError } from "react-router-dom";

function AsyncErrorElement() {
  const error = useAsyncError();
  return <p>Uh Oh, something went wrong! {error.message}</p>;
}

const SingleNew = memo(function () {
  const { post, comments } = useLoaderData();
  return (
    <div style={{ padding: "20px 20px 0px 20px" }}>
      <Suspense fallback={<p>loading New</p>}>
        <Await resolve={post} errorElement={<AsyncErrorElement />}>
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
