import React from "react";
import { useRouteError, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  const navigate = useNavigate();
  const handlegotohomepage = () => {
    navigate("/");
  };
  return (
    <div id="error-page">
      <h1>Oops! page not found</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <button onClick={handlegotohomepage}>go to home page</button>
    </div>
  );
};

export default ErrorPage;
