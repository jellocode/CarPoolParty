import './App.css';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CarOption from './Pages/CarOption';
import Form from './Pages/Form';
import LandingPage from './Pages/LandingPage';
import SignUp from './Pages/SignUp';

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
