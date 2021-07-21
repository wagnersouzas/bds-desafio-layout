import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Catalog from './pages/Catalog';
import Home from './pages/Home';

const Routers = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/catalog" component={Catalog} />
    </Switch>
  </BrowserRouter>
);

export default Routers;
