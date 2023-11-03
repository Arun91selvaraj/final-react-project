import { useState } from 'react';
import './App.css';
import NameComp from './NameComp';
import ValueComp from './ValueComp';

function App() {
  console.log('App rendered')
  const [nameState, setNameState] = useState<string>('')
  const [valueState, setValueState] = useState<number>(0)
  const [showState, setShowState] = useState<boolean>(true)

  const nameHandler = (newName: string) => {
    setNameState(newName)
  }
  const valueHandler = () => {
    setValueState(
      (oldValue) => oldValue + 1
    )
  }
  const showHandler = () => {
    setShowState(
      oldState => !oldState
    )
  }
  return (
    <div>
      <button type='button' onClick={showHandler}>{showState ? 'Hide' : 'Show'}</button>
      <br />
      <br />
      <NameComp name={nameState} nameChangeHandler={nameHandler} />
      <br />
      <br />
      {
        showState && <ValueComp value={valueState} valueChangeHandler={valueHandler} />
      }
    </div>
  );
}

export default App;
