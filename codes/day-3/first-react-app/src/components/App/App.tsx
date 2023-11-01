import CounterWithClass from '../counter-with-class/CounterWithClass';
import CounterWithStateHook from '../counter-with-state-hook/CounterWithStateHook';
import Header from '../header/Header';
import './App.css';

function App() {
  const message = 'Welcome to React JS'
  // const propertyObject = { messageData: message }
  // const headerElement = Header(propertyObject)
  return (
    <div className="App">
      {/* {headerElement} */}
      <Header messageData={message} />
      <br /><br /><br />
      <CounterWithClass />
      <br /><br />
      <CounterWithStateHook />
    </div>
  );
}

export default App;

//Header({messageData:'welcome to react js'})
