function Sidebar({ isOpen, onClose }) {
    return (
        <>
            <aside className={`fixed inset-y-0 left-0 z-30 w-72 transform bg-[#2c3e50] text-white p-5 transition-transform duration-300 ease-in-out md:static md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex items-center justify-between mb-6">
                    <div className="text-2xl font-bold">Admin Panel</div>
                    <button
                        className="md:hidden rounded-md bg-white/10 px-2 py-1 text-lg transition hover:bg-white/20"
                        onClick={onClose}
                        aria-label="Close sidebar"
                    >
                        ×
                    </button>
                </div>

                <nav>
                    <ul className="space-y-2">
                        <li className="rounded-md px-4 py-3 cursor-pointer transition-colors hover:bg-[#34495e]">
                            Dashboard
                        </li>
                        <li className="rounded-md px-4 py-3 cursor-pointer transition-colors hover:bg-[#34495e]">
                            Users
                        </li>
                        <li className="rounded-md px-4 py-3 cursor-pointer transition-colors hover:bg-[#34495e]">
                            Projects
                        </li>
                        <li className="rounded-md px-4 py-3 cursor-pointer transition-colors hover:bg-[#34495e]">
                            Reports
                        </li>
                        <li className="rounded-md px-4 py-3 cursor-pointer transition-colors hover:bg-[#34495e]">
                            Settings
                        </li>
                    </ul>
                </nav>
            </aside>

            <div
                className={`fixed inset-0 z-20 bg-black/40 transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onClick={onClose}
            />
        </>
    );
}

export default Sidebar;
