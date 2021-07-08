import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CartWidget(){
    return (  
        <Button style={{backgroundColor: "transparent", border: "transparent"}}>
            <img
                alt="BUY"
                src="/assets/buy.png"
                width="40"
                height="40"
                className="d-inline-block align-top"
            />{' '}  
        </Button>
    );
}