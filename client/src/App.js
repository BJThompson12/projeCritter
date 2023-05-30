//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Project from './pages/Project';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

//apollo client is initialized 
const client = new ApolloClient({
  //  end point of graphQL server
  uri:"/graphql",
  // Inmemory cache provides local cache for stroing graphQL data
  cache: new InMemoryCache(),
  //sers authorization header for apollo client requwsts it retrieves the jwt token from localstorage using bearer which is a type of authentication scheme
  headers:{
    authorization:localStorage.getItem('id_token') 
    ? `Bearer${localStorage.getItem('id_token')}`
    :null
  }
})

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <div className='App h-screen w-full flex flex-col items-center'>
        <Navbar />
        <main className="max-w-[1536px]">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/project' element={<Project />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </ApolloProvider>
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
