import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, GraduationCap, BookOpen, Globe } from "lucide-react";

const AboutSection = () => {
  const schoolPhases = [
    {
      title: "Pre Primary",
      ages: "2–4 years old",
      icon: Users,
      color: "text-dccs-red",
      bgColor: "bg-dccs-red/10",
      description: "Early childhood development with Christian values"
    },
    {
      title: "Foundation Phase",
      ages: "Grade R–3",
      icon: BookOpen,
      color: "text-dccs-yellow",
      bgColor: "bg-dccs-yellow/10",
      description: "Building strong educational foundations"
    },
    {
      title: "Intersen Phase",
      ages: "Grades 4–7",
      icon: GraduationCap,
      color: "text-dccs-blue",
      bgColor: "bg-dccs-blue/10",
      description: "Developing critical thinking and character"
    }
  ];

  return (
    <section id="about" className="space-y-8">
      <div className="glass-card rounded-2xl p-8 animate-fade-in">
        <h2 className="text-4xl font-bold text-center mb-6 text-white drop-shadow-lg">
          Our School
        </h2>
        <p className="text-lg text-center text-white/90 mb-8 leading-relaxed">
          Excellence in education through Christian values, preparing students for life's journey 
          with academic rigor, character development, and spiritual growth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {schoolPhases.map((phase, index) => {
          const IconComponent = phase.icon;
          return (
            <Card 
              key={phase.title}
              className={`glass-card border-0 hover:scale-105 transition-all duration-300 hover:shadow-2xl animate-slide-up ${phase.bgColor}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto w-16 h-16 rounded-full ${phase.bgColor} flex items-center justify-center mb-4`}>
                  <IconComponent className={`h-8 w-8 ${phase.color}`} />
                </div>
                <CardTitle className={`text-xl font-bold ${phase.color}`}>
                  {phase.title}
                </CardTitle>
                <p className="text-lg font-semibold text-gray-700">
                  {phase.ages}
                </p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  {phase.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default AboutSection;