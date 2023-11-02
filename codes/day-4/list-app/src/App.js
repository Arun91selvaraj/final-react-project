import './App.css';
import ItemList from './ItemList';

function App() {
  const names = ['anil', 'sunil', 'joydip']
  return (
    <div>
      <ItemList listOfNames={names} />
      <br />
      <ItemList list={names} />
    </div>
  );
}

export default App;

//ItemList({listOfNames:[]})
