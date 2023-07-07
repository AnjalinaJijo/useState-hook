import React, { useState } from "react";

function App() {
  const [count, countFunc] = useState(70);

  function decrease() {
    countFunc(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
