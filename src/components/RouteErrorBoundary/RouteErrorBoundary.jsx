import React, { memo } from "react";

const RouteErrorBoundary = memo(function () {
  const error = useRouteError();
  console.error(error);
  if (isRouteErrorResponse(error)) {
    return <div>{error.statusText}</div>;
  }
  throw new Error();
});

export { RouteErrorBoundary };
