import { useState } from 'react';

function App() {

  const [title, setTtitle] = useState("");
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <h1>Movies</h1>
          </div>
        </div>
      </div>
    </>
  )
};

export default App;
