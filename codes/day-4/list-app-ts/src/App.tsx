import React, { useState } from 'react';
import './App.css';
import ItemList from './ItemList';


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
    </div>
  );
}

export default App;
