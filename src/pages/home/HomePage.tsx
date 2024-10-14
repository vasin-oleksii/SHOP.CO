import Promo from "../../components/promo/Promo";
import Catalogs from "../../components/catalogs/Catalogs";
import Categories from "../../components/categories/Categories";
import Reviews from "../../components/reviews/Reviews";

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
