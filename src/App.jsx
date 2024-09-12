
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Favs from "./Pages/Favs";
import Contact from "./Pages/Contact";
import Detail from "./Pages/Detail";

import { routes } from "./Components/utils/routes";



function App() {
  return (
      <div className="App">
          <Navbar/>
          <Routes>
            <Route path={routes.home} element={<Home/>}/>
            <Route path={routes.favs} element={<Favs/>}/>
            <Route path={routes.contact} element={<Contact/>}/>
            <Route path={"/dentist/:id"}  element={<Detail/>}/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
