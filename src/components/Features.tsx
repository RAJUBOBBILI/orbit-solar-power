import { Zap, Users, Award, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Efficient Solar Panels",
    description: "Our advanced solar panels are designed for maximum energy output and long-term durability. Enjoy higher efficiency and lower electricity bills, backed by top-tier solar technology."
  },
  {
    icon: Users,
    title: "Professional Installation",
    description: "Our certified technicians ensure a smooth and safe installation process from start to finish. We handle every detail—design, setup, and inspection—so you can relax while we power your property."
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    description: "At Orbit Enterprises, we stand behind every system we install. Each project includes premium components, strict quality control, and long-term warranty support."
  },
  {
    icon: TrendingUp,
    title: "Cost Savings",
    description: "Switching to solar energy saves you money from day one. Reduce your monthly electricity costs and gain energy independence for years to come."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover what makes our solar solutions stand out
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-shadow duration-300 border-border bg-card"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
