import React from 'react';
import './App.css';

import InputRange from './component/InputRange';

function App() {

  let gibridStyles = `height:2px;`;

  let sliderStyles = `background:#000;border-color:#000;`;

  return (
    <div className="App">
      <InputRange
        minLength={1}
        maxLength={500}
        delemiter={5}
        activeColor="green"
        opacityColor="black"
        value={50}
        onChange={e => console.log(e.target.value)}
        gibridStyles={gibridStyles}
        sliderStyles={sliderStyles}
      />
    </div>
  );
}

export default App;
