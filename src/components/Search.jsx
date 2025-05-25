import { useContext, useState } from 'react';
import BoolContext from '../contexts/BoolContext';

const Search = () => {
    const [search, setSearch] = useState("");
    const { getMovies, getSeries } = useContext(BoolContext);

    function handleClick(e) {
        e.preventDefault();
        getMovies(search);
        getSeries(search);
        setSearch("");
    }

    function entersearch(e) {
        if (e.key === "enter") {
            e.preventDefault();
            getMovies(search);
            getSeries(search);
            setSearch("");
        }
    };

    return (
        <>
            <div className='container'>
                <label htmlFor="search"></label>
                <input type="search" placeholder='Scrivi cosa vuoi cercare' value={search}
                    onChange={(e) => setSearch(e.target.value)} />
                <input type="search" placeholder='Scrivi cosa vuoi cercare' value={search}
                    onChange={(e) => setSearch(e.target.value)} entersearch={entersearch} />
                <button type='submit' onClick={handleClick}>invia</button>
            </div>
        </>
    )
};

export default Search;