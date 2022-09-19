
import P_1000X from "./Components/P_1000X";
import './Components/Assests/Style.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaaziTurbo from "./Components/BaaziTurbo";
function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/1000x" element={<P_1000X/>} />
    <Route path="/baazi-turbo" element={<BaaziTurbo/>} />
   </Routes>
   
   </BrowserRouter>
  
   </>
  );
}

export default App;