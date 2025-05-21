import react from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Flag from 'react-world-flags';

function App() {
  const [titolo, setTitolo] = useState('');
  const [pulsanti, setPulsanti] = useState([]);

  const fetch = () => {
    axios.get('https://api.themoviedb.org/3/search/movie?api_key=309ed232714c22027bdc63085a7e6a19&query=ritorno+al+fut')
      .then((response) => {
        setPulsanti(response.data.results);
        console.log(response.data.results);
      }
      )
  };

  useEffect(() => {
    fetch();
  }, [titolo]);


  const handleChange = (event) => {
    setTitolo(event.target.value);
  };

  return (
    <div className='container'>
      <h1>Inserisci il titolo del film</h1>
      <input
        type="text"
        id=""
        value={titolo}
        onChange={handleChange}
        placeholder='inserisci il titolo del film'
      />
      <button onClick={fetch}>
        Invia
      </button>
      <ul>
        {pulsanti.map((pulsante) => (
          <li key={pulsante.id}>
            {pulsante.titolo}
            {pulsante.original_title}
            {pulsante.orginale_language}
            {pulsante.vote_average}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;





