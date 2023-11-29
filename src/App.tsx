import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './pages/MainPage';
import CarPage from './pages/CarPage';
import CarListPage from './pages/CarListPage';
import Auth from './pages/authorization';
import Profile from './components/Profile';
import VendorCarsList from "./pages/VendorCarsList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />}></Route>
        <Route path="car/:id" element={<CarPage />}></Route>
        <Route path="list" element={<CarListPage />}></Route>
        <Route path="auth" element={<Auth />}></Route>
        <Route path="vendor" element={<VendorCarsList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;