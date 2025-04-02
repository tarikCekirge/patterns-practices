import React, { useRef, useState } from 'react'

const SearchableList = ({ items, itemKeyFn, children }) => {
    const lastChange = useRef()
    const [searchTerm, setSearchTerm] = useState('');

    const searchResults = items.filter((item) => JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase()))

    const handleChange = (e) => {
        if (lastChange.current) {
            clearTimeout(lastChange.current);
        }

        setTimeout(() => {
            lastChange.current = null
            lastChange.current = setSearchTerm(e.target.value)
        }, 1000)
    }
    return (
        <div className='searchable-list'>
            <input type='search' placeholder='Search' onChange={handleChange} />
            <ul>
                {searchResults.map((item, index) => <li key={itemKeyFn(item)}>{children(item)}</li>)}
            </ul>
        </div>
    )
}

export default SearchableList
