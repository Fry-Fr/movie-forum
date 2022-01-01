import { useState } from "react";
import MovieCard from "./MovieCard";

function Forum() {
    const [loadedComponent, setLoadedComponent] = useState('<My Movies/>');
    return (
        <main className="main-container">
            <div className="forum-container">
                <p>{loadedComponent}</p>
                <MovieCard/>
            </div>
        </main>
    )
}

export default Forum;
