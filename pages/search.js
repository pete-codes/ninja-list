import { useState } from 'react'

export default function SearchPage({ }) {
    const [ searchTerm, setSearchTerm ] = useState('')
    const [ searchResults, setSearchResults ] = useState([])

    const goSearch = async () => {
        const res = await fetch(`/api/search`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify({ searchTerm })
        });
        const data = await res.json();
        setSearchResults(data)
    }

    return (
        <>
        <h1>Search Page</h1>

        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button onClick={() => goSearch()}>Search!</button>

        <ul>
            {searchResults.map(result => <li key={result.id}>{JSON.stringify(result, null, 2)}</li>)}
            {searchResults.length === 0 ? <li>No results yet</li> : null}
        </ul>

        </>
    )
}

