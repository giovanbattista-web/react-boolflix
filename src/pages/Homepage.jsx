import { useContext } from "react";
import BoolContext from "../contexts/BoolContext";
import Card from "../components/Card";

const Homepage = () => {
    const { movies } = useContext(BoolContext);
    return (
        <>
            <div className="container">
                <div className="row">
                    {
                        movies.map((currentMovie) => (
                            <div className="col">
                                <Card key={currentMovie.id} movie={currentMovie} />
                            </div>
                        ))
                    }
                </div>

            </div>
        </>
    )
};

export default Homepage;