import { MessageCircle, Mail, Shield, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">FinanceBot</span>
            </div>
            <p className="text-white/80 mb-4 max-w-md">
              O assistente financeiro inteligente que funciona 100% no WhatsApp. 
              Simplicidade e segurança para transformar suas finanças.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Produto</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#beneficios" className="hover:text-white transition-colors">Benefícios</a></li>
              <li><a href="#como-funciona" className="hover:text-white transition-colors">Como Funciona</a></li>
              <li><a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <Shield className="w-4 h-4" />
            <span>© 2024 FinanceBot. Todos os direitos reservados.</span>
          </div>
          <div className="flex items-center gap-1 text-white/60 text-sm">
            <span>Feito com</span>
            <Heart className="w-4 h-4 text-red-400" />
            <span>para facilitar sua vida financeira</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;