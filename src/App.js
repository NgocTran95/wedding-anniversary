import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AlbumPage from './pages/AlbumPage';
import UploadPage from './pages/UploadPage';
import StoryPage from './pages/StoryPage';
function App() {
  return (
      <div className='app'>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/album" element={<AlbumPage/>} />
          <Route path="/story" element={<StoryPage/>} />
          <Route path="/upload" element={<UploadPage/>} />
        </Routes>
      </div>
  );
}

export default App;
