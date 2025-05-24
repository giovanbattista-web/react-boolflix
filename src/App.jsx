import react from 'react';
import Header from './components/Header';
import Main from './components/Main';
import BoolProvider from './contexts/BoolContext';

function App() {
  return (
    <>
      <BoolProvider>
        <Header />
        <Main />
      </BoolProvider>
    </>
  )
};

export default App;





