import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FleetProvider } from './context/FleetContext';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import BusDetail from './pages/BusDetail';
import AddBus from './pages/AddBus';
import AddDriver from './pages/AddDriver';
import './styles/global.css';

function App() {
  return (
    <FleetProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/bus/:id" element={<BusDetail />} />
            <Route path="/add-bus" element={<AddBus />} />
            <Route path="/add-driver" element={<AddDriver />} />
          </Routes>
        </Layout>
      </Router>
    </FleetProvider>
  );
}

export default App;
