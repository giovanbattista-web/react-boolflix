import React from 'react';

const Card = (props) => {
    return (
        <ul className='card'>
            <li> Titolo : {props.movie.title}</li>
            <li> Titolo originale : {props.movie.original_title}</li>
            <li> Lingua : {props.movie.original_language}</li>
            <li> Voto : {props.movie.vote_average}</li>
        </ul>
    )
};

export default Card;