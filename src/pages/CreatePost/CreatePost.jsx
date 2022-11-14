import React, { memo } from "react";
import { Form } from "react-router-dom";

const CreatePost = memo(function () {
  return (
    <>
      <Form method="post" action="">
        <input type="text" name="title" id="title" placeholder="title" />
        <input type="text" name="body" id="body" placeholder="text" />
        <input type="submit" value="submit" />
      </Form>
    </>
  );
});

export { CreatePost };
