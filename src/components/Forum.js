import { useEffect, useState } from "react";
import {Routes, Route, useNavigate} from "react-router-dom";

import MyMovies from "../pages/MyMovies";
import GoodMovies from "../pages/GoodMovies";
import NotGoodMovies from "../pages/NotGoodMovies";
import Movie from "../pages/Movie";

export const movies = [
    {
        id: 1,
        image_url: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
        title: "Matrix",
        rating: "8.7",
        good: true,
        description: "Thomas A. Anderson is a man living two lives. By day he is an average computer programmer and by night a hacker known as Neo. Neo has always questioned his reality, but the truth is far beyond his imagination."
    },
    {
        id: 2,
        image_url: "https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
        title: "The Matrix Reloaded",
        rating: "7.2",
        good: false,
        description: "Movie DIn this second adventure, Neo and the rebel leaders estimate that they have 72 hours until Zion falls under siege to the Machine Army."
    },
    {
        id: 3,
        image_url: "",
        title: "Matrix Ressurection",
        rating: 0,
        good: false,
        description: "The plot is currently unknown."
    }
  ];

function Forum() {
    const [apiMovies, setApiMovies] = useState([]);
    const [loadedComponent, setLoadedComponent] = useState('');
    const navigate = useNavigate();

    
    useEffect(() => {
        if (loadedComponent === '') {
            navigate("/my_movies");
        }
        setApiMovies(movies)
    },[loadedComponent, navigate])
    
    return (
        <main className="main-container">
            <div className="forum-container">
                <p>{loadedComponent}</p>
                <Routes>
                    <Route path="/my_movies" element={<MyMovies apiMovies={apiMovies} setCompon={setLoadedComponent} />} />
                    <Route path="/good" element={<GoodMovies apiMovies={apiMovies} setCompon={setLoadedComponent} />} />
                    <Route path="/not_good" element={<NotGoodMovies apiMovies={apiMovies} setCompon={setLoadedComponent} />} />
                    <Route path="/movie/:id" element={<Movie apiMovies={apiMovies} setCompon={setLoadedComponent} />} />
                </Routes>
            </div>
        </main>
    )
}

export default Forum;
