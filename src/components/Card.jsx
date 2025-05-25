const imgItaly = "public/it.png";
const imgEnglish = "public/en.png";
const imgNotFlag = "public/punto_interrogativo.png"


const Card = (props) => {
    function getFlag(check) {
        if (check === "it") {
            return <img src={imgItaly} alt="" />
        } else
            if (check === "en") {
                return <img src={imgEnglish} alt="" />
            } else
                return <img src={imgNotFlag} alt="" />
    }

    return (
        <ul className='card'>
            <li> Titolo : {props.movie.title}</li>
            <li> Titolo originale : {props.movie.original_title}</li>
            <li> Lingua : {getFlag(props.movie.original_language)}</li>
            <li> Voto : {props.movie.vote_average}</li>
        </ul>
    )
};

export default Card;