import React, {useState} from "react";

function Sushi({sushi, updateToDB, spendingBudget, dollarsToSubtract, setDollarsToSubtract, repullDataArray, setRepullDataArray}) {
  const {name, img_url, price, eaten} = sushi

  const [isEaten, setIsEaten] = useState(eaten)

// 6. No free meals! Customers cannot eat any sushi that exceeds the amount of
//    money remaining in their balance.
  function canEatSushi(){
    if(sushi.eaten !== true && (spendingBudget-dollarsToSubtract-price) >= 0){
      //remove money
      setIsEaten(true)
      const sushiToUpdate = {
        "id":sushi.id,
        "eaten": true
      }
      setRepullDataArray(!repullDataArray)
      setDollarsToSubtract(dollarsToSubtract+price)
      return updateToDB(sushiToUpdate)
    }
  }

// 4. Clicking a sushi on a plate will eat the sushi, causing it to be removed from
//    its plate and an empty plate to appear on the table.
  return (
    <div className="sushi">
      <div className="plate" onClick={canEatSushi}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? null : (<img src={img_url} alt={name}width="100%"/>)}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
