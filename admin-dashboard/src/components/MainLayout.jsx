import './style.css';

function MainLayout() {
    return (
        <main className="main">
            <section className="cards">
                <div className="card">
                    <h3 className="card-title">Total Users</h3>
                    <p className="card-value">150</p>
                </div>
                <div className="card">
                    <h3 className="card-title">Total Projects</h3>
                    <p className="card-value">45</p>
                </div>
                <div className="card">
                    <h3 className="card-title">Active Users</h3>
                    <p className="card-value">120</p>
                </div> 
                <div className="card">
                    <h3 className="card-title">Pending Tasks</h3>
                    <p className="card-value">30</p>
                </div>
                <div className="card">
                    <h3 className="card-title">Completed Projects</h3>
                    <p className="card-value">200</p>
                </div>
                <div className="card">
                    <h3 className="card-title">New Users This Month</h3>
                    <p className="card-value">20</p>
                </div>
                <div className="card">
                    <h3 className="card-title">New Projects This Month</h3>
                    <p className="card-value">10</p>
                </div>
            </section>
            <section className="section1">
                <h2>Recent Activity</h2>
                <table>
                    <thead>
                        <tr> 
                            <th>User</th>
                            <th>Action</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                         <tr>
                            <td>John Doe</td>
                            <td>Added a new project</td>
                            <td>2024-06-01</td>
                        </tr>
                        <tr>
                            <td>Jane Smith</td>
                            <td>Updated user profile</td>
                            <td>2024-06-02</td>
                        </tr>
                        <tr>
                            <td>Emily Davis</td>
                            <td>Deleted a project</td>
                            <td>2024-06-03</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="section1">
                <h2>Recent Projects</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Project Name</th>
                            <th>Status</th>
                            <th>Deadline</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Project Alpha</td>
                            <td>In Progress</td>
                            <td>2024-07-01</td>
                        </tr>
                        <tr>
                            <td>Project Beta</td>
                            <td>Completed</td>
                            <td>2024-06-15</td>
                         </tr>
                        <tr>
                            <td>Project Gamma</td>
                            <td>Not Started</td>
                            <td>2024-08-01</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="section1">
                <h2>Users</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Join Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>John Doe</td>
                            <td>john.doe@example.com</td>
                            <td>Admin</td>
                            <td>2024-01-15</td> 
                        </tr>
                        <tr>
                            <td>Jane Smith</td>
                            <td>jane.smith@example.com</td>
                            <td>User</td>
                            <td>2024-02-20</td>
                         </tr>
                        <tr>
                            <td>Emily Davis</td>
                            <td>emily.davis@example.com</td>
                            <td>User</td>
                            <td>2024-03-25</td>
                        </tr>
                    </tbody>
                </table>
            </section>
         </main>
    );
}

export default MainLayout;  