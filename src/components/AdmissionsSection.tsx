import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Calendar, FileText, Users } from "lucide-react";

interface AdmissionsSectionProps {
  setCurrentSection: (section: string) => void;
}

const AdmissionsSection = ({ setCurrentSection }: AdmissionsSectionProps) => {
  const admissionSteps = [
    {
      icon: FileText,
      title: "Application",
      description: "Complete our online application form with required documents"
    },
    {
      icon: Users,
      title: "Interview",
      description: "Meet with our admissions team to discuss your child's needs"
    },
    {
      icon: Calendar,
      title: "Assessment",
      description: "Age-appropriate assessment to determine the best learning pathway"
    },
    {
      icon: CheckCircle,
      title: "Enrollment",
      description: "Welcome to the DCCS family! Begin your educational journey"
    }
  ];

  const benefits = [
    "Faith-based education with Christian values",
    "Small class sizes for personalized attention",
    "Experienced and caring teachers",
    "Modern facilities and resources",
    "Online and in-person learning options",
    "Year-round enrollment opportunities"
  ];

  return (
    <section id="admissions" className="space-y-8">
      <div className="glass-card rounded-2xl p-8 text-center animate-fade-in">
        <h2 className="text-4xl font-bold mb-6 text-white drop-shadow-lg">
          Admissions
        </h2>
        <p className="text-xl text-white/90 mb-8 leading-relaxed">
          Join our community of learners! Enrolments are open year-round for all grade levels.
        </p>
        
        <Button
          onClick={() => setCurrentSection("contact")}
          size="lg"
          className="bg-gradient-to-r from-dccs-red to-dccs-yellow hover:from-dccs-red-light hover:to-dccs-yellow-light text-white font-bold px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Apply Now
        </Button>
      </div>

      {/* Admission Process */}
      <div className="glass-card rounded-2xl p-8 animate-slide-up">
        <h3 className="text-2xl font-bold text-center mb-8 text-white">
          Admission Process
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {admissionSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card 
                key={step.title}
                className="glass border-white/20 hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-white">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-white/80 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Benefits */}
      <div className="glass-card rounded-2xl p-8 animate-slide-up">
        <h3 className="text-2xl font-bold text-center mb-8 text-white">
          Why Choose DCCS?
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit}
              className="flex items-center space-x-3 p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CheckCircle className="h-5 w-5 text-dccs-yellow flex-shrink-0" />
              <span className="text-white font-medium">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdmissionsSection;