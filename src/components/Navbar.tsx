import { Home, Briefcase, Github, Linkedin } from 'lucide-react';

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2">
      <div className="flex items-center gap-6 bg-gray-800/90 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700/50 shadow-lg">
        <NavItem
          icon={<Home size={20} />}
          label="Home"
          onClick={() => scrollToSection('home-section')}
          isActive
        />
        <NavItem
          icon={<Briefcase size={20} />}
          label="Projects"
          onClick={() => scrollToSection('projects-section')}
        />
        <NavItem
          icon={<Github size={20} />}
          label="GitHub"
          href="https://github.com/D-Hemanth25"
          external
        />
        <NavItem
          icon={<Linkedin size={20} />}
          label="LinkedIn"
          href="https://www.linkedin.com/in/hemanth25d/"
          external
        />
      </div>
    </nav>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  href?: string;
  external?: boolean;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({
  icon,
  label,
  isActive,
  href,
  external,
  onClick,
}) => {
  const Component = href ? 'a' : 'button';
  const props = href
    ? {
        href,
        target: external ? '_blank' : undefined,
        rel: external ? 'noopener noreferrer' : undefined,
      }
    : {
        onClick,
      };

  return (
    <Component
      {...props}
      className={`flex flex-col items-center gap-1 transition-colors duration-200 ${
         'text-blue-400 hover:text-gray-100'
      }`}
    >
      {icon}
      <span className="text-xs font-medium">{label}</span>
    </Component>
  );
};

export default Navbar;
