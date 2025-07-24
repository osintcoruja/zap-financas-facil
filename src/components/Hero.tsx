import { Button } from "@/components/ui/button";
import { MessageCircle, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/hero-financial-assistant.jpg";

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium">100% Seguro e Privado</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Controle suas finanças 
              <span className="block text-primary-glow">sem complicação</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-lg">
              O primeiro assistente financeiro que funciona 100% no WhatsApp. 
              Ideal para quem busca simplicidade e praticidade no controle dos gastos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="whatsapp" size="xl" className="group">
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Começar Gratuitamente
              </Button>
              <Button variant="outline" size="xl" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Zap className="w-5 h-5" />
                Ver Demonstração
              </Button>
            </div>
            
            <div className="flex items-center gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Sem instalação</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Totalmente gratuito</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Suporte 24/7</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Assistente Financeiro WhatsApp" 
                className="w-full max-w-lg mx-auto rounded-2xl shadow-large"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-2xl blur-3xl transform scale-110" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;