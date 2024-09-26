import Foother from "./components/foother/Foother";
import Header from "./components/header/Header";
import { useTheme } from "@chakra-ui/react";

function App() {
  const theme = useTheme();

  return (
    <>
      <Header />
      <Foother />
    </>
  );
}

export default App;
