import BoolProvider from './contexts/BoolContext';
import { useState, useEffect } from 'react';
import Layout from './layouts/Layout';
import axios from 'axios';
import BoolContext from './contexts/BoolContext';

const apiMovies = "https://api.themoviedb.org/3/search/movie"
const apiTvSeries = "https://api.themoviedb.org/3/search/tv"

const apiKey = "309ed232714c22027bdc63085a7e6a19"

const apiUrlBase = "https://image.tmdb.org/t/p/"

function App() {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  console.log(movies);
  console.log(series);

  function getMovies(query) {
    axios.get(`${apiMovies}?api_key=${apiKey}&query=${query}`)
      .then((response) => {
        // console.log(response.data.results);
        setMovies(response.data.results);
      })
  }

  function getSeries(query) {
    axios.get(`${apiTvSeries}?api_key=${apiKey}&query=${query}`)
      .then((response) => {
        // console.log(response.data.results);
        setSeries(response.data.results);
      })
  }

  function getBoth(query) {
    getMovies(query);
    getSeries(query);

  }

  const boolContext = { getBoth, apiUrlBase, apiMovies, apiTvSeries, apiKey, movies, setMovies, series, setSeries };

  return (
    <>
      <BoolContext.Provider value={boolContext}>
        <Layout />
      </BoolContext.Provider>
    </>
  )
};

export default App;





