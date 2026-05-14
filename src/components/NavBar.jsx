// NavBar.jsx — shown on all pages except the detail view
const NavBar = ({ currentPage, navigate }) => {
  const links = [
    { label: "Home", page: "home" },
    { label: "Experience", page: "experience" },
    { label: "Projects", page: "projects" },
    { label: "About", page: "about" },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => navigate("home")}
          className="text-lg font-bold text-gray-900 tracking-tight hover:text-gray-600 transition-colors"
          style={{ fontFamily: "Montserrat, Georgia, serif" }}
        >
          Heesung Han
        </button>
        <div className="flex items-center gap-6">
          {links.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => navigate(page)}
              className={`text-sm font-medium transition-colors ${
                currentPage === page
                  ? "text-gray-900 border-b-2 border-gray-900 pb-0.5"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
