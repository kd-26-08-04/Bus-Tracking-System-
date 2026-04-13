import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Bus, MapPin, UserPlus, UserCheck, Settings, LogOut } from 'lucide-react';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <Bus size={32} className="accent-icon" />
        <span>BusTrack Pro</span>
      </div>
      
      <nav className="sidebar-nav">
        <NavLink
          to="/"
          end
          className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
        >
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </NavLink>

        <div className="nav-label">Registration</div>

        <NavLink
          to="/add-bus"
          className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
        >
          <Bus size={20} />
          <span>Add Bus</span>
        </NavLink>

        <NavLink
          to="/add-driver"
          className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
        >
          <UserCheck size={20} />
          <span>Add Driver</span>
        </NavLink>

        <div className="nav-label">Management</div>
        <div className="nav-item-disabled">
          <MapPin size={20} />
          <span>Routes</span>
        </div>
        <div className="nav-item-disabled">
          <Settings size={20} />
          <span>Settings</span>
        </div>
      </nav>

      <div className="sidebar-footer">
        <div className="user-info">
          <div className="avatar">AD</div>
          <div className="details">
            <span className="name">Admin User</span>
            <span className="role">Fleet Manager</span>
          </div>
        </div>
        <button className="logout-btn">
          <LogOut size={20} />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
