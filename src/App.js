import './App.css';
import Header from "./components/Header";
import Input from "./components/Input";
import OperatorList from "./components/OperatorList";

function App() {
  return (
    <div className="App">
      <main id="container" className="container">
        <Header/>
        <Input/>
        <OperatorList/>
      </main>
    </div>
  );
}

export default App;
