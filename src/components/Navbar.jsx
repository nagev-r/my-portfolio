import {Link} from  'react-router-dom';
import './Navbar.css';
function Navbar() {
    return (
    <nav>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </nav>
    )
}
export default Navbar

