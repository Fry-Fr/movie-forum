import { useEffect, useState } from "react";
import {Routes, Route, useNavigate} from "react-router-dom"

import MyMovies from "../pages/MyMovies";

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
                </Routes>
            </div>
        </main>
    )
}

export default Forum;
