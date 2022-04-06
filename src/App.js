import './App.css';
import Navbar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  
  return (
    <div>
        <Navbar/>
        <ItemListContainer greeting={'Todo lo que tu pc necesita' }/>
        <ItemDetailContainer/>
    </div>
  );
}

export default App;
