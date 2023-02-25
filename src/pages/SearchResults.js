import { useState } from "react";
import axios from "axios";

import IsGoodCheckAndSubmit from "../components/IsGoodCheckAndSubmit";

const initialMovieObject = {
    imdb_id: '',
    title: '',
    image_url: '',
    rating: '',
    release_date: '',
    description: '',
    is_good: null
}

function SearchResults({ results, auth, setApiMovies, setSearchBox }) {
    const [movieToPost, setMovieToPost] = useState(initialMovieObject);

    const handleAddMovieTodb = (e) => {
        if (e.target.type === 'checkbox'|| e.target.type === 'submit' || e.target.tagName === 'FORM') {
            return
        }

        const checkbox = document.querySelectorAll(`.${e.target.id}`);
        checkbox.forEach(elem => elem.classList.toggle('hidden'));

        const options = {
            method: 'GET',
            url: 'https://imdb8.p.rapidapi.com/title/get-overview-details',
            params: {tconst: `${e.target.id}`, currentCountry: 'US'},
            headers: {
              'X-RapidAPI-Key': '5a7004bf33mshe25977a0a22602cp172ef1jsn8587be47b445',
              'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
            }
          };
        axios.request(options).then(response => {
            setMovieToPost({
                imdb_id: e.target.id,
                title: response.data.title.title,
                image_url: response.data.title.image?.url,
                rating: JSON.stringify(response.data.ratings?.rating),
                release_date: response.data.releaseDate,
                description: response.data.plotSummary?.text,
                is_good: null
            })
        }).catch(error => console.log(error))
    }

    return (
        <>
        <div className="search-result">
            {!results ? undefined : results.map((res, i) => {
                res.id = res.id.replace("/title/", "").replace("/", "");
                return (
                    <div key={i} id={res.id} className="search-result-card" onClick={handleAddMovieTodb}>
                        <IsGoodCheckAndSubmit setIsGood={setMovieToPost} setApiMovies={setApiMovies} setSearchBox={setSearchBox} movieToPost={movieToPost} idClass={res.id} auth={auth} />
                        <span id={res.id}>{res.title}</span>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default SearchResults;
