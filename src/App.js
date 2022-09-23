import './App.css';
import Content from './components/content';
import Navbar from './components/navbar';
import Page from './components/page';
import Music from './components/music';
import NotFoundPage from './components/notFoundPage';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [song, setSong] = useState([]);
  const [type, setType] = useState('home');

  const getType = (query) => {
    setType(query);
  };

  return (
    <div className="App flex items-center lg:items-start lg:flex-row flex-col relative">
      <Navbar type={type} setType={setType} />
      <Routes>
        <Route
          path="/"
          element={<Content song={song} setSong={setSong} />}
        ></Route>
        <Route path="/page/:page" element={<Page getType={getType} />}></Route>
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
      <Music song={song} setSong={setSong} />
    </div>
  );
}

export default App;
