import Promo from "../../components/promo/Promo";
import Catalogs from "../../components/catalogs/Catalogs";
import Categories from "../../components/categories/Categories";
import Reviews from "../../components/reviews/Reviews";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>SHOP.CO | E-commerce</title>
        <meta name="description" content="Shop.co | E-commerce" />
      </Helmet>
      <Promo />
      <Catalogs />
      <Categories />
      <Reviews />
    </>
  );
};

export default HomePage;
