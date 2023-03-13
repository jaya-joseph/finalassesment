import './App.css';
import Reg from './components/Reg';
import Login from './components/Login';
import SetPassword from './components/SetPassword';
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Dashboard from './components/Dashboard';
import Post from './components/Post';
import User from './components/User';
import Todo from './components/ToDo';
import Product from './components/Product';



function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/register" element={<Reg />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/setpassword" element={<SetPassword/>} />
          <Route exact path="/posts" element={<Post />} />  
          <Route exact path="/userListing" element={<User />} /> 
          <Route exact path="/todo" element={<Todo />} /> 
          <Route exact path="/products" element={<Product />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
