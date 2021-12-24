import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Blogs from './Pages/Blogs/Blogs';
import Contact from './Pages/Contact/Contact';
import AddBlog from './Pages/Dashboard/AddBlog/AddBlog';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import ManageBlog from './Pages/Dashboard/ManageBlog/ManageBlog';
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

        <Route path='/dashboard'
          element={
            <Dashboard />
          }
        >
          <Route path='/dashboard' element={<MakeAdmin />} />
          <Route path='/dashboard/makeAdmin' element={<MakeAdmin />} />
          <Route path='/dashboard/addBlog' element={<AddBlog />} />
          <Route path='/dashboard/manageBlog' element={<ManageBlog />} />
          <Route path='/dashboard/updateBlog/:updateBlogId' element={<UpdateBlog />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
