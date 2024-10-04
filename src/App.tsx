import Catalogs from "./components/catalogs/Catalogs";
import Categories from "./components/categories/Categories";
import Foother from "./components/foother/Foother";
import Header from "./components/header/Header";
import Promo from "./components/promo/Promo";

function App() {
  return (
    <>
      <Header />
      <Promo />
      <Catalogs />
      <Categories />
      <Foother />
    </>
  );
}

export default App;
