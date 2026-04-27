import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "../Components/Layout/MainLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Career from "../Pages/Career";
import Contact from "../Pages/Contact";
import SingleService from "../Pages/SingleService";

const AppRouters = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/services/:id' element={<SingleService />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouters;
