import { Link } from "react-router";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-900 tracking-tight">
          NoteList
        </div>

        {/* Nav */}
        <nav className="flex items-center gap-3">
          <Link
            to="/"
            className="text-sm text-gray-600 hover:text-gray-900 transition"
          >
            Home
          </Link>

          <Link
            to="/create"
            className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition shadow-sm"
          >
            + Create
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
