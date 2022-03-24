import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <header className="Menu">
        <img src={'./images/afklogo1.png'} className="Logo-app" alt="logo" />
        <Navbar />
      </header>
    </div>
  );
}

export default App;
