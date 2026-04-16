import './style.css';

function Header() {
    return (
        <header className="header">
        <h1>Dashboard</h1>
        <div className="actions">
            <button className="btn">Add User</button>
            <button className="btn">Add Project</button>
        </div>
      </header>
    );
}

export default Header;