import react from 'react';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [titolo, setTitolo] = useState('');
  const [pulsanti, setPulsanti] = useState([]);

  function fetch() {
    axios.get('https://api.themoviedb.org/3/search/movie?api_key=309ed232714c22027bdc63085a7e6a19&query=ritorno+al+fut')
      .then((response) => {
        setPulsanti(response.pulsanti)
      }
      )
  };


  const handleChange = (event) => {
    setTitolo(event.target.value);
  };

  return (
    <div className='container'>
      <h1>Inserisci il titolo del film</h1>
      <input
        type="text"
        id="titoloFilm"
        value={titolo}
        onChange={handleChange}
        placeholder='inserisci il titolo del film'
      />
      <button onClick={fetch}>
        Invia
      </button>
      <ul>
        {pulsanti.map((pulsante) => (
          <li key={pulsante.id}>{pulsante.titolo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;





