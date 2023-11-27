import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './pages/MainPage';
import CarPage from './pages/CarPage';
import CarListPage from './pages/CarListPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />}></Route>
        <Route path="car" element={<CarPage />}></Route>
        <Route path="list" element={<CarListPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;