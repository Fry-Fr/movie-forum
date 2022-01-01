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
    },[])
    
    return (
        <main className="main-container">
            <div className="forum-container">
                <p>{loadedComponent}</p>
                <Routes>
                    <Route path="/my_movies" element={<MyMovies compon={setLoadedComponent} />} />
                    <Route path="/good" element={<GoodMovies compon={setLoadedComponent} />} />
                    <Route path="/not_good" element={<NotGoodMovies compon={setLoadedComponent} />} />
                </Routes>
            </div>
        </main>
    )
}

export default Forum;
