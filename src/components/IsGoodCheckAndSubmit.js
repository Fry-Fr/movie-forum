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
        console.log("POST-DATA:", movieToPost)
    }


    return (
        <div className='form'>
        <form className={`hidden ${idClass}`}>is good?
            <input type="checkbox" name="is_good" checked={movieToPost.is_good} className={`hidden ${idClass}`} onChange={handleChange} />
        </form>
        <button className={`hidden ${idClass}`} onClick={handleAddMovie}>add</button>
        </div>
    )
}

export default IsGoodCheckAndSubmit;
