import React, {useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushiMenu, setSushi] = useState([]);
  const [bill, setBill] = useState([]);
  const wallet = 100 - bill.reduce((x,y) => x+y, 0);
  
  useEffect(()=>{
    fetch(API)
    .then(r=> r.json())
    .then(r=> setSushi(r));
  }, [])

  function addToBill(price){
    const updatedBill = [...bill, price];
    setBill(updatedBill)
  }

  return (
    <div className="app">
      <SushiContainer 
        sushiMenu={sushiMenu} 
        onSushiClick={addToBill}
        wallet={wallet}
      />
      <Table 
        wallet={wallet}
        plates={bill} 
      />
    </div>
  );
}

export default App;
