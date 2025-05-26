import { useContext } from "react";
import BoolContext from "../contexts/BoolContext";
import Card from "../components/Card";

const Homepage = () => {
    const { movies, series } = useContext(BoolContext);
    return (
        <>
            <div className="container welcome">
                <h1>Benvenuto</h1>
                <p>Milioni di film, serie TV e persone da scoprire. Esplora ora.</p>
                <div className="row">
                    {
                        movies.map((updatedElement) => (
                            <div className="col" key={updatedElement.id}>
                                <Card element={updatedElement} />
                            </div>
                        ))
                    }
                </div>
                <h1>Television Series</h1>
                <div className="row">
                    {
                        series.map((updatedElement) => (
                            <div className="col" key={updatedElement.id}>
                                <Card element={updatedElement} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
};

export default Homepage;