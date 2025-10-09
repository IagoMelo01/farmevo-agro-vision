import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";

const CTA = () => {
  return (
    <section id="contato" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Pronto para revolucionar sua gestão agrícola?
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Solicite uma demonstração gratuita e descubra como o FarmEvo pode transformar sua propriedade
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="text-lg px-8 py-6 shadow-medium">
              Solicitar Demonstração
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Falar com Especialista
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 p-6 rounded-lg bg-background border border-border">
              <Mail className="h-6 w-6 text-primary" />
              <div className="text-left">
                <div className="text-sm text-muted-foreground">Email</div>
                <div className="font-semibold text-foreground">contato@farmevo.com.br</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-3 p-6 rounded-lg bg-background border border-border">
              <Phone className="h-6 w-6 text-primary" />
              <div className="text-left">
                <div className="text-sm text-muted-foreground">Telefone</div>
                <div className="font-semibold text-foreground">(00) 0000-0000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
