import Header from "./components/header/Header";
import Foother from "./components/foother/Foother";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Foother />
    </>
  );
}

export default App;
