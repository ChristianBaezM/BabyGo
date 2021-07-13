import './App.css';
import NavBar from './components/Navbar';
import Welcome from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <NavBar />
      <div>
        <Welcome brand='Baby Go!'/>
      </div>
    </div>
  );
}

export default App;
