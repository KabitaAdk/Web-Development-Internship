import './style.css';

function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="brand">Admin Panel</div>
            <nav>
                <ul>
                    <li>Dashboard</li>
                    <li>Users</li>
                    <li>Projects</li>
                    <li>Reports</li>
                    <li>Settings</li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;