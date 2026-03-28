import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PublicLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header variant="public" />   

      <main className="flex-grow flex items-center justify-center p-6">
        <Outlet />                 
      </main>

      <Footer />
    </div>
  );
}