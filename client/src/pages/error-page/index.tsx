import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="h-screen flex flex-col justify-center items-center bg-gray-900 text-gray-300 p-10">
      <h1 className="text-4xl font-bold mb-4">Oops!</h1>
      <p className="text-lg mb-2">Sorry, an unexpected error has occurred.</p>
      <p className="italic text-red-400">
        {error.statusText || error.message}
      </p>
    </div>
  );
}
