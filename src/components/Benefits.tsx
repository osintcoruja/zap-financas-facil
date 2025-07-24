import { Card, CardContent } from "@/components/ui/card";
import { 
  MessageCircle, 
  BarChart3, 
  Shield, 
  Zap, 
  Users, 
  Target,
  TrendingUp,
  Clock,
  Smartphone
} from "lucide-react";

const benefits = [
  {
    icon: MessageCircle,
    title: "100% no WhatsApp",
    description: "Controle suas finanças direto no WhatsApp, sem instalar nenhum app adicional."
  },
  {
    icon: Zap,
    title: "Configuração Instantânea",
    description: "Comece a usar em menos de 2 minutos. Basta enviar uma mensagem!"
  },
  {
    icon: BarChart3,
    title: "Relatórios Automáticos",
    description: "Receba gráficos e relatórios personalizados da sua situação financeira."
  },
  {
    icon: Shield,
    title: "Dados Seguros",
    description: "Suas informações ficam protegidas com criptografia de ponta a ponta."
  },
  {
    icon: Target,
    title: "Metas Personalizadas",
    description: "Defina objetivos financeiros e receba orientações para alcançá-los."
  },
  {
    icon: TrendingUp,
    title: "Análise Inteligente",
    description: "IA analisa seus gastos e sugere melhorias para sua saúde financeira."
  },
  {
    icon: Clock,
    title: "Lembretes Automáticos",
    description: "Nunca mais esqueça de registrar uma despesa ou vencimento."
  },
  {
    icon: Users,
    title: "Para Toda Família",
    description: "Interface simples, ideal para pessoas de todas as idades."
  },
  {
    icon: Smartphone,
    title: "Acesso Imediato",
    description: "Consulte suas finanças a qualquer hora, em qualquer lugar."
  }
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-20 bg-gradient-accent">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Por que escolher o <span className="text-primary">FinanceBot</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desenvolvido especialmente para quem busca simplicidade e eficiência no controle financeiro pessoal.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;