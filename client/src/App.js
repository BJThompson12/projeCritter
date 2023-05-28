//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Project from './pages/Project';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/project' element={<Project />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

{
  /* <div className="w-screen py-10 flex items-center justify-center">
<button className="py-2 px-5 rounded  bg-blue-500 text-white">
  Open Modal
</button>
</div> */
}
