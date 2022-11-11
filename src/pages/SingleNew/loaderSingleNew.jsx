import { defer } from "react-router-dom";

async function getPost(id) {
  const responce = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const result = await responce.json();
  return result;
}

async function getComments(id) {
  const responce = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId=${id}`
  );
  const result = await responce.json();
  return result;
}

async function loaderSingleNew({ params }) {
  const id = params.id;
  return defer({
    post: getPost(id),
    comments: getComments(id),
  });
}

export { loaderSingleNew };
