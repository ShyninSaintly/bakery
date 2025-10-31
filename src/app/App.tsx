import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import {LoginPage} from "../pages/LoginPage/LoginPage.tsx";
import {MainPage} from "../pages/MainPage/MainPage.tsx";
import 'leaflet/dist/leaflet.css';
function App() {
  return (
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path='/main' element={<MainPage/>}/>
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
  );
}

export default App
