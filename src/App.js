
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
function App() {
  return (
    <div className="app">
    <Navbar />
    <div className='whole-pages'>
    <Home  /> 
    </div>
    
    </div>
  );
}

export default App;
