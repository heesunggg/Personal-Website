import { Mail, Linkedin, Github, FileText } from "lucide-react";
import portfolioData from "../data/portfolioData";
import ImageCard from "../components/ImageCard";
import Footer from "../components/Footer";

const SectionHeading = ({ children }) => (
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-gray-900 mb-3 inline-block relative">
      {children}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-900 transform translate-y-2" />
    </h2>
  </div>
);

const HomePage = ({ navigate, openDetail }) => {
  const { name, title, bio, email, linkedin, github, resume, profileImage, experiences, projects } =
    portfolioData;

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "Montserrat, Georgia, serif" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Hero */}
        <div className="text-center mb-20">
          <div className="mb-8 flex justify-center">
            <img
              src={profileImage}
              alt={name}
              className="w-48 h-48 rounded-full object-cover border-2 border-gray-200 shadow-md"
            />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-3">{name}</h1>
          <p className="text-xl text-gray-600 mb-6">{title}</p>
          <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">{bio}</p>

          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 px-5 py-2.5 border border-gray-300 rounded text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all"
            >
              <Mail size={18} /> <span>Email</span>
            </a>
            <a
              href={`https://${linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 border border-gray-300 rounded text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all"
            >
              <Linkedin size={18} /> <span>LinkedIn</span>
            </a>
            <a
              href={`https://${github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 border border-gray-300 rounded text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all"
            >
              <Github size={18} /> <span>GitHub</span>
            </a>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 border border-gray-300 rounded text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all"
            >
              <FileText size={18} /> <span>Resume</span>
            </a>
          </div>
        </div>

        {/* Experience */}
        <div className="mb-20">
          <SectionHeading>Experience</SectionHeading>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {experiences.map((exp) => (
              <ImageCard key={exp.id} item={exp} onClick={() => openDetail(exp, "experience")} />
            ))}
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => navigate("experience")}
              className="text-sm text-gray-500 hover:text-gray-900 underline underline-offset-4 transition-colors"
            >
              View all experience →
            </button>
          </div>
        </div>

        {/* Projects */}
        <div>
          <SectionHeading>Projects</SectionHeading>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {projects.map((proj) => (
              <ImageCard key={proj.id} item={proj} onClick={() => openDetail(proj, "project")} />
            ))}
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => navigate("projects")}
              className="text-sm text-gray-500 hover:text-gray-900 underline underline-offset-4 transition-colors"
            >
              View all projects →
            </button>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
