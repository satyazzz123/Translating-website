
import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Translate from './Components/Translate';

function App() {
  return (
    <div className="App">
        <Router>
    
    <Routes>
<Route exact path="/" element={<Home/>} />
<Route exact path="/translate" element={<Translate/>} />


    </Routes>
   
  </Router> 
    </div>
  );
}

export default App;
