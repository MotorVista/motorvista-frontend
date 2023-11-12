import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './pages/MainPage';
import CarPage from './pages/CarPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />}></Route>
        <Route path="car" element={<CarPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;