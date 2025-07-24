import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Clock } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      <div className="container relative">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Transforme suas finanças hoje mesmo
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Junte-se a mais de 10.000 pessoas que já melhoraram sua vida financeira com o FinanceBot. 
            Comece agora e veja a diferença em apenas 7 dias.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button variant="whatsapp" size="xl" className="group text-lg px-12 py-4">
              <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
              Começar Gratuitamente Agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Configuração em 2 minutos</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              <span>Suporte 24/7 via WhatsApp</span>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
            <p className="text-white font-medium mb-2">✅ Teste grátis por 30 dias</p>
            <p className="text-white/80 text-sm">Não gostou? Cancele quando quiser, sem letras miúdas</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;