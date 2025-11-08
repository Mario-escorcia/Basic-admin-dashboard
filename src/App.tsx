import { RouterProvider } from "react-router";
import "./App.css";
import { routes } from "./routes/routes";
const router = routes;
function App() {
  return  <RouterProvider router={router}></RouterProvider>;
}

export default App;
