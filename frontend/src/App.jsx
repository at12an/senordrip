import './App.css';
import Navigation from './Navigation2';
import Bookings from './Bookings';
import Services from './Services';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  return (
    <>
      <Router>
        <Navigation/>
        <Routes>
          <Route>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/bookings' element={<Bookings/>}/>
            <Route path='/services' element={<Services/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
