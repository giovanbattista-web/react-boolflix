import { useContext, useState } from 'react';
import BoolContext from '../contexts/BoolContext';

const Search = () => {
    const [search, setSearch] = useState("");
    const { getBoth } = useContext(BoolContext);

    function handleClick(e) {
        e.preventDefault();
        getBoth(search);
        setSearch("");
    }

    return (
        <>
            <div className='container'>
                <label htmlFor="search"></label>
                <input className='search' type="search" placeholder='Scrivi cosa vuoi cercare' value={search}
                    onChange={(e) => setSearch(e.target.value)} />
                <button className='button' type='submit' onClick={handleClick}>Cerca</button>
            </div>
        </>
    )
};

export default Search;