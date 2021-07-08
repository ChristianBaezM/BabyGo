import './App.css';
import NavBar from './components/Navbar';
import CartWidget from './components/CartWidget';
import Welcome from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <NavBar />
      <div className="ShoppingCart">
        <CartWidget />
      </div>
      <div className="Welcome">
        <Welcome brand='Baby Go!'/>
      </div>
    </div>
  );
}

export default App;
