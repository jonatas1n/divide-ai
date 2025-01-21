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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/conta-bar">
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
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;
