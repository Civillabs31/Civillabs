import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import GalleryPage from './components/GalleryPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import Rates from './components/Rates';
import Services from './components/services';
import EmailButton from './components/mail';
import Special_Service from './components/Special_Service';
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/gallery" element={<GalleryPage />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/rates" element={<Rates/>}></Route>
          <Route path="/mail" element={<EmailButton/>}></Route>
          <Route path="/*" element={<Home />}></Route>
          <Route path="/Special_Service" element={<Special_Service />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
      <SpeedInsights />
    </>
  );
}

export default App;
