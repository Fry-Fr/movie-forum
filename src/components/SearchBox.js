import { useState } from "react";
import axios from "axios";

import SearchResults from "../pages/SearchResults";

function SearchBox() {
    const [searchValues, setSearchValue] = useState([])

    const searchReq = (string) => {
        const options = {
            method: 'GET',
            url: `https://data-imdb1.p.rapidapi.com/movie/imdb_id/byTitle/${string}/`,
            headers: {
              'x-rapidapi-host': 'data-imdb1.p.rapidapi.com',
              'x-rapidapi-key': '5a7004bf33mshe25977a0a22602cp172ef1jsn8587be47b445'
            }
          };
          
        return options;
    }
    
    const handleSearch = (e) => {
        e.preventDefault();
        if (e.target.value.length > 0) {
            axios.request(searchReq(e.target.value)).then(function (response) {
                setSearchValue(response.data.results)
            }).catch(function (error) {
                console.error(error);
            });
        }
    }

    return (
        <>
        <input type="text" name="search" placeholder="Search..." onChange={handleSearch} />
        <SearchResults results={searchValues} />
        </>
    )
}

export default SearchBox;
