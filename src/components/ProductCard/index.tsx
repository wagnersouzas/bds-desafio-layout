import ButtonCar from '../ButtonCar';
import './styles.css';

import car from '../../asserts/images/car-card.png';

const ProductCard = () => (
  <div className="base-card product-card">
    <div className="card-top-container">
      <img src={car} alt="Carro do catalog de cor vermelha" />

      <h3>Audi Supra TT</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
        nisi
      </p>
    </div>
    <div className="card-bottom-container">
      <ButtonCar className="btn-card" children="COMPRAR" />
    </div>
  </div>
);
export default ProductCard;
