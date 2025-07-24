import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import testimonialImage from "@/assets/testimonial-elderly.jpg";

const testimonials = [
  {
    name: "Maria Silva",
    age: "68 anos",
    image: testimonialImage,
    rating: 5,
    text: "Finalmente consegui organizar minhas finanças! O FinanceBot é muito fácil de usar, converso com ele como se fosse um amigo no WhatsApp.",
    highlight: "Muito fácil de usar"
  },
  {
    name: "João Santos",
    age: "45 anos",
    image: testimonialImage,
    rating: 5,
    text: "Economizei mais de R$ 800 no primeiro mês só seguindo as dicas do FinanceBot. Agora sei exatamente onde estava gastando demais.",
    highlight: "Economizei R$ 800"
  },
  {
    name: "Ana Costa",
    age: "72 anos",
    image: testimonialImage,
    rating: 5,
    text: "Meus filhos ficaram impressionados com como estou controlando bem meus gastos agora. O WhatsApp facilita muito para nós da terceira idade.",
    highlight: "Perfeito para terceira idade"
  }
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            O que nossos usuários dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais de 10.000 pessoas já transformaram suas finanças com o FinanceBot
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-large transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
              <CardContent className="p-6">
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-8 h-8 text-primary" />
                </div>
                
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.age}</p>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {testimonial.highlight}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-foreground font-medium">4.9/5 de satisfação</span>
            <span className="text-muted-foreground">• 10.000+ usuários</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;