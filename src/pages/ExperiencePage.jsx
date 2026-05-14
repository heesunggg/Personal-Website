import portfolioData from "../data/portfolioData";
import ImageCard from "../components/ImageCard";
import Footer from "../components/Footer";

const ExperiencePage = ({ openDetail }) => {
  const { experiences } = portfolioData;

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "Montserrat, Georgia, serif" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Experience</h1>
          <p className="text-gray-500 text-lg">
            Internships, research roles, and competition teams I've been part of.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {experiences.map((exp) => (
            <ImageCard key={exp.id} item={exp} onClick={() => openDetail(exp, "experience")} />
          ))}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default ExperiencePage;
