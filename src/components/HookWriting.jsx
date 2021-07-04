import React, { useState } from "react";

const HookWriting = ({ text, max }) => {

  const [hidden, setHidden] = useState (true)

  if(text.lenght < max){
    return <span>{text}</span>

  }

  return(
    <span>
      { hidden ? `${text.substr(0, max).trim()} ...` : text}
      { hidden ? (
        <button onClick={() => setHidden(false)}>Show more</button>
      ) : (
        <button onClick={() => setHidden(true)}>Show less</button>
      )}
    </span>
  );
}

export default HookWriting;
