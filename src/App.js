import './App.css';
import Navbar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer/Footer'


function App() {
  
  return (
		<div>
			<BrowserRouter>
				<Navbar/>
				<Routes>
					<Route path='*' element={<h1>NOT FOUND 404</h1>}/>
					<Route path='/' element={<ItemListContainer greeting={'Todo lo que tu pc necesita'}/>} />
					<Route path='/category/:categoryId' element={<ItemListContainer />} />
					<Route path='/item/:productId' element={<ItemDetailContainer/>} />
				</Routes>
				<Footer />
			</BrowserRouter>
    </div>
  );
}

export default App;
