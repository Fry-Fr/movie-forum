import { useEffect, useState } from 'react';

import Forum from './components/Forum';
import Header from './components/Header';
import Footer from './components/Footer';

import './styles/App.css';

function App() {
  const [searchBox, setSearchBox] = useState(false);

  useEffect(() => {
    document.addEventListener("keypress", (e) => {
      e.stopPropagation();
      if (e.key === 'S') {
        setSearchBox(!searchBox)
      }
    })
  },[searchBox])

  return (
    <div className="App">
      <Header/>
      <Forum sb={searchBox} />
      <Footer/>
    </div>
  );
}

export default App;
