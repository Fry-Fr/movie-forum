function IsGoodCheckAndSubmit({ isGood, setIsGood, idClass }) {

    const handleAddMovie = (e) => {
        e.preventDefault();
        console.log("POST-DATA: ", isGood)
    }

    const handleChange = (e) => {
        e.stopPropagation();
        if (e.target.type === "checkbox") {
            setIsGood({...isGood, [e.target.name]: e.target.checked})
            return
        }
    }

    return (
        <div className='form'>
        <form className={`hidden ${idClass}`}>is good?
            <input type="checkbox" name="is_good" checked={isGood.is_good} className={`hidden ${idClass}`} onChange={handleChange} />
        </form>
        <button className={`hidden ${idClass}`} onClick={handleAddMovie}>add</button>
        </div>
    )
}

export default IsGoodCheckAndSubmit;
