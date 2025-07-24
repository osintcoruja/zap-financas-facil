import { Button } from "@/components/ui/button";
import { MessageCircle, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl text-foreground">FinanceBot</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#beneficios" className="text-muted-foreground hover:text-foreground transition-colors">
            Benefícios
          </a>
          <a href="#como-funciona" className="text-muted-foreground hover:text-foreground transition-colors">
            Como Funciona
          </a>
          <a href="#depoimentos" className="text-muted-foreground hover:text-foreground transition-colors">
            Depoimentos
          </a>
          <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="whatsapp" size="lg" className="hidden md:flex">
            <MessageCircle className="w-4 h-4" />
            Começar Agora
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;