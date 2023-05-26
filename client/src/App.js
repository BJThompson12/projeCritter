import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
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
