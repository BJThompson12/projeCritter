//import logo from './logo.svg';
import './App.css';
//import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Project from "./pages/Project";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <main>
        <Home />
        <Dashboard />
        <Project />
      </main>
      <Footer />
    </div>
  );
}

export default App;

{/* <div className="w-screen py-10 flex items-center justify-center">
<button className="py-2 px-5 rounded  bg-blue-500 text-white">
  Open Modal
</button>
</div> */}