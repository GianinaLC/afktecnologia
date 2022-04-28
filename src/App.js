import './App.css';
import Navbar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer/Footer'
import { CartContextProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Form from './components/Form/Form'


function App() {
  
  return (
		<div>
			<CartContextProvider>
				<BrowserRouter>
					<Navbar/>
					<Routes>
						<Route path='*' element={<h1>NOT FOUND 404</h1>}/>
						<Route path='/' element={<ItemListContainer greeting={'Todo lo que tu pc necesita'}/>}/>
						<Route path='/category/:categoryId' element={<ItemListContainer />} />
						<Route path='/item/:productId' element={<ItemDetailContainer/>} />
						<Route path='/cart' element={<Cart/>} />
						<Route path='/form' element={<Form/>} />
					</Routes>
					<Footer />
				</BrowserRouter>
			</CartContextProvider>
    </div>
  );
}

export default App;
