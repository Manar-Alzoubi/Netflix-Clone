import logo from './logo.svg';
import './App.css';
import {Route,Routes,Switch} from 'react-router-dom';
import Home from './components/Home/Home';


function App() {
  return (
    <Routes>
      
       <Route path='/trending'  element={<Home/>} /> 
     
    </Routes>
  );
}

export default App;
