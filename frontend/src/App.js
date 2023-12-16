import './App.css';
import Home from './pages/Home'; 
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
          <Routes>
            {/* Route for the Home component */}
            <Route path="/" element={<Home />} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;
