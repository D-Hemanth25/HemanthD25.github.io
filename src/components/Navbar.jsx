import { Home, Book, Github, Linkedin} from 'lucide-react';

const NavigationBar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 backdrop-blur-sm pb-safe">
      <div className="max-w-screen-xl mx-auto px-4 mb-2">
        <div className="flex items-center justify-center h-16">
          <div className="flex items-center space-x-6 rounded-full bg-slate-500 px-10 py-4">
            {/* Home Icon */}
            <a href="/" className="text-gray-100 hover:text-fuchsia-200 transition-colors">
              <Home size={20} />
            </a>

            {/* Notes/Book Icon */}
            <a href="#projects" className="text-gray-100 hover:text-fuchsia-200 transition-colors">
              <Book size={20} />
            </a>

            {/* GitHub */}
            <a href="https://github.com/D-Hemanth25" target='_blank' className="text-gray-100 hover:text-fuchsia-200 transition-colors">
              <Github size={20} />
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/hemanth25d/" target='_blank' className="text-gray-100 hover:text-fuchsia-200 transition-colors">
              <Linkedin size={20} />
            </a>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;