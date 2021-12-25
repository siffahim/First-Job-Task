import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import Blogs from './Pages/Blogs/Blogs';
import Contact from './Pages/Contact/Contact';
import AddBlog from './Pages/Dashboard/AddBlog/AddBlog';
import AdminPage from './Pages/Dashboard/AdminPage/AdminPage';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import UpdateBlog from './Pages/Dashboard/UpdateBlog/UpdateBlog';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

          <Route path='/adminpage' element={
            <PrivateRoute>
              <AdminPage />
            </PrivateRoute>
          } />

          <Route path='/addBlog' element={
            <PrivateRoute>
              <AddBlog />
            </PrivateRoute>
          } />
          <Route path='/updateBlog/:updateId' element={
            <PrivateRoute>
              <UpdateBlog />
            </PrivateRoute>
          } />
          <Route path='/makeadmin' element={
            <PrivateRoute>
              <MakeAdmin />
            </PrivateRoute>
          } />

        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
