import React, { memo, useMemo } from "react";
import { useAsyncValue } from "react-router-dom";

const Comments = memo(function () {
  const comments = useAsyncValue();
  return (
    comments.length != 0 && (
      <div>
        <h2>Comments: </h2>
        <ul>
          {comments.map((obj) => (
            <React.Fragment key={obj.id}>
              <li style={{ marginBottom: "20px" }}>
                <p>{obj.email}</p>
                <p>{obj.body}</p>
              </li>
            </React.Fragment>
          ))}
        </ul>
      </div>
    )
  );
});

export { Comments };
