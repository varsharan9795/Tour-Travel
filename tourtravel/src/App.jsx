
//import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blogs';
import BlogDetails from './pages/BlogDetails';
import PlacesRoute from './pages/PlacesRoute';
import Nopage from './pages/NoPage';
const App = () => {
  return (
    <>
     <BrowserRouter>
     <Routes>

     <Route path="/" element={<Layout />}>
     <Route index element={<Home />} />
     <Route path="/About" element={<About />} />
     <Route path="/Blogs" element={<Blog />} />
     <Route path="/Blog/:id" element={<BlogDetails />} />
     <Route path="/Places" element={<PlacesRoute />} />
     <Route path="*" element={<Nopage />} />
      </Route>
     </Routes>  
     

     </BrowserRouter> 
    </>
  )
}

export default App
