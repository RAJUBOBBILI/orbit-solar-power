import { useState } from "react";
import { Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/orbit_enterprises.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // close menu on mobile after clicking
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="Orbit Enterprises Logo" className="h-32 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Our Features
            </button>
            <button
              onClick={() => scrollToSection("quotation")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Quotation
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors"
            >
              About Us
            </button>
            <Button
              onClick={() => scrollToSection("quotation")}
              className="bg-primary hover:bg-primary/90"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 bg-background border border-border rounded-lg shadow-lg">
            <div className="flex flex-col items-start p-4 space-y-3">
              <button
                onClick={() => scrollToSection("features")}
                className="w-full text-left text-foreground hover:text-primary transition-colors"
              >
                Our Features
              </button>
              <button
                onClick={() => scrollToSection("quotation")}
                className="w-full text-left text-foreground hover:text-primary transition-colors"
              >
                Quotation
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="w-full text-left text-foreground hover:text-primary transition-colors"
              >
                About Us
              </button>
              <Button
                onClick={() => scrollToSection("quotation")}
                className=" bg-primary hover:bg-primary/90"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
