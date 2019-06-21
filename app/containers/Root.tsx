import * as React from "react";

import Routes from "../routes";
import { BrowserRouter } from "react-router-dom";

export default function Root() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}
