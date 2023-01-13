import './css/App.css';
import './css/responsive.css';
import Home from  './Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <Router>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/events' element={<Footer/>}/>
       <Route path='*' element={<ErrorPage/>}/>
    </Routes> 
  </Router>
  )}
 
export default App;
