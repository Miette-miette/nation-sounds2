import { Link } from "react-router-dom";
import logo from './Assets/media/logoNS/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <a href="index.html"> <img src={logo} alt="logo" id="logo" width="60"/></a>
        </div>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/create" style={{ 
            color: 'white', 
            backgroundColor: '#f1356d',
            borderRadius: '8px' 
            }}>New Blog</Link>
        </div>
    </nav>
  );
}
 
export default Navbar;