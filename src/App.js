import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Blogs from './Pages/Blogs/Blogs';
import Contact from './Pages/Contact/Contact';
import AddBlog from './Pages/Dashboard/AddBlog/AddBlog';
import AdminPage from './Pages/Dashboard/AdminPage/AdminPage';
import UpdateBlog from './Pages/Dashboard/UpdateBlog/UpdateBlog';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/adminpage' element={<AdminPage />} />
        <Route path='/addBlog' element={<AddBlog />} />
        <Route path='/updateBlog/:updateId' element={<UpdateBlog />} />
      </Routes>
    </Router>
  );
}

export default App;
