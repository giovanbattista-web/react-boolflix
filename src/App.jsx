import axios from 'axios';
import { useState } from 'react';

function App() {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => { e.preventDefault(); }

  return (
    <>
      <div className='container'>
        <h1>Film da cercare</h1>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}
          placeholder='Inserisci il titolo del film' />
        <button>Invia</button>
      </div>


    </>
  )
};

export default App;
