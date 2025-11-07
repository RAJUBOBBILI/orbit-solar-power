import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import QuotationForm from "@/components/QuotationForm";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <QuotationForm />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default Index;
