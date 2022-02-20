import { useEffect, useState } from "react";
import {Routes, Route, useNavigate} from "react-router-dom";
import axios from "axios";

import MyMovies from "../pages/MyMovies";
import WatchList from "../pages/WatchList";
import Movie from "../pages/Movie";
import SearchBox from "./SearchBox";
import LoadingSpinner from "./LoadingSpinner"

function Forum() {
    const [loading, setLoading] = useState(undefined);
    const [apiMovies, setApiMovies] = useState([]);
    const [loadedComponent, setLoadedComponent] = useState('');
    const [searchBox, setSearchBox] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const searchButton = document.querySelector('.toggle-search-btn');
        searchButton.addEventListener('click', (e) => {
            setSearchBox(!searchBox);
        });
        if (searchBox === true) {
            searchButton.textContent = 'close search';
        }else {
            searchButton.textContent = 'search';
        }
      },[searchBox])

    
    useEffect(() => {
        if (loadedComponent === '') {
            navigate("/my_movies");
        }
        if (loading === undefined) {
            setLoading(true);
        }
        axios.get('https://movie-forum-api.herokuapp.com/movies/').then(response => {
            setApiMovies(response.data)
            setLoading(false);
        }).catch(err => console.log(err))
    },[loadedComponent, navigate, loading])
    
    return (
        <main className="main-container">
            <div className="forum-container">
                {!searchBox ? <p>{loadedComponent}</p> : <SearchBox />}
                {loading ? <LoadingSpinner /> : undefined}
                {loading === false && apiMovies.length === 0 ? <p>database is empty!</p> : undefined}
                <Routes>
                    <Route path="/my_movies" element={<MyMovies apiMovies={apiMovies} setCompon={setLoadedComponent} />} />
                    <Route path="/watch_list" element={<WatchList apiMovies={apiMovies} setCompon={setLoadedComponent} />} />
                    <Route path="/movie/:id" element={<Movie apiMovies={apiMovies} setCompon={setLoadedComponent} />} />
                </Routes>
            </div>
        </main>
    )
}

export default Forum;
