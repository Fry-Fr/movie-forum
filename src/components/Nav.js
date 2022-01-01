import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className="nav-container">
            <Link to="">My Movies</Link>
            <Link to="">worth the time</Link>
            <Link to="">waste of time</Link>
        </nav>
    )
}

export default Nav;
