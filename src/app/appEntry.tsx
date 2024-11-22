import "../shared/index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { ThemeProvider } from "@/app/providers/ThemeProvider";

import { store } from "./appStore";
import { BaseLayout } from "./layout/BaseLayout";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <BaseLayout />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
