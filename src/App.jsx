import { useEffect, useRef, useState } from "react";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import DetailPage from "./pages/DetailPage";
import portfolioData from "./data/portfolioData";

/**
 * App.jsx — hash-based client-side router
 *
 * Routes (all under the URL hash so GitHub Pages needs no config):
 *   #/                       -> home
 *   #/experience             -> experience list
 *   #/projects               -> projects list
 *   #/about                  -> about
 *   #/experience/:key        -> experience detail  (key = item.slug or item.id)
 *   #/projects/:key          -> project detail
 *
 * Every in-app navigation pushes a real history entry, so the browser
 * Back/Forward buttons and trackpad back-swipe move within the site
 * instead of leaving it, and any view can be shared or reloaded.
 */

const TOP_LEVEL = ["experience", "projects", "about"];

const findItem = (list, key) =>
  list.find((it) => String(it.slug || it.id) === key);

// Derive the current view from window.location.hash
const parseHash = () => {
  const parts = window.location.hash
    .replace(/^#\/?/, "")
    .split("/")
    .filter(Boolean)
    .map(decodeURIComponent);
  const [seg0, seg1] = parts;
  const page = TOP_LEVEL.includes(seg0) ? seg0 : "home";

  let detail = null;
  if (seg1 && (seg0 === "experience" || seg0 === "projects")) {
    const list =
      seg0 === "experience" ? portfolioData.experiences : portfolioData.projects;
    const item = findItem(list, seg1);
    if (item) detail = { item, type: seg0 === "experience" ? "experience" : "project" };
  }
  return { page, detail };
};

const App = () => {
  const [route, setRoute] = useState(parseHash);
  const scrollMap = useRef({}); // hash -> scrollY, for Back/Forward restoration

  // Recompute the view whenever the hash changes for any reason
  useEffect(() => {
    const onPopOrHash = () => {
      setRoute(parseHash());
      requestAnimationFrame(() => {
        window.scrollTo(0, scrollMap.current[window.location.hash] || 0);
      });
    };
    window.addEventListener("popstate", onPopOrHash);
    window.addEventListener("hashchange", onPopOrHash);
    return () => {
      window.removeEventListener("popstate", onPopOrHash);
      window.removeEventListener("hashchange", onPopOrHash);
    };
  }, []);

  // Push a new history entry and move to it (forward navigation)
  const go = (hash) => {
    if (window.location.hash === hash) return;
    scrollMap.current[window.location.hash] = window.scrollY;
    window.history.pushState({ internal: true }, "", hash);
    setRoute(parseHash());
    requestAnimationFrame(() => window.scrollTo(0, 0));
  };

  const navigate = (target) => go(target === "home" ? "#/" : `#/${target}`);

  const openDetail = (item, type) => {
    const base = type === "experience" ? "experience" : "projects";
    go(`#/${base}/${item.slug || item.id}`);
  };

  // In-page Back button: mirror the browser Back when we have somewhere to
  // return to, otherwise fall back to the parent list (e.g. deep-link reload)
  const closeDetail = () => {
    if (window.history.state && window.history.state.internal) {
      window.history.back();
    } else {
      navigate(route.page);
    }
  };

  if (route.detail) {
    return <DetailPage item={route.detail.item} onBack={closeDetail} />;
  }

  return (
    <div style={{ fontFamily: "Montserrat, Georgia, serif" }}>
      <NavBar currentPage={route.page} navigate={navigate} />

      {route.page === "home" && (
        <HomePage navigate={navigate} openDetail={openDetail} />
      )}
      {route.page === "experience" && <ExperiencePage openDetail={openDetail} />}
      {route.page === "projects" && <ProjectsPage openDetail={openDetail} />}
      {route.page === "about" && <AboutPage />}
    </div>
  );
};

export default App;
