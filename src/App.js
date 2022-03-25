import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';



function App() {
  return (
    <div>
      <header>
        <NavBar/>
        <ItemListContainer greeting={'Todo lo que tu pc necesita'}/>
      </header>
    </div>
  );
}

export default App;
