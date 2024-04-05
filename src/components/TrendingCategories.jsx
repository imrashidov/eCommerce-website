import TrendingCategoriesData from "../data/TrendingCategoriesData";
import { Link } from "react-router-dom";

const TrendingCategories = () => {
  return (
    <section id="Trend">
      <div className="container">
        <div className="trending-main">
          <h2 className="trending-heading">Trending Categories</h2>
          <div className="trending-categories">
            {TrendingCategoriesData.categories.map((category) => (
              <div key={category.id} className="trending-category group">
                <div className="trending-category__img">
                  <img src={category.image} alt={category.name} />
                </div>
                <Link className="group-hover:text-gray-400">
                  {category.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingCategories;
