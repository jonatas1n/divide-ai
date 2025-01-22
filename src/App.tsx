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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/divide-ai" element={<Layout />}>
      <Route index element={<Guests />} />
      <Route path="guests" element={<Guests />} />
      <Route path="products" element={<Products />} />
      <Route path="costs" element={<Costs />} />
      <Route path="result" element={<Result />} />
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
