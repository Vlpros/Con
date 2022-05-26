import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import Main from './Pages/Main/Main';
import { Route, Routes } from 'react-router-dom';

import Open from './Open/Open';
import Portfel from './Pages/Main/Portfel/Portfel';





function App(props) {
  return (
    <div>
      

      <div className='app-wrapper' >


        <div id='header' className='header' >
          <Navbar />
          <div id='nav' className='navigation'>



          </div>

        </div>
        <div id='content' className='content' >
          <Routes>

            <Route path='/main' element={<Main />} />
            <Route path='/port' element={<Portfel />} />
          </Routes>

        </div>


      </div>
    </div>


  )
}
export default App;
