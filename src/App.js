import logo from './logo.svg';
import Home from './components/navigation/Home'
import Header from './components/navigation/Header';
import LoginComponent from './auth/LoginComponent';
import RegistrationComponent from './auth/RegistrationComponent';
import Category from './components/navigation/Category';
import Dashboard from './components/navigation/Dashboard';
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom' 

function App() {
  return (
    <div>
      <Header />
      
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/category/:category" element={<Category />} />
          <Route path="/sign-up" element={<RegistrationComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/welcome" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
