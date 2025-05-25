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
                        movies.map((updatedMovie) => (
                            <div className="col" key={updatedMovie.id}>
                                <Card movie={updatedMovie} />
                            </div>
                        ))
                    }
                </div>

            </div>
        </>
    )
};

export default Homepage;