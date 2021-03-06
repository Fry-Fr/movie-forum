import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className="nav-container">
            <Link to="/my_movies">My Movies</Link>
            <Link to="/watch_list">watch list</Link>
            <button className='toggle-search-btn'></button>
        </nav>
    )
}

export default Nav;
