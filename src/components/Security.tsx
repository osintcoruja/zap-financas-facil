import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Eye, CheckCircle } from "lucide-react";
import securityIcon from "@/assets/security-icon.jpg";

const securityFeatures = [
  {
    icon: Shield,
    title: "Criptografia End-to-End",
    description: "Mesma segurança do WhatsApp protege seus dados financeiros"
  },
  {
    icon: Lock,
    title: "Dados Locais",
    description: "Suas informações ficam apenas no seu dispositivo"
  },
  {
    icon: Eye,
    title: "Transparência Total",
    description: "Você controla quais dados compartilhar conosco"
  }
];

const Security = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Seus dados financeiros estão <span className="text-primary">100% seguros</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Utilizamos a mesma tecnologia de segurança do WhatsApp para proteger suas informações pessoais e financeiras.
            </p>
            
            <div className="space-y-6 mb-8">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex items-center gap-3 p-4 bg-success/10 rounded-lg border border-success/20">
              <CheckCircle className="w-5 h-5 text-success" />
              <span className="text-success font-medium">Garantia de 30 dias ou seu dinheiro de volta</span>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={securityIcon} 
                alt="Segurança e Proteção de Dados" 
                className="w-full max-w-md mx-auto"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-success/10 rounded-2xl blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;