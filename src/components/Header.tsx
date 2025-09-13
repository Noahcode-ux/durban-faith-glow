import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

interface HeaderProps {
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

const Header = ({ currentSection, setCurrentSection }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "admissions", label: "Admissions" },
    { id: "news", label: "News" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavigation = (sectionId: string) => {
    setCurrentSection(sectionId);
    setIsMobileMenuOpen(false);
    
    if (sectionId === "news") {
      // Open Facebook page in new tab
      window.open("https://www.facebook.com/officialdccschool/", "_blank");
      return;
    }
    
    // Smooth scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 glass rounded-none border-0">
      <div className="container mx-auto px-4 py-4">
        {/* Logo and Title */}
        <div className="flex items-center justify-center mb-4">
          <img 
            src="//dccschool.co.za/wp-content/uploads/2020/09/logo-dccs-amend2.png" 
            alt="DCCS Logo" 
            className="h-16 w-auto mr-4"
          />
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
              Durban Christian Centre School
            </h1>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-center items-center gap-6 mb-4">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant={currentSection === item.id ? "secondary" : "ghost"}
              onClick={() => handleNavigation(item.id)}
              className="text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              {item.label}
            </Button>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex justify-center mb-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:bg-white/20"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden flex flex-col gap-2 mb-4">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={currentSection === item.id ? "secondary" : "ghost"}
                onClick={() => handleNavigation(item.id)}
                className="text-white hover:bg-white/20 justify-center"
              >
                {item.label}
              </Button>
            ))}
          </nav>
        )}

        {/* CTA and Contact Info */}
        <div className="text-center space-y-3">
          <Button
            onClick={() => handleNavigation("admissions")}
            className="bg-gradient-to-r from-dccs-red to-dccs-yellow hover:from-dccs-red-light hover:to-dccs-yellow-light text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Enrol Now
          </Button>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-white text-sm">
            <a href="tel:0312425005" className="flex items-center gap-2 hover:text-dccs-blue-light transition-colors">
              <Phone className="h-4 w-4" />
              031 242 5005
            </a>
            <a href="mailto:enrolments@dccschool.co.za" className="flex items-center gap-2 hover:text-dccs-red-light transition-colors">
              <Mail className="h-4 w-4" />
              enrolments@dccschool.co.za
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;