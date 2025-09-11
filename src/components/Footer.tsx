import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-16 glass-card rounded-2xl p-8 text-center animate-fade-in">
      <div className="space-y-4">
        <div className="text-white text-lg font-medium">
          Durban Christian Centre School &copy; 2024. All Rights Reserved.
        </div>
        
        <div className="flex items-center justify-center text-white/80 text-sm">
          <span>Website made with</span>
          <Heart className="h-4 w-4 mx-1 text-dccs-red fill-current" />
          <span>by Noah Sangweni</span>
        </div>
        
        <div className="pt-4 border-t border-white/20">
          <p className="text-white/60 text-sm">
            Faith-based education • Academic excellence • Character development
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;