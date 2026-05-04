function MainLayout() {
    return (
        <main className="main p-5">
            {/* Dashboard cards section with responsive grid and Tailwind spacing */}
            <section className="grid gap-5 mb-5 md:grid-cols-2 xl:grid-cols-3">
                <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                    <h3 className="text-sm font-medium uppercase tracking-wide text-slate-500">Total Users</h3>
                    <p className="mt-2 text-3xl font-semibold text-slate-900">150</p>
                </div>
                <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                    <h3 className="text-sm font-medium uppercase tracking-wide text-slate-500">Total Projects</h3>
                    <p className="mt-2 text-3xl font-semibold text-slate-900">45</p>
                </div>
                <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                    <h3 className="text-sm font-medium uppercase tracking-wide text-slate-500">Active Users</h3>
                    <p className="mt-2 text-3xl font-semibold text-slate-900">120</p>
                </div>
                <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                    <h3 className="text-sm font-medium uppercase tracking-wide text-slate-500">Pending Tasks</h3>
                    <p className="mt-2 text-3xl font-semibold text-slate-900">30</p>
                </div>
                <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                    <h3 className="text-sm font-medium uppercase tracking-wide text-slate-500">Completed Projects</h3>
                    <p className="mt-2 text-3xl font-semibold text-slate-900">200</p>
                </div>
                <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                    <h3 className="text-sm font-medium uppercase tracking-wide text-slate-500">New Users This Month</h3>
                    <p className="mt-2 text-3xl font-semibold text-slate-900">20</p>
                </div>
                <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                    <h3 className="text-sm font-medium uppercase tracking-wide text-slate-500">New Projects This Month</h3>
                    <p className="mt-2 text-3xl font-semibold text-slate-900">10</p>
                </div>
            </section>

            {/* Table sections use the same white card style for consistency */}
            <section className="mb-5 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <h2 className="text-xl font-semibold text-slate-900">Recent Activity</h2>
                <div className="mt-4 overflow-x-auto">
                    <table className="min-w-full border-collapse text-sm">
                        <thead className="bg-slate-50 text-slate-600">
                            <tr>
                                <th className="border-b border-slate-200 px-4 py-3 text-left font-medium">User</th>
                                <th className="border-b border-slate-200 px-4 py-3 text-left font-medium">Action</th>
                                <th className="border-b border-slate-200 px-4 py-3 text-left font-medium">Date</th>
                            </tr>
                        </thead>
                        <tbody className="text-slate-700">
                            <tr className="hover:bg-slate-50">
                                <td className="border-b border-slate-200 px-4 py-3">John Doe</td>
                                <td className="border-b border-slate-200 px-4 py-3">Added a new project</td>
                                <td className="border-b border-slate-200 px-4 py-3">2024-06-01</td>
                            </tr>
                            <tr className="hover:bg-slate-50">
                                <td className="border-b border-slate-200 px-4 py-3">Jane Smith</td>
                                <td className="border-b border-slate-200 px-4 py-3">Updated user profile</td>
                                <td className="border-b border-slate-200 px-4 py-3">2024-06-02</td>
                            </tr>
                            <tr className="hover:bg-slate-50">
                                <td className="border-b border-slate-200 px-4 py-3">Emily Davis</td>
                                <td className="border-b border-slate-200 px-4 py-3">Deleted a project</td>
                                <td className="border-b border-slate-200 px-4 py-3">2024-06-03</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="mb-5 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <h2 className="text-xl font-semibold text-slate-900">Recent Projects</h2>
                <div className="mt-4 overflow-x-auto">
                    <table className="min-w-full border-collapse text-sm">
                        <thead className="bg-slate-50 text-slate-600">
                            <tr>
                                <th className="border-b border-slate-200 px-4 py-3 text-left font-medium">Project Name</th>
                                <th className="border-b border-slate-200 px-4 py-3 text-left font-medium">Status</th>
                                <th className="border-b border-slate-200 px-4 py-3 text-left font-medium">Deadline</th>
                            </tr>
                        </thead>
                        <tbody className="text-slate-700">
                            <tr className="hover:bg-slate-50">
                                <td className="border-b border-slate-200 px-4 py-3">Project Alpha</td>
                                <td className="border-b border-slate-200 px-4 py-3">In Progress</td>
                                <td className="border-b border-slate-200 px-4 py-3">2024-07-01</td>
                            </tr>
                            <tr className="hover:bg-slate-50">
                                <td className="border-b border-slate-200 px-4 py-3">Project Beta</td>
                                <td className="border-b border-slate-200 px-4 py-3">Completed</td>
                                <td className="border-b border-slate-200 px-4 py-3">2024-06-15</td>
                            </tr>
                            <tr className="hover:bg-slate-50">
                                <td className="border-b border-slate-200 px-4 py-3">Project Gamma</td>
                                <td className="border-b border-slate-200 px-4 py-3">Not Started</td>
                                <td className="border-b border-slate-200 px-4 py-3">2024-08-01</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <h2 className="text-xl font-semibold text-slate-900">Users</h2>
                <div className="mt-4 overflow-x-auto">
                    <table className="min-w-full border-collapse text-sm">
                        <thead className="bg-slate-50 text-slate-600">
                            <tr>
                                <th className="border-b border-slate-200 px-4 py-3 text-left font-medium">Name</th>
                                <th className="border-b border-slate-200 px-4 py-3 text-left font-medium">Email</th>
                                <th className="border-b border-slate-200 px-4 py-3 text-left font-medium">Role</th>
                                <th className="border-b border-slate-200 px-4 py-3 text-left font-medium">Join Date</th>
                            </tr>
                        </thead>
                        <tbody className="text-slate-700">
                            <tr className="hover:bg-slate-50">
                                <td className="border-b border-slate-200 px-4 py-3">John Doe</td>
                                <td className="border-b border-slate-200 px-4 py-3">john.doe@example.com</td>
                                <td className="border-b border-slate-200 px-4 py-3">Admin</td>
                                <td className="border-b border-slate-200 px-4 py-3">2024-01-15</td>
                            </tr>
                            <tr className="hover:bg-slate-50">
                                <td className="border-b border-slate-200 px-4 py-3">Jane Smith</td>
                                <td className="border-b border-slate-200 px-4 py-3">jane.smith@example.com</td>
                                <td className="border-b border-slate-200 px-4 py-3">User</td>
                                <td className="border-b border-slate-200 px-4 py-3">2024-02-20</td>
                            </tr>
                            <tr className="hover:bg-slate-50">
                                <td className="border-b border-slate-200 px-4 py-3">Emily Davis</td>
                                <td className="border-b border-slate-200 px-4 py-3">emily.davis@example.com</td>
                                <td className="border-b border-slate-200 px-4 py-3">User</td>
                                <td className="border-b border-slate-200 px-4 py-3">2024-03-25</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    );
}

export default MainLayout;  