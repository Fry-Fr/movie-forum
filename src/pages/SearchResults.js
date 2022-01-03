import axios from "axios";

function SearchResults({ results }) {
    const handleAddMovieTodb = (e) => {
        e.stopPropagation();
        console.log('imdb_id', e.target.id, e.target)
        const options = {
            method: 'GET',
            url: `https://data-imdb1.p.rapidapi.com/movie/id/${e.target.id}/`,
            headers: {
              'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
              'x-rapidapi-key': '5a7004bf33mshe25977a0a22602cp172ef1jsn8587be47b445'
            }
          };
        axios.request(options).then(response => {
            console.log(response.data)
        }).catch(error => console.log(error))
    }

    return (
        <>
        <div className="search-result">
            {!results ? undefined : results.map((res, i) => {
                return (
                    <div key={i} id={res.imdb_id} className="search-result-card" onClick={handleAddMovieTodb}>
                        <span id={res.imdb_id}>{res.title}</span>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default SearchResults;
