import Catalogs from "../../components/catalogs/Catalogs";
import Categories from "../../components/categories/Categories";

import Reviews from "../../components/reviews/Reviews";
import Promo from "../../components/promo/Promo";
import Header from "../../components/header/Header";
import Foother from "../../components/foother/Foother";

const HomePage = () => {
  return (
    <>
      <Header />

      <Promo />
      <Catalogs />
      <Categories />
      <Reviews />

      <Foother />
    </>
  );
};

export default HomePage;
