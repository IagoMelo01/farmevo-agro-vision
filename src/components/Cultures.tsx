import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wheat, Coffee, Sprout, Bean, Leaf} from "lucide-react";

const cultures = [
  { name: "ARROZ", category: "Grão" },
  { name: "ARROZ IRRIGADO", category: "Grão" },
  { name: "FEIJÃO", category: "Leguminosa" },
  { name: "MILHO", category: "Grão" },
  { name: "SOJA", category: "Oleaginosa" },
  { name: "TRIGO", category: "Grão" },
  { name: "AMENDOIM", category: "Oleaginosa" },
  { name: "ALGODÃO HERBÁCEO", category: "Fibra" },
  { name: "FEIJÃO CAUPI", category: "Leguminosa" },
  { name: "CEVADA IRRIGADA", category: "Grão" },
  { name: "CEVADA SEQUEIRO", category: "Grão" },
  { name: "GIRASSOL", category: "Oleaginosa" },
  { name: "SORGO", category: "Grão" },
];

const Cultures = () => {
  return (
    <section id="culturas" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm">
            <Wheat className="h-4 w-4 mr-2" />
            13 Culturas Suportadas
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Gestão completa para suas culturas
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Janelas de plantio, estimativa de produtividade, recomendação de adubação e calcário para cada cultura
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
          {cultures.map((culture, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-medium transition-all duration-300 hover:border-primary/30 group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                {culture.category === "Grão" && <Wheat className="h-6 w-6 text-primary group-hover:text-secondary transition-colors" />}
                {culture.category === "Oleaginosa" && <Sprout className="h-6 w-6 text-primary group-hover:text-secondary transition-colors" />}
                {culture.category === "Leguminosa" && <Bean className="h-6 w-6 text-primary group-hover:text-secondary transition-colors" />}
                {culture.category === "Fibra" && <Sprout className="h-6 w-6 text-primary group-hover:text-secondary transition-colors" />}
                <Badge variant="secondary" className="text-xs">{culture.category}</Badge>
              </div>
              <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                {culture.name}
              </h3>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Card className="p-8 text-center border-2 border-primary/20 bg-primary/5">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <p className="text-muted-foreground">Integrado com ZARC</p>
          </Card>
          <Card className="p-8 text-center border-2 border-secondary/20 bg-secondary/5">
            <div className="text-4xl font-bold text-secondary mb-2">10.000+</div>
            <p className="text-muted-foreground">Cultivares Cadastrados</p>
          </Card>
          <Card className="p-8 text-center border-2 border-primary/20 bg-primary/5">
            <div className="text-4xl font-bold text-primary mb-2">6.000+</div>
            <p className="text-muted-foreground">Produtos MAPA</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Cultures;
