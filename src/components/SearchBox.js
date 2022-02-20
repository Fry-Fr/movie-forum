import { useState, useEffect } from "react";
import axios from "axios";

import SearchResults from "../pages/SearchResults";

function SearchBox() {
    const [searchResults, setSearchResults] = useState([]);
    const [search, setSearch] = useState('');

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
        setSearch(e.target.value);
    }

    useEffect(() => {
        if (search.length > 0) {
            const stopTimeout = setTimeout(() => {
                axios.request(searchReq(search)).then(function (response) {
                    setSearchResults(response.data.results)
                }).catch(function (error) {
                    console.error(error);
                });
            },1000)
            return () => clearTimeout(stopTimeout);
        }else {
            setSearchResults([]);
        }
    },[search])

    return (
        <>
        <input type="text" name="search" placeholder="Search..." onChange={handleSearch} autoFocus/>
        <SearchResults results={searchResults} />
        </>
    )
}

export default SearchBox;
