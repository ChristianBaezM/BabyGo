import { Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar(){
    return (
        <Navbar style={{backgroundColor: "#cfe0ff"}}>
            <Navbar.Brand href="#home">
            <img
                alt="LOGO"
                src="/assets/baby.png"
                width="40"
                height="40"
                className="d-inline-block align-top"
            />{' '}
            <span style={{color: "salmon", fontWeight: "bolder", fontFamily: "monospace", fontSize: 25, marginLeft: 20}}>Baby Go!</span>
            </Navbar.Brand>
        </Navbar>
    );
}