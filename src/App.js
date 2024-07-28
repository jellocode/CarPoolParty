import './App.css';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CarOption from './pages/CarOption';
import Form from './pages/Form';
import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/CarOption" element={<CarOption />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
