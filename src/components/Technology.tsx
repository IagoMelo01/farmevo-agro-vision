import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const techFeatures = [
  "Base de dados com 6.000+ produtos comerciais registrados no MAPA",
  "10.000+ variedades de sementes catalogadas",
  "Busca inteligente por pragas e defensivos",
  "Integração completa com SEFAZ",
  "Gestão de estoque em tempo real",
  "Controle de validade e rastreabilidade",
  "Recomendação automática de adubação",
  "Cálculo de necessidade de calcário",
  "Relatórios de sustentabilidade",
];

const Technology = () => {
  return (
    <section id="tecnologia" className="py-24 bg-gradient-to-br from-primary to-primary/80 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Tecnologia de ponta ao seu alcance
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Nossa base de dados é constantemente atualizada com informações do Ministério da Agricultura, garantindo que você tenha acesso aos melhores produtos e cultivares do mercado.
            </p>
            
            <div className="space-y-4">
              {techFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-secondary p-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-white/95 text-lg">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all duration-300">
              <div className="text-5xl font-bold text-secondary mb-2">6.000+</div>
              <div className="text-xl font-semibold mb-2">Produtos Comerciais</div>
              <p className="text-white/80">
                Todos os defensivos agrícolas registrados no MAPA, com informações detalhadas sobre pragas combatidas
              </p>
            </Card>

            <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all duration-300">
              <div className="text-5xl font-bold text-secondary mb-2">10.000+</div>
              <div className="text-xl font-semibold mb-2">Variedades de Sementes</div>
              <p className="text-white/80">
                Os melhores cultivares para cada cultura e região, com recomendações personalizadas
              </p>
            </Card>

            <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/15 transition-all duration-300">
              <div className="text-5xl font-bold text-secondary mb-2">100%</div>
              <div className="text-xl font-semibold mb-2">Integração ZARC</div>
              <p className="text-white/80">
                Janelas de plantio atualizadas automaticamente para minimizar riscos climáticos
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
