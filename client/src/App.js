//import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Project from "./pages/Project";
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
