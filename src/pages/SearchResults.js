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
    is_good: false
}

function SearchResults({ results  }) {
    const [movieToPost, setMovieToPost] = useState(initialMovieObject);

    const handleAddMovieTodb = (e) => {
        if (e.target.type === 'checkbox'|| e.target.type === 'submit' || e.target.tagName === 'FORM') {
            return
        }

        console.log(e.target)

        const checkbox = document.querySelectorAll(`.${e.target.id}`);
        checkbox.forEach(elem => elem.classList.toggle('hidden'));

        const options = {
            method: 'GET',
            url: `https://data-imdb1.p.rapidapi.com/movie/id/${e.target.id}/`,
            headers: {
              'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
              'x-rapidapi-key': '5a7004bf33mshe25977a0a22602cp172ef1jsn8587be47b445'
            }
          };
        axios.request(options).then(response => {
            setMovieToPost({
                imdb_id: response.data.results.imdb_id,
                title: response.data.results.title,
                image_url: response.data.results.image_url,
                rating: JSON.stringify(response.data.results.rating),
                release_date: response.data.results.release,
                description: response.data.results.description,
                is_good: null
            })
        }).catch(error => console.log(error))
    }

    return (
        <>
        <div className="search-result">
            {!results ? undefined : results.map((res, i) => {
                return (
                    <div key={i} id={res.imdb_id} className="search-result-card" onClick={handleAddMovieTodb}>
                        <IsGoodCheckAndSubmit setIsGood={setMovieToPost} isGood={movieToPost} idClass={res.imdb_id} />
                        <span id={res.imdb_id}>{res.title}</span>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default SearchResults;
