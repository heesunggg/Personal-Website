const Footer = () => (
  <footer className="mt-20 pt-8 border-t border-gray-200">
    <div className="text-center">
      <p className="text-gray-600 mb-2">Get in touch!</p>
      <div className="flex justify-center gap-6 flex-wrap text-gray-700">
        <a
          href="mailto:1220heesung@gmail.com"
          className="hover:text-gray-900 transition-colors"
        >
          1220heesung@gmail.com
        </a>
        <span className="text-gray-400">•</span>
        <a
          href="tel:310-650-7055"
          className="hover:text-gray-900 transition-colors"
        >
          310-650-7055
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
