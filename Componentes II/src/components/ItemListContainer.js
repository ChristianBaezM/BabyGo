import '../styles/welcome.css';
import ItemCount from '../components/ItemCount';

export default function Welcome(props) {
    return (
        <div>
            <h1 className="Welcome">Welcome to {props.brand}</h1>
            <ItemCount stock="5" initial="7"/>
            <ItemCount stock="5" initial="3"/>
        </div>
    );
  }