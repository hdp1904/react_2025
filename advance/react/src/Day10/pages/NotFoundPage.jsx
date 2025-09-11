import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function NotFoundPage() {

  useEffect(() => {
    const id = setTimeout(() => {
      history.push("/about");
    }, 2000);

    return clearTimeout(id);
  }, []);

  // return <Redirect to={"/"} />;
  return <h1>404 NotFoundPage</h1>;
}
