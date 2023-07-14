import './App.css';
import Home from './page/home';
import Problem from './page/problem';
import openCity from './page/js';
import Pay from './page/payment';
import { Routes, Route} from "react-router-dom";

function App() {
    return (
      <div className="App">
        <Routes>
          <Route path='/s' element={<Home />}/>
          <Route path='/payment' element={<Pay/>}/>
          <Route path='/page/problem' element={<Problem/>}/>
          <Route path='/page/index.html' element={<Home/>}/>
        </Routes>
      </div>
    )
}

export default App;
