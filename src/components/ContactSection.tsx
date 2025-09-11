import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: "39 Galway Road, Mayville, Durban",
      action: "Get Directions",
      href: "https://maps.google.com?q=39+Galway+Road,+Mayville,+Durban",
      color: "text-dccs-red"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "031 242 5005",
      action: "Call Now",
      href: "tel:0312425005",
      color: "text-dccs-blue"
    },
    {
      icon: Mail,
      title: "Email",
      details: "enrolments@dccschool.co.za",
      action: "Send Email",
      href: "mailto:enrolments@dccschool.co.za",
      color: "text-dccs-yellow"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Mon - Fri: 7:30 AM - 3:30 PM",
      action: "Visit Us",
      href: "#",
      color: "text-dccs-red"
    }
  ];

  return (
    <section id="contact" className="space-y-8">
      <div className="glass-card rounded-2xl p-8 text-center animate-fade-in">
        <h2 className="text-4xl font-bold mb-6 text-white drop-shadow-lg">
          Contact Us
        </h2>
        <p className="text-lg text-white/90 leading-relaxed">
          Ready to join our community? Get in touch with us today to learn more about enrollment opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactInfo.map((info, index) => {
          const IconComponent = info.icon;
          return (
            <Card 
              key={info.title}
              className="glass-card border-0 hover:scale-105 transition-all duration-300 hover:shadow-2xl animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <IconComponent className={`h-8 w-8 ${info.color}`} />
                </div>
                <CardTitle className="text-lg font-bold text-white">
                  {info.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="text-center space-y-4">
                <p className="text-white/80 font-medium leading-relaxed">
                  {info.details}
                </p>
                
                {info.href !== "#" && (
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-white/30 text-white hover:bg-white hover:text-gray-800 transition-all duration-300"
                  >
                    <a href={info.href} target={info.href.startsWith('http') ? '_blank' : '_self'}>
                      {info.action}
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Contact Form */}
      <div className="glass-card rounded-2xl p-8 animate-slide-up">
        <h3 className="text-2xl font-bold text-center mb-6 text-white">
          Quick Inquiry
        </h3>
        
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-dccs-blue backdrop-blur-sm"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-dccs-blue backdrop-blur-sm"
            />
          </div>
          
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-dccs-blue backdrop-blur-sm mb-4"
          />
          
          <div className="text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-dccs-blue to-dccs-red hover:from-dccs-blue-light hover:to-dccs-red-light text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Send className="h-5 w-5 mr-2" />
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;