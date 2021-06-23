import ItemListContainer from './containers/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { useEffect, useState } from 'react';

function App() {

  const [producto, setProductos] = useState([]);

  //Extraer los Datos
  useEffect(()=> {
    const consultarBase = async () => {
      const url = 'https://api.mercadolibre.com/sites/MLA/search?q=joyas';
      const respuesta = await fetch(url);
      const items = await respuesta.json();
      setProductos(items.results);
    }
    consultarBase();
  },[])

  return (
    <>
        <NavBar />
        <ItemListContainer 
          producto={producto}
        />
    </>
  );
}

export default App;
