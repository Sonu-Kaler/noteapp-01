import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from "./NotesApp/Pages/SignupLogin/Signup";
import Login from "./NotesApp/Pages/SignupLogin/Login";
import Dashboard from './NotesApp/Pages/Dashboard/Dashboard';
import Home from './NotesApp/Pages/Home/Home';
function App() {
  return (
    <div>
      
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
