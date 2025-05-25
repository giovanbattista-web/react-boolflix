import { useContext } from "react";
import BoolContext from "../contexts/BoolContext";
import Card from "../components/Card";

const Homepage = () => {
    const { movies, series } = useContext(BoolContext);
    return (
        <>
            <div className="container">
                <h1>Movies</h1>
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