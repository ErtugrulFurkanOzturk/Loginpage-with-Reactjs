import React, { useState, useEffect } from "react";


const HookCounter = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("Updating....");
    document.title = `${counter}`;
  }, [counter]);

  return(
    <div>
       <button onClick={() => setCounter(prevCounter => prevCounter + 1)}>İncrease {counter}</button>
       <button onClick={() => setCounter(prevCounter => prevCounter - 1)}>Decrease {counter}</button>
    </div>
  );
}


export default HookCounter;
