import InputSearch from '../../components/InputSearch';
import ProductCard from '../../components/ProductCard';

import './styles.css';

const Catalog = () => (
  <div className="container-fluid catalag-container">
    <div className="row">
      <div className="base-card search-card">
        <InputSearch />
      </div>
    </div>
    <div className="row">
      {[...Array(7)].map((_, index) => (
        <div className="col-md-6 col-lg-4" key={index}>
          <ProductCard />
        </div>
      ))}
    </div>
  </div>
);

export default Catalog;
