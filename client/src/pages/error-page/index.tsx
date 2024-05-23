import { useRouteError } from "react-router-dom";

export default function __errorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className=" text-gray-300 p-10">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i className=" text-gray-300">{error.statusText || error.message}</i>
      </p>
    </div>
  );
}