import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bus, Users, Signal, ArrowRightCircle, MoreHorizontal, Fuel, Compass } from 'lucide-react';
import { useFleet } from '../context/FleetContext';
import LiveMap from '../components/LiveMap';
import '../styles/Dashboard.css';

const StatCard = ({ title, value, icon: Icon, color }) => (
  <div className="glass-card stat-card">
    <div className={`icon-container ${color}`}>
      <Icon size={24} />
    </div>
    <div className="stat-info">
      <span className="stat-title">{title}</span>
      <h3 className="stat-value">{value}</h3>
    </div>
  </div>
);

const Dashboard = () => {
  const navigate = useNavigate();
  const { buses, drivers } = useFleet();
  
  // Calculate dynamic stats
  const totalBuses = buses.length;
  const onlineBuses = buses.filter(b => b.online).length;
  const totalStudents = buses.reduce((acc, b) => acc + b.totalStudents, 0);

  return (
    <div className="dashboard-page">
      <header className="page-header">
        <h1>Nagpur Fleet Command</h1>
        <p>Real-time oversight of your student transportation network.</p>
      </header>

      <div className="stats-grid">
        <StatCard 
          title="Total Fleet" 
          value={totalBuses} 
          icon={Bus} 
          color="accent" 
        />
        <StatCard 
          title="Online Now" 
          value={onlineBuses} 
          icon={Signal} 
          color="green" 
        />
        <StatCard 
          title="Active Students" 
          value={totalStudents} 
          icon={Users} 
          color="orange" 
        />
      </div>

      {/* Real-time Map Integration */}
      <LiveMap />

      <div className="glass-card table-section">
        <div className="table-header">
          <div className="title-group">
            <h2>Active Routes</h2>
            <span className="subtitle">Live status of all running buses</span>
          </div>
          <button className="btn-secondary">View Detailed Logs</button>
        </div>
        
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Route</th>
                <th>Journey Path</th>
                <th>Current Status</th>
                <th>Capacity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {buses.map((bus) => (
                <tr key={bus.id}>
                  <td>
                    <span className="route-badge">{bus.routeNumber}</span>
                  </td>
                  <td>
                    <div className="route-path">
                      <span className="location">{bus.from}</span>
                      <MoreHorizontal size={14} className="separator" />
                      <span className="location">{bus.to}</span>
                    </div>
                  </td>
                  <td>
                    <div className="status-cell">
                      <span className={`status-pill ${bus.status.toLowerCase()}`}>
                        {bus.status}
                      </span>
                      {bus.online && <span className="speed-text">{bus.speed}</span>}
                    </div>
                  </td>
                  <td>
                    <div className="student-pill">
                      <Users size={14} />
                      <strong>{bus.totalStudents}</strong>
                      <span className="muted">/ 50</span>
                    </div>
                  </td>
                  <td>
                    <button 
                      className="action-icon-btn" 
                      onClick={() => navigate(`/bus/${bus.id}`)}
                      title="View Complete Details"
                    >
                      <ArrowRightCircle size={22} color="var(--accent)" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
