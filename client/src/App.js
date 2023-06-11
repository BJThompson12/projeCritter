import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Project from "./pages/Project";
import Faq from "./pages/Faq";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

//apollo client is initialized
const client = new ApolloClient({
  //  end point of graphQL server
  uri: "/graphql",
  // Inmemory cache provides local cache for stroing graphQL data
  cache: new InMemoryCache(),
  //sers authorization header for apollo client requwsts it retrieves the jwt token from localstorage using bearer which is a type of authentication scheme
  headers: {
    authorization: localStorage.getItem("id_token")
      ? `Bearer ${localStorage.getItem("id_token")}`
      : null,
  },
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="bg-white flex flex-col items-center w-full min-h-screen App">
          <Navbar />
          <main className=" flex flex-col items-center w-full max-w-[1536px] p-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/project" element={<Project />} />
              <Route path="/faq" element={<Faq />} />
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
  /* <div className="flex items-center justify-center w-screen py-10">
<button className="px-5 py-2 text-white bg-blue-500 rounded">
  Open Modal
</button>
</div> */
}
