import './App.css';
import Navbar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  
  return (
		<div>
			<BrowserRouter>
				<Navbar/>
				<Routes>
					<Route path='/' element={<ItemListContainer greeting={'Todo lo que tu pc necesita'}/>} />
					<Route path='/category/:categoryId' element={<ItemListContainer />} />
					<Route path='/item/:productId' element={<ItemDetailContainer/>} />
				</Routes>
			</BrowserRouter>
    </div>
  );
}

export default App;
