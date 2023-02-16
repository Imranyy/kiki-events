import './css/App.css';
import './css/responsive.css';
import Home from  './Home'
import Events from './pages/Events';
import NotFound from './pages/NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <Router>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/events' element={<Events/>}/>
       <Route path='*' element={<NotFound/>}/>
    </Routes> 
  </Router>
  )}
 
export default App;
