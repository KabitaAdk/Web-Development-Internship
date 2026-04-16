import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MainLayout from "./components/MainLayout";
import './App.css';

function App() {
    return (
        <div className="app">
            <Sidebar />
            <div className="content">
                <Header />
                <MainLayout />
            </div>
        </div>
    );
}

export default App;