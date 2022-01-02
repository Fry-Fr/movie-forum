import { useEffect, useState } from "react";
import {Routes, Route, useNavigate} from "react-router-dom"

import MyMovies from "../pages/MyMovies";
import GoodMovies from "../pages/GoodMovies";
import NotGoodMovies from "../pages/NotGoodMovies";

function Forum() {
    const [loadedComponent, setLoadedComponent] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/my_movies");
    },[navigate])
    
    return (
        <main className="main-container">
            <div className="forum-container">
                <p>{loadedComponent}</p>
                <Routes>
                    <Route path="/my_movies" element={<MyMovies setCompon={setLoadedComponent} />} />
                    <Route path="/good" element={<GoodMovies setCompon={setLoadedComponent} />} />
                    <Route path="/not_good" element={<NotGoodMovies setCompon={setLoadedComponent} />} />
                </Routes>
            </div>
        </main>
    )
}

export default Forum;
