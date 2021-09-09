import React from "react";

function MoreButton({setSushiCounter, sushiCounter, sushiDataArrayLength}) {
// EC2. Full rotation! When the end of the line of sushi is reached, the conveyor
// belt should start from the beginning. Sushi that have already been eaten
// should remain eaten. It would be creepy if they reappeared!
  return <button onClick={()=>setSushiCounter((sushiCounter+4) % sushiDataArrayLength)}>More sushi!</button>;
}

export default MoreButton;
