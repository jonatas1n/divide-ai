import { AppProvider } from "./hooks/Context";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Products } from "./pages/Products";
import { Guests } from "./pages/Guests";
import { Costs } from "./pages/Costs";
import { Result } from "./pages/Result";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import { Layout } from "./components/Layout";

import "@fontsource/lexend/400.css";
import "@fontsource/lexend/500.css";
import "@fontsource/lexend/700.css";
import { NotFound } from "./pages/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Guests />} />
      <Route path="guests" element={<Guests />} />
      <Route path="products" element={<Products />} />
      <Route path="costs" element={<Costs />} />
      <Route path="result" element={<Result />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
