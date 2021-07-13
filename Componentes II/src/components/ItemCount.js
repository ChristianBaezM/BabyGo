import React, { useState } from 'react';

export default function ItemCount({stock, initial}) {
  
  const [count, setCount] = useState(1);
  const [disable, setDisable] = useState(false);
  const add = () => {
      setCount(count + 1)
  };
  const subtract = () => {
      setCount((prevCount) => (Math.max(prevCount -1, 0)))
  };
  const disabling = () => {
    setDisable(true);
  };

  if (initial >= stock) {
    return (
      <div style={{marginTop: 30, textAlign: "center"}}>
        <button onClick={subtract} style={{marginRight: 20, backgroundColor: "red", borderRadius: 20}}>
          -
        </button>
        {count}
        <button disabled={disable} onClick={add, disabling} style={{marginLeft: 20, backgroundColor: "green", borderRadius: 20, fontFamily: "monospace", fontWeight: "bolder"}}>
          +
        </button>
      </div>
    );
  } else {
    return (
      <div style={{marginTop: 30, textAlign: "center"}}>
        <button onClick={subtract} style={{marginRight: 20, backgroundColor: "red", borderRadius: 20}}>
          -
        </button>
        {count}
        <button onClick={add} style={{marginLeft: 20, backgroundColor: "green", borderRadius: 20}}>
          +
        </button>
        <div>
          <button style={{borderRadius: 20, marginTop: 20, fontFamily: "monospace"}}>
            Agregar al carrito
          </button>
        </div>
      </div>
    );
  }
}