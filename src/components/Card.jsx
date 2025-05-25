const imgItaly = "public/it.png";
const imgEnglish = "public/en.png";
const imgNotFlag = "public/punto_interrogativo.jpg"


const Card = (props) => {
    function getFlag(check) {
        if (check === "it") {
            return <img className="img-fluid" src={imgItaly} alt="" />
        } else
            if (check === "en") {
                return <img className="img-fluid" src={imgEnglish} alt="" />
            } else
                return <img className="img-fluid" src={imgNotFlag} alt="" />
    }

    return (
        <ul className='card'>
            <li> Titolo : {props.element.title || props.element.name}</li>
            <li> Titolo originale : {props.element.original_title}</li>
            <li> Lingua : {getFlag(props.element.original_language)}</li>
            <li> Voto : {props.element.vote_average}</li>
        </ul>
    )
};

export default Card;