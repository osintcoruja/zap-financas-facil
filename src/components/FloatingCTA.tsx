import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button 
        variant="whatsapp" 
        size="lg" 
        className="rounded-full shadow-large hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline">Começar Agora</span>
      </Button>
    </div>
  );
};

export default FloatingCTA;