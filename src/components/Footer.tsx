import { Sun, Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";


const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sun className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">Orbit Enterprises</span>
            </div>
            <p className="text-muted-foreground">
              Powering homes and businesses with sustainable, affordable solar
              energy solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a
                  href="https://www.instagram.com/orbit_solar_systems"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>


          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Residential Solar</li>
              <li>Commercial Solar</li>
              <li>Installation</li>
              <li>Maintenance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <a
                  href="mailto:info@orbitenterprises.com"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>Orbit.rvpm@gmail.com</span>
                </a>
              </li>

              <li className="flex items-center gap-2">
                <a
                  href="tel:+919010888099"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>+91 9010888099</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+9195534 79199"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>+91 95534 79199</span>
                </a>
              </li>

              <li className="flex items-center gap-2">
                <a
                  href="https://maps.app.goo.gl/jEqFuQgpbcumG4uLA?g_st=ipc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <MapPin className="h-6 w-6" />
                  <span>
                    Ravulapalem,
                    East Godavari, Andhra Pradesh, 533238
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Orbit Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
