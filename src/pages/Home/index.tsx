import { Link } from 'react-router-dom';
import imgcarro from '../../asserts/images/car-header.png';
import ButtonCar from '../../components/ButtonCar';
import './styles.css';

const Home = () => (
  <div className="home-container">
    <div className="base-card home-card">
      <div className="home-content-container">
        <div className="texto">
          <h1>O carro perfeito para você</h1>
          <p>
            Conheça nossos carros e dê mais um passo na realização do seu sonho
          </p>
        </div>
        <div className="home-image-container">
          <img src={imgcarro} alt="Carro de cor amerela" />
        </div>
      </div>
    </div>

    <div className="base-card">
      <div className="footer">
        <Link to="/catalog">
          <ButtonCar children="VER CATÁLAGO" />
        </Link>
        <p>Comece agora a navegar</p>
      </div>
    </div>
  </div>
);

export default Home;
