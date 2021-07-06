import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ItemListContainer from './containers/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>

        <Route exact path="/">
          <ItemListContainer />
        </Route>

        <Route path="/item/:id">
          <ItemDetailContainer />
        </Route>

        <Route path="/nosotros">
          <Nosotros />
        </Route>

        <Route path="/contacto">
          <Contacto />
        </Route>

        <Route path="/compras">
          <Contacto />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
