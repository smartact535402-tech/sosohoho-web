import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Palaces from './pages/Palaces';
import Tombs from './pages/Tombs';
import Museums from './pages/Museums';
import Alleyways from './pages/Alleyways';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/palaces" element={<Palaces />} />
          <Route path="/tombs-shrine" element={<Tombs />} />
          <Route path="/museums" element={<Museums />} />
          <Route path="/alleyways" element={<Alleyways />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
