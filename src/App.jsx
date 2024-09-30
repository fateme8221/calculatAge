
import { useEffect } from 'react'
import './App.css'
import DatePikerComponent from './pages/DatePiker'
import Aos from 'aos';
import "aos/dist/aos.css";

function App() {
  Aos.init();
  return (
    <div >
      <DatePikerComponent/>
    </div>
  )
}

export default App
