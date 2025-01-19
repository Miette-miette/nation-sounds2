import Home from './Pages/Home';
import Partenaire from './Pages/Partenaire';
import MentionsLegales from './Pages/mentions-legales';
import ReseauxSociaux from './Pages/ReseauxSociaux';
import Concerts from './Pages/Concerts';
import Programmation from './Pages/Programmation';

import Alert from './Components/Alert/Alert';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Assets/style/style.css';



function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Alert/>
          <Navbar />
        </header>
        <div className="content">
            <Routes>
              <Route exact path='/home' element={<Home />}/>
              <Route exact path='/programmation' element={<Programmation />}/>
              <Route exact path='/concerts' element={<Concerts />}/>
              <Route exact path='/partenaires' element={<Partenaire />}/>
              <Route exact path='/reseaux-sociaux' element={<ReseauxSociaux />}/>
              <Route exact path='/mentions-legales' element={<MentionsLegales />}/>
              <Route path='*' element={<Home />}/>     
            </Routes>
        </div>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
