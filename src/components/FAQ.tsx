import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O FinanceBot é realmente gratuito?",
    answer: "Sim! O FinanceBot é completamente gratuito para uso pessoal. Você pode controlar todas as suas finanças sem pagar nada. Oferecemos recursos premium opcionais para quem deseja funcionalidades avançadas."
  },
  {
    question: "Preciso instalar algum aplicativo?",
    answer: "Não! Essa é a grande vantagem do FinanceBot. Tudo funciona 100% dentro do WhatsApp que você já tem no seu celular. Basta enviar uma mensagem para começar a usar."
  },
  {
    question: "Meus dados estão seguros?",
    answer: "Absolutamente! Utilizamos a mesma criptografia end-to-end do WhatsApp. Seus dados financeiros ficam protegidos e você mantém total controle sobre o que compartilhar."
  },
  {
    question: "É difícil de usar para pessoas mais velhas?",
    answer: "Pelo contrário! O FinanceBot foi desenvolvido pensando especialmente na simplicidade. Se você sabe usar o WhatsApp, já sabe usar o FinanceBot. É como conversar com um amigo."
  },
  {
    question: "Como registro uma despesa?",
    answer: "É muito simples! Basta enviar uma mensagem como 'Gastei R$ 50 no supermercado' ou 'Despesa: R$ 25 gasolina'. O FinanceBot entende e registra automaticamente."
  },
  {
    question: "Posso usar no computador também?",
    answer: "Sim! Como funciona pelo WhatsApp, você pode usar tanto no celular quanto no WhatsApp Web no seu computador. Seus dados ficam sincronizados automaticamente."
  },
  {
    question: "Como recebo os relatórios?",
    answer: "Os relatórios são enviados automaticamente pelo WhatsApp em formato de imagem e gráficos. Você pode solicitar a qualquer momento digitando 'relatório' ou 'resumo'."
  },
  {
    question: "Funciona para empresas também?",
    answer: "O FinanceBot é focado em finanças pessoais e familiares. Para empresas, recomendamos soluções específicas de gestão empresarial."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Esclarecemos as principais dúvidas sobre o FinanceBot
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background border border-border rounded-lg px-6 shadow-soft"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-foreground">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;