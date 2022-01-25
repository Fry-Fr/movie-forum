import axios from "axios";

function IsGoodCheckAndSubmit({ movieToPost, setIsGood, idClass }) {

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
        axios.post('https://movie-forum-api.herokuapp.com/movies/', movieToPost).then(res => {
            window.location.reload();
        }).catch(error => console.log(error))
    }
    const handleAddMovieWatchLater = (e) => {
        e.preventDefault();
        movieToPost.title = "(watch-later)" + movieToPost.title;
        movieToPost.is_good = null;
        axios.post('https://movie-forum-api.herokuapp.com/movies/', movieToPost).then(res => {
            window.location.reload();
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
