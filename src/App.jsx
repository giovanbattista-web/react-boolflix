import react from 'react';
import Header from './components/Header';
import Main from './components/Main';
import BoolContext from './contexts/BoolContext';

function App() {
  <>
    return (
    <BoolProvider>
      <Header />
      <Main />
    </BoolProvider>
    )
  </>
};

export default App;





