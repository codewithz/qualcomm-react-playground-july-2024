import logo from './logo.svg';
import './App.css';
import { HelloComponent } from './components/HelloComponent';
import HelloComponentF from './components/HelloComponentF';
import NameComponent from './components/NameComponent';
import TickerComponent from './components/TickerComponent';
import NameChangeComponent from './components/NameChangeComponent';
import IncDecComponent from './components/IncDecComponent';

function App() {
  return (
    <div className="App">
     <h1>Welcome to Qualcomm</h1>
     <hr />
     <HelloComponent />
     <hr />
     <HelloComponentF />
     <hr />
     <NameComponent name="Zartab M Nakhwa" 
     message="Check out my channel Code With Z" />
     <hr />
     <TickerComponent/>
     <hr />
     <NameChangeComponent />
     <hr />
     <IncDecComponent />

    </div>
  );
}

export default App;
