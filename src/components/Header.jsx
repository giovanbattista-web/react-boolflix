import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Flag from 'react-world-flags';

const Header = () => {
    const [titolo, setTitolo] = useState('');
    const [pulsanti, setPulsanti] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState("");


    const fetch = () => {
        let ricerca = "Dragonball";
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=309ed232714c22027bdc63085a7e6a19&query=' + ricerca)
            .then((response) => {
                setPulsanti(response.data.results);
                console.log(response.data.results);
            }
            )
    };

    useEffect(() => {
        fetch();
    }, [titolo]);


    const handleChange = (event) => {
        console.log(title);
        setTitolo(event.target.value);
    };

    return (
        <div className='container'>
            <h1>Inserisci il titolo del film</h1>
            <input
                type="text"
                value={titolo}
                onChange={(event) =>
                    setTitolo(event.target.value)
                }
                placeholder='inserisci il titolo del film'
            />
            <button onClick={handleChange}>
                Invia
            </button>
            <ul>
                {pulsanti.map((pulsante) => (
                    <li key={pulsante.id}>
                        {pulsante.title}
                        {pulsante.original_title}
                        {pulsante.orginale_language}
                        {pulsante.vote_average}
                    </li>
                ))}
            </ul>
            <p>Hai inserito : {filteredMovies.title}</p>
        </div>
    )
};

export default Header;