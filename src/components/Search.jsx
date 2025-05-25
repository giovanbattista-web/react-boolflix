import { useContext, useState } from 'react';
import BoolContext from '../contexts/BoolContext';

const Search = () => {
    const [search, setSearch] = useState("");
    const { getMovies } = useContext(BoolContext);
    function handleClick(e) {
        e.preventDefault();
        getMovies(search);
        setSearch("");

    }
    return (
        <>
            <div className='container'>
                <label htmlFor="search"></label>
                <input type="search" placeholder='Scrivi cosa vuoi cercare' value={search}
                    onChange={(e) => setSearch(e.target.value)} />
                <button type='submit' onClick={handleClick}>invia</button>
            </div>
        </>
    )
};

export default Search;