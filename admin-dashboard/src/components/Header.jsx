function Header({ onMenuClick }) {
    return (
        <header className="flex items-center justify-between px-4 py-4 sm:px-6 bg-slate-100 border-b border-slate-200">
            <div className="flex items-center gap-3">
                <button
                    className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md bg-slate-700 text-white transition hover:bg-slate-900"
                    onClick={onMenuClick}
                    aria-label="Open sidebar"
                >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                <h1 className="text-xl font-semibold text-slate-900">Dashboard</h1>
            </div>

            <div className="flex flex-wrap items-center gap-3">
                <button className="rounded-md bg-slate-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-900">
                    Add User
                </button>
                <button className="rounded-md bg-slate-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-900">
                    Add Project
                </button>
            </div>
        </header>
    );
}

export default Header;


