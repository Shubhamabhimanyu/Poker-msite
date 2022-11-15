
import './Components/Assests/Style.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Offer from "./Pages/Offer";
import BaaziTurbo from "./Pages/BaaziTurbo";
import P_1000X from './Pages/P_1000X';
import Tournament from './Pages/Tournament';
import PfsVideos from './Pages/PfsVideos';
import SitAndG0 from './Pages/SitAndG0';
import PokerSchool from './Pages/PokerSchool';
function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/offer" element={<Offer/>}/>
    <Route path='/tournament-schedule' element={<Tournament/>}/>
    <Route path='/pre-flop-show-videos' element={<PfsVideos/>}/>
    <Route path='/sit-and-go' element={<SitAndG0/>}/>
    <Route path='/poker-school' element={<PokerSchool/>}/>
    <Route path="/1000x" element={<P_1000X/>} />
    <Route path="/baazi-turbo" element={<BaaziTurbo/>} />
   </Routes>
   
   </BrowserRouter>
  
   </>
  );
}

export default App;