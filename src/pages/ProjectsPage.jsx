import portfolioData from "../data/portfolioData";
import ImageCard from "../components/ImageCard";
import Footer from "../components/Footer";

const ProjectsPage = ({ openDetail }) => {
  const { projects } = portfolioData;

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "Montserrat, Georgia, serif" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Projects</h1>
          <p className="text-gray-500 text-lg">
            Engineering builds, software, and design work across school and personal projects.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {projects.map((proj) => (
            <ImageCard key={proj.id} item={proj} onClick={() => openDetail(proj, "project")} />
          ))}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default ProjectsPage;
