import Catalogs from "../../components/catalogs/Catalogs";
import Categories from "../../components/categories/Categories";

import Reviews from "../../components/reviews/Reviews";
import Promo from "../../components/promo/Promo";

const HomePage = () => {
  return (
    <>
      <Promo />
      <Catalogs />
      <Categories />
      <Reviews />
    </>
  );
};

export default HomePage;
