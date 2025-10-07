import { useContext } from "react";
import BoolContext from "../contexts/BoolContext";
import Card from "../components/Card";

const Homepage = () => {
    const { movies, series } = useContext(BoolContext);
    return (
        <>
            <div className="container welcome">
                <h2>Benvenuto</h2>
                <p>Milioni di film, serie TV e persone da scoprire. Esplora ora.</p>
                <div className="row">
                    {
                        movies.map(movie => (
                            <div className="col" key={movie.id}>
                                <Card element={movie} />
                            </div>
                        ))
                    }
                </div>
                <h3>Television Series</h3>
                <div className="row">
                    {
                        series.map(movie => (
                            <div className="col" key={movie.id}>
                                <Card element={movie} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
};

export default Homepage;