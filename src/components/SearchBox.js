import { useState, useEffect } from "react";
import axios from "axios";

import SearchResults from "../pages/SearchResults";

function SearchBox({ setApiMovies, setSearchBox, auth }) {
    const [searchResults, setSearchResults] = useState([]);
    const [search, setSearch] = useState('');

    const searchReq = (searchString) => {
        const options = {
            method: 'GET',
            url: 'https://imdb8.p.rapidapi.com/title/v2/find',
            params: {title: searchString, titleType: 'movie', limit: '10', sortArg: 'moviemeter,asc'},
            headers: {
              'X-RapidAPI-Key': '5a7004bf33mshe25977a0a22602cp172ef1jsn8587be47b445',
              'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
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
        <SearchResults results={searchResults} setApiMovies={setApiMovies} setSearchBox={setSearchBox} auth={auth} />
        </>
    )
}

export default SearchBox;
