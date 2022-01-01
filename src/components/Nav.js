import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className="nav-container">
            <Link to="/my_movies">My Movies</Link>
            <Link to="/good">worth the time</Link>
            <Link to="/not_good">waste of time</Link>
        </nav>
    )
}

export default Nav;
