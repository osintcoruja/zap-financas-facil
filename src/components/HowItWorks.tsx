import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, PlusCircle, BarChart3, TrendingUp } from "lucide-react";
import whatsappMockup from "@/assets/whatsapp-mockup.jpg";

const steps = [
  {
    number: "1",
    icon: MessageCircle,
    title: "Inicie a conversa",
    description: "Clique no botão e envie 'Olá' para o FinanceBot no WhatsApp"
  },
  {
    number: "2",
    icon: PlusCircle,
    title: "Registre suas transações",
    description: "Digite facilmente suas receitas e despesas através de mensagens simples"
  },
  {
    number: "3",
    icon: BarChart3,
    title: "Receba relatórios",
    description: "Obtenha gráficos automáticos da sua situação financeira atual"
  },
  {
    number: "4",
    icon: TrendingUp,
    title: "Melhore suas finanças",
    description: "Siga as dicas personalizadas para otimizar seus gastos e investimentos"
  }
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Como funciona em <span className="text-primary">4 passos simples</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sem complicação, sem instalação. Tudo acontece naturalmente no WhatsApp que você já usa todos os dias.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4 group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg relative">
                    {step.number}
                    <div className="absolute -inset-2 bg-primary/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <step.icon className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
            
            <div className="pt-6">
              <Button variant="whatsapp" size="xl" className="w-full sm:w-auto">
                <MessageCircle className="w-5 h-5" />
                Começar Agora - É Grátis!
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <Card className="overflow-hidden shadow-large">
              <CardContent className="p-0">
                <img 
                  src={whatsappMockup} 
                  alt="Interface do WhatsApp com FinanceBot" 
                  className="w-full h-auto"
                />
              </CardContent>
            </Card>
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;