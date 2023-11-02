import { computeHeadingLevel } from '@testing-library/react';
import './App.css';
import ItemList from './ItemList';
import PropsComp from './PropsComp';
import Sample from './Sample';
import PropsCompCls from './PropsComCls';

function App() {
  const names = ['anil', 'sunil', 'joydip']
  const sampleCallback = (e) => console.log(e)
  const another = (val, e) => console.log(val)
  return (
    <div>
      <button onClick={
        (e) => {
          //console.log(e)
          another('some data', e)
        }
      }>Click Me!!!</button>
      <br />
      <br /><br />
      <ItemList listOfNames={names} />
      <br />
      <Sample />
      <br />
      <PropsComp sampleAttr='verizon' sampleFnAttr={sampleCallback} />
      <br />
      <PropsCompCls sampleAttr='verizon' sampleFnAttr={sampleCallback} />
    </div>
  );
}

export default App;

//ItemList({listOfNames:[]})
