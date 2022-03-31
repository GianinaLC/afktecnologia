import './App.css';
import Navbar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  
  return (
    <div>
        <Navbar/>
        <ItemListContainer greeting={'Todo lo que tu pc necesita' }/>
    </div>
  );
}

export default App;
