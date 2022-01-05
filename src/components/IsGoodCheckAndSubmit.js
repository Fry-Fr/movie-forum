import axios from "axios";

function IsGoodCheckAndSubmit({ movieToPost, setIsGood, idClass }) {

    const handleChange = (e) => {
        e.stopPropagation();
        if (e.target.type === "checkbox") {
            setIsGood({...movieToPost, [e.target.name]: e.target.checked})
            return
        }
    }

    const handleAddMovie = (e) => {
        e.preventDefault();
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
                    <input type="checkbox" name="is_notgood" checked={movieToPost.is_notgood} className={`hidden ${idClass}`} onChange={handleChange} />
                </label>
                </div>
            </form>
            <button className={`hidden ${idClass}`} onClick={handleAddMovie}>add</button>
        </div>
    )
}

export default IsGoodCheckAndSubmit;
