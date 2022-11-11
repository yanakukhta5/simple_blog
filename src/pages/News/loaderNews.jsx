import { defer } from "react-router-dom";

async function getData(data) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/${data}`);
  const result = await response.json();
  return result;
}

async function loaderNews() {
  return defer({
    news: getData("posts"),
  });
}

export { loaderNews };
