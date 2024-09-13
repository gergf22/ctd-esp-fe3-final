import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Favs from "./Pages/Favs";
import Contact from "./Pages/Contact";
import Detail from "./Pages/Detail";
import { routes } from "./Components/utils/routes";
import Layout from "./Layouts/Layout";

function App() {
  return (
    <div className="App dark">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path={routes.home} element={<Home />} />
          <Route path={routes.favs} element={<Favs />} />
          <Route path={routes.contact} element={<Contact />} />
          <Route path={"/dentist/:id"} element={<Detail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
