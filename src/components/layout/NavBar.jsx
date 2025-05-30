import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Identidad Lingüística', path: '/seccion/identidad-linguistica' },
    { name: 'Sistema Monetario', path: '/seccion/sistema-monetario' },
    { name: 'Festividades', path: '/seccion/festividades-tradiciones' },
    { name: 'Modernidad', path: '/seccion/modernidad-singapur' },
    { name: 'Referencias', path: '/referencias' },
  ];
  
  return (
    <nav className="bg-blue-600 dark:bg-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-14">
          <div className="hidden md:block">
            <div className="flex space-x-4">
              {navItems.map(item => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === item.path 
                      ? 'bg-blue-700 dark:bg-blue-900' 
                      : 'hover:bg-blue-500 dark:hover:bg-blue-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Menú móvil - se puede expandir con un dropdown */}
          <div className="md:hidden">
            <select 
              className="bg-blue-600 border border-blue-500 rounded px-2 py-1"
              onChange={e => window.location.href = e.target.value}
              value={location.pathname}
            >
              {navItems.map(item => (
                <option key={item.name} value={item.path}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;