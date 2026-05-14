import { useState } from "react";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import DetailPage from "./pages/DetailPage";

/**
 * App.jsx — client-side router shell
 *
 * Pages:  "home" | "experience" | "projects" | "about"
 * Detail: any item from experiences or projects opens DetailPage
 *         on top of whatever page was active (Back returns to it)
 */
const App = () => {
  const [page, setPage] = useState("home");         // active top-level page
  const [detail, setDetail] = useState(null);       // { item, type, fromPage }
  const [scrollPositions, setScrollPositions] = useState({}); // saved scroll per page

  // Navigate between top-level pages
  const navigate = (target) => {
    // Save scroll position of current page before leaving
    setScrollPositions((prev) => ({ ...prev, [page]: window.scrollY }));
    setDetail(null);
    setPage(target);
    // Restore scroll for the destination page on next tick
    setTimeout(() => {
      window.scrollTo(0, scrollPositions[target] || 0);
    }, 0);
  };

  // Open a detail view on top of the current page
  const openDetail = (item, type) => {
    setScrollPositions((prev) => ({ ...prev, [page]: window.scrollY }));
    setDetail({ item, type, fromPage: page });
  };

  // Go back from detail to the page it was opened from
  const closeDetail = () => {
    const fromPage = detail?.fromPage || "home";
    setDetail(null);
    setTimeout(() => {
      window.scrollTo(0, scrollPositions[fromPage] || 0);
    }, 0);
  };

  // Detail view overrides everything
  if (detail) {
    return <DetailPage item={detail.item} onBack={closeDetail} />;
  }

  return (
    <div style={{ fontFamily: "Montserrat, Georgia, serif" }}>
      <NavBar currentPage={page} navigate={navigate} />

      {page === "home" && (
        <HomePage navigate={navigate} openDetail={openDetail} />
      )}
      {page === "experience" && (
        <ExperiencePage openDetail={openDetail} />
      )}
      {page === "projects" && (
        <ProjectsPage openDetail={openDetail} />
      )}
      {page === "about" && (
        <AboutPage />
      )}
    </div>
  );
};

export default App;
