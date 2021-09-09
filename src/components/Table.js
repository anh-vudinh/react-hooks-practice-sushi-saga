import React from "react";

function Table({ eatenPlateCount, spendingBudget, dollarsToSubtract}) {
  // renders an empty plate for every element in the array
  const emptyPlates = eatenPlateCount.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));
//    5.2, the amount of money remaining should go down by the cost of the sushi that was
//    eaten. There is a spot to display this number in the `Table` component.  
//    need to add an isEaten key to db to pass value down to table
  return (
    <>
      <h1 className="remaining">
        You have: ${spendingBudget-dollarsToSubtract} remaining!
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
