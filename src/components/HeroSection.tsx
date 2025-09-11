import { Button } from "@/components/ui/button";
import heroImage from "@/assets/school-hero.jpg";

interface HeroSectionProps {
  setCurrentSection: (section: string) => void;
}

const HeroSection = ({ setCurrentSection }: HeroSectionProps) => {
  return (
    <section 
      id="home" 
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden rounded-2xl"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-dccs-red/80 via-dccs-yellow/60 to-dccs-blue/80 backdrop-blur-sm" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-2xl animate-fade-in">
          Welcome to
          <span className="block gradient-text bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
            Excellence in Education
          </span>
        </h2>
        
        <p className="text-xl md:text-2xl mb-8 drop-shadow-lg leading-relaxed animate-slide-up">
          Durban Christian Centre School is a faith-based academic facility in Mayville, Durban. 
          We offer top quality education, Christian ethos and values from Pre Primary to High School, 
          both in-person and online.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <Button
            onClick={() => setCurrentSection("admissions")}
            size="lg"
            className="bg-white text-dccs-blue hover:bg-gray-100 font-bold px-8 py-4 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
          >
            Apply Now
          </Button>
          <Button
            onClick={() => setCurrentSection("about")}
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-dccs-blue font-bold px-8 py-4 rounded-xl shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;