import React, { useState } from 'react';
import './App.css';
import ItemList from './ItemList';
import Sample from './Sample';
import PropsComp from './PropsCom';
import PropsCompCls from './PropsCompCls';


function App() {

  const [names, setNames] = useState<string[]>(['anil', 'sunil', 'joydip'])
  const updateName = (newName: string, index: number): void => {

    const copy = [...names]
    copy.splice(index, 1, newName)
    setNames(copy)

    // setNames(
    //   (oldNameArray) => {
    //     const copy = [...oldNameArray]
    //     copy.splice(index, 1, newName)
    //     return copy
    //   }
    // )
  }
  return (
    <div>
      <ItemList
        listOfNames={names}
        nameChangeHandler={updateName}
      />
      <br />
      <Sample />
      <br /><br />
      <PropsComp sampleAttr='verizon' sampleFnAttr={() => console.log('ignoring event object')} />
      <br /><br />
      <PropsCompCls sampleAttr='verizon' sampleFnAttr={() => console.log('ignoring event object')} />
    </div>
  );
}

export default App;
