import './App.scss';
import { Outlet } from 'react-router-dom';
import { Navbar } from './navigation/Navbar';

export const App = () => {
  return (
    <div data-cy="app">
      <Navbar />

      <main className="section">
        <Outlet />
      </main>
    </div>
  );
};
