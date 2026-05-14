import { useEffect } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import ContentSection from "../components/ContentSection";

const DetailPage = ({ item, onBack }) => {
  const hasSections =
    item.sections && Array.isArray(item.sections) && item.sections.length > 0;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "Montserrat, Georgia, serif" }}>
      {/* Fixed Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-md text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back</span>
        </button>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm mt-16">
          {/* Hero image */}
          <div className="aspect-video w-full bg-gray-100 relative">
            <img
              src={item.detailImage || item.image || item.thumbnailImage}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-10">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{item.title}</h1>

            {item.company && (
              <div className="flex items-center gap-4 text-gray-600 mb-6">
                <span className="font-medium">{item.company}</span>
                {item.date && (
                  <>
                    <span>•</span>
                    <span>{item.date}</span>
                  </>
                )}
              </div>
            )}
            {!item.company && item.date && (
              <div className="text-gray-600 mb-6">
                <span>{item.date}</span>
              </div>
            )}

            {item.tags && item.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {hasSections ? (
              <div className="space-y-12">
                {item.sections.map((section, idx) => (
                  <div
                    key={idx}
                    className="border-t border-gray-200 pt-8 first:border-t-0 first:pt-0"
                  >
                    {section.heading && (
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {section.heading}
                      </h2>
                    )}
                    {section.subheading && (
                      <h3 className="text-xl font-semibold text-gray-700 mb-4">
                        {section.subheading}
                      </h3>
                    )}

                    <ContentSection content={section.content} />

                    {section.links && section.links.length > 0 && (
                      <div className="mt-6 flex flex-wrap gap-3">
                        {section.links.map((link, linkIdx) => (
                          <a
                            key={linkIdx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors"
                          >
                            <span>{link.text}</span>
                            <ExternalLink size={16} />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="prose prose-lg max-w-none">
                {item.fullDesc && (
                  <p className="text-lg text-gray-700 leading-relaxed">{item.fullDesc}</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
