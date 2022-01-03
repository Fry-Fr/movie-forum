function SearchResults({ results }) {
    return (
        <>
        <div className="search-result">
            {!results ? undefined : results.map((res, i) => {
                return (
                    <div key={i} className="search-result-card">
                        <span>{res.imdb_id}</span>
                        <span>{res.title}</span>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default SearchResults;
