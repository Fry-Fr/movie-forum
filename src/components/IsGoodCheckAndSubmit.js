import axios from "axios";

function IsGoodCheckAndSubmit({ movieToPost, setIsGood, idClass, setApiMovies, setSearchBox, auth }) {

    const token = auth;

    const handleChange = (e) => {
        e.stopPropagation();
        if (e.target.type === "checkbox") {
            if (e.target.name === "is_notgood") {
                setIsGood({...movieToPost, "is_good": !e.target.checked})
            }else {
                setIsGood({...movieToPost, [e.target.name]: e.target.checked})
            }
            return
        }
    }

    const handleAddMovie = (e) => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL}movies/`, movieToPost, {
            headers: {
                Authorization: token
            }
        }).then(res => {
            axios.get(`${process.env.REACT_APP_API_URL}movies/`,{
                headers: {
                    Authorization: token
                }
            }).then(response => {
                setSearchBox(false)
                setApiMovies(response.data)
            }).catch(err => console.log(err))
        }).catch(error => console.log(error))
    }
    const handleAddMovieWatchLater = (e) => {
        e.preventDefault();
        movieToPost.title = "(watch-later)" + movieToPost.title;
        movieToPost.is_good = null;
        axios.post(`${process.env.REACT_APP_API_URL}movies/`, movieToPost, {
            headers: {
                Authorization: token
            }
        }).then(res => {
            axios.get(`${process.env.REACT_APP_API_URL}movies/`,{
                headers: {
                    Authorization: token
                }
            }).then(response => {
                setSearchBox(false)
                setApiMovies(response.data)
            }).catch(err => console.log(err))
        }).catch(error => console.log(error))
    }


    return (
        <div className='form'>
            <form className={`hidden ${idClass}`}>was it good?
                <div>
                <label htmlFor="is_good">yes
                    <input type="checkbox" name="is_good" checked={movieToPost.is_good} className={`hidden ${idClass}`} onChange={handleChange} />
                </label>
                <label htmlFor="is_good">no
                    <input type="checkbox" name="is_notgood" checked={movieToPost.is_good === null ? false : !movieToPost.is_good} className={`hidden ${idClass}`} onChange={handleChange} />
                </label>
                </div>
            </form>
            <div style={{"flexBasis":"5%", "display":"flex", "flexDirection":"column"}}>
                <button className={`hidden ${idClass}`} onClick={handleAddMovie}>submit</button>
                <button className={`hidden ${idClass}`} onClick={handleAddMovieWatchLater}>watch later</button>
            </div>
        </div>
    )
}

export default IsGoodCheckAndSubmit;
