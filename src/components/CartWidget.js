
import { Button } from 'react-bootstrap';

export default function CartWidget(){
    return (  
        <Button style={{backgroundColor: "transparent", borderColor: "transparent", marginLeft: 1130}}>
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