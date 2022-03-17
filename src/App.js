
import './App.css';
import Countries from './component/countries/Countries';
import Header from './component/Headers/Header';
import Persion from './component/Persion/Persion';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
      <Persion></Persion>
      
    </div>
  );
}

export default App;
