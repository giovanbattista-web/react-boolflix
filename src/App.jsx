import BoolProvider from './contexts/BoolContext';
import { useState, useEffect } from 'react';
import Layout from './layouts/Layout';
import axios from 'axios';

const apiMovies = "https://api.themoviedb.org/3/search/movie"
const apiKey = "309ed232714c22027bdc63085a7e6a19"

function App() {
  return (
    <>
      const [movies, setMovies] = useState([]);
      console.log(movies);
      <BoolProvider>
        <Card />
        <Search />
      </BoolProvider>
    </>
  )
};

export default App;





