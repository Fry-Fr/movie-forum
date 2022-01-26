import { useEffect, useState } from "react";
import {Routes, Route, useNavigate} from "react-router-dom";
import axios from "axios";

import MyMovies from "../pages/MyMovies";
import WatchList from "../pages/WatchList";
import Movie from "../pages/Movie";
import SearchBox from "./SearchBox";

function Forum() {
    const [apiMovies, setApiMovies] = useState([]);
    const [loadedComponent, setLoadedComponent] = useState('');
    const [searchBox, setSearchBox] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        document.addEventListener("keypress", (e) => {
          e.stopPropagation();
          if (e.key === 'S') {
            setSearchBox(!searchBox)
          }
        })
      },[searchBox])

    
    useEffect(() => {
        if (loadedComponent === '') {
            navigate("/my_movies");
        }
        axios.get('https://movie-forum-api.herokuapp.com/movies/').then(response => {
            setApiMovies(response.data)
        }).catch(err => console.log(err))
    },[loadedComponent, navigate])
    
    return (
        <main className="main-container">
            <div className="forum-container">
                {!searchBox ? <p>{loadedComponent}</p> : <SearchBox />}
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
