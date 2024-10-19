import './App.css';
import React, { useState, useEffect } from 'react';
import PreLoader from './PreLoader';
import MainContent from './MainContent';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Symulacja ładowania danych
    const loadData = setTimeout(() => {
      setIsLoading(false);
    }, 6000); // Ładowanie trwa 3 sekundy

    // Czyszczenie timeoutu, gdy komponent zostanie odmontowany
    return () => clearTimeout(loadData);
  }, []);

  return (
    <div className="App">
      {isLoading ? <PreLoader /> : <MainContent />}
    </div>
  );
}

export default App;
