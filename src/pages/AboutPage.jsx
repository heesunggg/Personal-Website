import { Mail, Linkedin, Github, FileText } from "lucide-react";
import portfolioData from "../data/portfolioData";
import Footer from "../components/Footer";

const AboutPage = () => {
  const { name, title, bio, email, linkedin, github, resume, profileImage } = portfolioData;

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "Montserrat, Georgia, serif" }}>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
          <div className="flex-shrink-0">
            <img
              src={profileImage}
              alt={name}
              className="w-56 h-56 rounded-2xl object-cover border border-gray-200 shadow-md"
            />
          </div>
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-2">{name}</h1>
            <p className="text-xl text-gray-500 mb-6">{title}</p>
            <p className="text-base text-gray-600 leading-relaxed">{bio}</p>
          </div>
        </div>

        {/* Skills snapshot */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
            Tools & Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              "SolidWorks", "Autodesk Fusion 360", "Onshape", "CAM / CNC",
              "Manual Lathe", "Manual Mill", "3D Printing", "Laser Cutting",
              "Arduino", "MATLAB", "Python", "Git / GitHub",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
            Contact
          </h2>
          <div className="flex flex-wrap gap-4">
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

        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
