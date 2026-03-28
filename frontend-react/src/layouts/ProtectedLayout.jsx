import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ProtectedLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
        <main className="flex-grow p-6">
            <Outlet />
        </main>
      <Footer />
    </div>
  );
}