import React,{useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";


function App() {
// 1. The sushi list is properly received from the server and displayed in our app.
  const [sushiDataArray, setSushiDataArray] = useState([])
  const [repullDataArray, setRepullDataArray] = useState(false)
  useEffect(()=>{
    fetch(API)
    .then(resp=>resp.json())
    .then(data => {setSushiDataArray(data)
    })
  },[repullDataArray])

// 5.1 We need to make money! Whenever a sushi is eaten, customers should be
//    automatically charged! Based on a budget decided by you, the developer
  const [spendingBudget, setSpendingBudget] = useState(200)
  const [dollarsToSubtract, setDollarsToSubtract] = useState(0)
  const [eatenPlateCount, setEatenPlateCount] = useState([])

  function updateToDB(sushiToUpdate){
    fetch(`${API}/${sushiToUpdate.id}`,{
      method: "PATCH",
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify(sushiToUpdate)
    })
      .then(resp => resp.json())
      .then(() => {
        setEatenPlateCount([...eatenPlateCount,[]])
      })
  }
  

  return (
    <div className="app">
      <SushiContainer
      sushiDataArray={sushiDataArray}
      updateToDB={updateToDB}
      spendingBudget={spendingBudget}
      dollarsToSubtract={dollarsToSubtract}
      setDollarsToSubtract={setDollarsToSubtract}
      repullDataArray={repullDataArray}
      setRepullDataArray={setRepullDataArray}/>
      <Table
      spendingBudget={spendingBudget}
      dollarsToSubtract={dollarsToSubtract}
      setSpendingBudget={setSpendingBudget}
      eatenPlateCount={eatenPlateCount}/>
    </div>
  );
}

export default App;
