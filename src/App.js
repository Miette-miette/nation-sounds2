import Home from './Pages/Home';
import Partenaire from './Pages/Partenaire';
import MentionsLegales from './Pages/mentions-legales';
import ReseauxSociaux from './Pages/ReseauxSociaux';
import Concerts from './Pages/Concerts';
import Carte from './Pages/Carte';
import Programmation from './Pages/Programmation';
import FAQ from './Pages/FAQ';

import Alert from './Components/Alert/Alert';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Assets/style/style.css';
import HeaderBg from './Components/HeaderBg/HeaderBg';
import PageArtist from './Components/PageArtist/PageArtist';
import PageNews from './Components/PagesNews/PageNews';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Alert/>
          <Navbar />
          <HeaderBg/>
        </header>
        <div className="content">
            <Routes>
              <Route exact path='/home' element={<Home />}/>
              <Route exact path='/programmation' element={<Programmation />}/>
              <Route exact path='/concerts' element={<Concerts />}/>
              <Route exact path='/carte' element={<Carte />}/>
              <Route exact path='/partenaires' element={<Partenaire />}/>
              <Route exact path='/reseaux-sociaux' element={<ReseauxSociaux />}/>
              <Route exact path='/mentions-legales' element={<MentionsLegales />}/>
              <Route exact path='/faq' element={<FAQ />}/>
              <Route path='*' element={<Home />}/>   
              <Route path='/artiste/:id' element={<PageArtist />}/>
              <Route path='/news/:id' element={<PageNews />}/>
            </Routes>
        </div>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
