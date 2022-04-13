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
    const [token, setToken] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const searchButton = document.querySelector('.toggle-search-btn');
        if (loading === undefined || loading === true) {
            searchButton.style.display = 'none';
        }
        if (loading === false) {
            searchButton.style.display = 'inline-block';
        }
        searchButton.addEventListener('click', (e) => {
            setSearchBox(!searchBox);
        });
        if (searchBox === true) {
            searchButton.textContent = 'close search';
        }else {
            searchButton.textContent = 'search';
        }
      },[searchBox, loading])
    
    useEffect(() => {
        if (loadedComponent === '') {
            navigate("/my_movies");
        }
        if (loading === undefined) {
            setLoading(true);
        }
        if (token === '') {
            axios.post('https://movie-forum-api.herokuapp.com/api/auth', {
                username: process.env.REACT_APP_USERNAME,
                password: process.env.REACT_APP_PASSWORD
            }).then(res => setToken(res.data.token))
            .catch(err => console.error(err))
        }
        if (token !== '') {
            axios.get('https://movie-forum-api.herokuapp.com/movies/',{
                headers: {
                    Authorization: token
                }
            }).then(response => {
                setApiMovies(response.data)
                setLoading(false);
            }).catch(err => console.log(err))
        }
    },[loadedComponent, navigate, loading, token])
    
    return (
        <main className="main-container">
            <div className="forum-container">
                {!searchBox ? <p>{loading === false ? loadedComponent : undefined}</p> : <SearchBox auth={token} />}
                {loading ? <LoadingSpinner /> : undefined}
                {loading === false && apiMovies.length === 0 ? <p>database is empty!</p> : undefined}
                <Routes>
                    <Route path="/my_movies" element={<MyMovies apiMovies={apiMovies} setCompon={setLoadedComponent} auth={token} />} />
                    <Route path="/watch_list" element={<WatchList apiMovies={apiMovies} setCompon={setLoadedComponent} auth={token} />} />
                    <Route path="/movie/:id" element={<Movie apiMovies={apiMovies} setCompon={setLoadedComponent} />} />
                </Routes>
            </div>
        </main>
    )
}

export default Forum;
