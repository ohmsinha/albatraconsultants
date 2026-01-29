import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceQMS from './pages/ServiceQMS';
import ServiceFSMS from './pages/ServiceFSMS';
import ServiceOHSAS from './pages/ServiceOHSAS';
import ServiceEMS from './pages/ServiceEMS';
import ServiceHalal from './pages/ServiceHalal';
import ServiceISMS from './pages/ServiceISMS';
import ServiceITSMS from './pages/ServiceITSMS';
import ServiceBCMS from './pages/ServiceBCMS';
import ServiceSEDEX from './pages/ServiceSEDEX';
import ServiceISO10002 from './pages/ServiceISO10002';
import ServiceISO31000 from './pages/ServiceISO31000';
import ServiceISO30000 from './pages/ServiceISO30000';
import ServiceISO39001 from './pages/ServiceISO39001';
import ServiceISO26000 from './pages/ServiceISO26000';
import ServiceISO29001 from './pages/ServiceISO29001';
import ServiceISO50001 from './pages/ServiceISO50001';
import ServiceISO13485 from './pages/ServiceISO13485';
import ServiceISO28000 from './pages/ServiceISO28000';
import ServiceISO29991 from './pages/ServiceISO29991';
import ServiceISO17025 from './pages/ServiceISO17025';
import ServiceISO15189 from './pages/ServiceISO15189';
import ServiceISO22870 from './pages/ServiceISO22870';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/service/qms" element={<ServiceQMS />} />
            <Route path="/service/fsms" element={<ServiceFSMS />} />
            <Route path="/service/ohsas" element={<ServiceOHSAS />} />
            <Route path="/service/ems" element={<ServiceEMS />} />
            <Route path="/service/halal" element={<ServiceHalal />} />
            <Route path="/service/isms" element={<ServiceISMS />} />
            <Route path="/service/itsms" element={<ServiceITSMS />} />
            <Route path="/service/bcms" element={<ServiceBCMS />} />
            <Route path="/service/sedex" element={<ServiceSEDEX />} />
            <Route path="/service/iso10002" element={<ServiceISO10002 />} />
            <Route path="/service/iso31000" element={<ServiceISO31000 />} />
            <Route path="/service/iso30000" element={<ServiceISO30000 />} />
            <Route path="/service/iso39001" element={<ServiceISO39001 />} />
            <Route path="/service/iso26000" element={<ServiceISO26000 />} />
            <Route path="/service/iso29001" element={<ServiceISO29001 />} />
            <Route path="/service/iso50001" element={<ServiceISO50001 />} />
            <Route path="/service/iso13485" element={<ServiceISO13485 />} />
            <Route path="/service/iso28000" element={<ServiceISO28000 />} />
            <Route path="/service/iso29991" element={<ServiceISO29991 />} />
            <Route path="/service/iso17025" element={<ServiceISO17025 />} />
            <Route path="/service/iso15189" element={<ServiceISO15189 />} />
            <Route path="/service/iso22870" element={<ServiceISO22870 />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;