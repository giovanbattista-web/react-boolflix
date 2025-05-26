import { useContext } from "react";
import BoolContext from "../contexts/BoolContext";

const Card = (props) => {
    const { apiUrlBase } = useContext(BoolContext);
    function getChoiceFlag(check) {
        let language = ["it", "en"]
        if (language.includes(check)) {
            return <img src={`public/${check}.png`} />
        } else {
            return <img src={`imgPlaceholder`} />
            return <img src={` public/ placeholder.jpg`} />
        }
    }

    function choiceStars(vote_average) {
        const stars = Math.ceil(vote_average / 2);
        const fullStar = Array(stars).fill(<i className="fa-solid fa-star"></i>)
        const emptyStar = Array(5 - stars).fill(<i className="fa-regular fa-star"></i>)
        return [...fullStar, ...emptyStar]
    }

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <img src={props.element.poster_path !== null ? `${apiUrlBase}w342${props.element.poster_path}` :
                        `https://placehold.co/342x520`} />
                </div>

                <ul className='card-body'>
                    <li> Titolo : {props.element.title || props.element.name}</li>
                    <li> Titolo originale : {props.element.original_title}</li>
                    <li>Descrizione : {props.element.overview.slice(0, 150)}</li>
                    <li> Lingua : {getChoiceFlag(props.element.original_language)}</li>
                    <li> Voto : {choiceStars(props.element.vote_average)}</li>
                </ul>
            </div>
        </>
    )
};

export default Card;