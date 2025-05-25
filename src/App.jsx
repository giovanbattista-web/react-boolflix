import BoolProvider from './contexts/BoolContext';
import { useState, useEffect } from 'react';
import Layout from './layouts/Layout';
import axios from 'axios';
import BoolContext from './contexts/BoolContext';

const apiMovies = "https://api.themoviedb.org/3/search/movie"
const apiKey = "309ed232714c22027bdc63085a7e6a19"

function App() {
  const [movies, setMovies] = useState([]);
  console.log(movies);

  function getMovies(query) {
    axios.get(`${apiMovies}?api_key=${apiKey}&query=${query}`)
      .then((response) => {
        console.log(response.data.results);
        setMovies(response.data.results);
      })
  }

  const boolContext = { getMovies, movies, setMovies, apiKey, apiMovies }

  return (
    <>
      <BoolContext.Provider value={boolContext}>
        <Layout />
      </BoolContext.Provider>
    </>
  )
};

export default App;





