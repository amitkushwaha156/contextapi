import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {MyContextProvider  } from "./StoreContext";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
  <MyContextProvider>
    <App />
  </MyContextProvider>
  </StrictMode>
);
