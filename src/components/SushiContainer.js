import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({sushiDataArray, updateToDB, spendingBudget, dollarsToSubtract, setDollarsToSubtract, repullDataArray,setRepullDataArray}) {

  // 2. Only 4 sushi are rendered at a time.
  const [sushiCounter, setSushiCounter] = useState(0)

  const singleSushiObject = sushiDataArray.map(sushi => <Sushi 
    key={sushi.id}
    sushi={sushi}
    updateToDB={updateToDB}
    spendingBudget={spendingBudget}
    dollarsToSubtract={dollarsToSubtract}
    setDollarsToSubtract={setDollarsToSubtract}
    repullDataArray={repullDataArray}
    setRepullDataArray={setRepullDataArray}
    />).slice(sushiCounter,sushiCounter+4)
  
// 3. Clicking the "More Sushi!" button shows the next set of 4 sushi in the list.
//    For this assignment, you don't have to be concerned about what happens when
//    you reach the end of the sushi list.
  return (
    <div className="belt">
      {/* Render Sushi components here! */}
      {singleSushiObject}
      <MoreButton setSushiCounter={setSushiCounter} sushiCounter={sushiCounter} sushiDataArrayLength={sushiDataArray.length}/>
    </div>
  );
}

export default SushiContainer;
