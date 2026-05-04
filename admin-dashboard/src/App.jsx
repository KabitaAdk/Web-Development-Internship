import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MainLayout from "./components/MainLayout";
import './App.css';

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className="app min-h-screen bg-slate-50 md:grid md:grid-cols-[300px_1fr]">
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <div className="content flex flex-col min-h-screen">
                <Header onMenuClick={() => setSidebarOpen(true)} />
                <MainLayout />
            </div>
        </div>
    );
}

export default App;