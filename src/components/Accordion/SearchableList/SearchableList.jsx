import React, { useState } from 'react'

const SearchableList = ({ items, children }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const searchResults = items.filter((item) => JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase()))

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }
    return (
        <div className='searchable-list'>
            <input type='search' placeholder='Search' onChange={handleChange} />
            <ul>
                {searchResults.map((item, index) => <li key={index}>{children(item)}</li>)}
            </ul>
        </div>
    )
}

export default SearchableList
