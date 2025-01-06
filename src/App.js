import Home from './Pages/Home'
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Assets/style/style.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <div className="content">
            <Routes>
              <Route exact path='/home' element={<Home />}/>     
            </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
