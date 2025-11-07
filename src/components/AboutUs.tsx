import { Sun, Leaf, Heart } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Orbit Enterprises
            </h2>
          </div>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-12">
            <p>
              Orbit Enterprises is a trusted solar energy company dedicated to bringing clean, renewable power to every home and business. With years of experience in solar design and installation, we focus on delivering high-performance systems that reduce energy bills and protect the environment.
            </p>
            <p>
              Our mission is simple — to make solar energy accessible, efficient, and reliable for everyone. From consultation to installation and maintenance, we handle the entire process with transparency and care.
            </p>
            <p>
              When you choose Orbit Enterprises, you choose:
              
              <ul>
                <li>
                  <strong>Quality:</strong> Premium solar products and expert craftsmanship
                </li>
                <li>
                  <strong>Environment:</strong> Commitment to eco-friendly practices
                </li>
                <li>
                  <strong>Support:</strong> Personalized solutions and ongoing support
                </li>
                <li>
                  <strong>Progress:</strong> Staying ahead with the latest solar technologies
                </li>
              </ul>

            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Sun className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Solar Excellence</h3>
              <p className="text-muted-foreground">We use only Tier-1 solar panels with exceptional performance and long-term warranties.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
              <p className="text-muted-foreground">Every installation contributes to a cleaner planet by reducing carbon emissions and reliance on fossil fuels.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer Care</h3>
              <p className="text-muted-foreground">Our support team is always available to answer your questions and ensure your system runs flawlessly.</p>
            </div>
            
          </div>

          <div className="text-center">
            <p className="text-xl font-semibold text-primary">
              Empowering homes and businesses with smart, sustainable solar energy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
