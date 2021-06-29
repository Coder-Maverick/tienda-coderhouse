import ItemListContainer from './containers/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';

function App() {

  return (
    <>
        <NavBar />
        <ItemDetailContainer />
        <ItemListContainer />
    </>
  );
}

export default App;
