import { Card } from "@/components/ui/card";
import { Satellite, Database, TrendingUp, Map, Calendar, Shield, Package, Users } from "lucide-react";
import satelliteImage from "@/assets/satellite-analysis.jpg";
import erpImage from "@/assets/erp-dashboard.jpg";
import erp from "@/assets/erp.png";

const features = [
  {
    icon: Satellite,
    title: "Análise de Satélite",
    description: "Monitoramento em tempo real com índices NDVI, NDMI, SWIR e EVI para otimizar o manejo da sua lavoura",
  },
  {
    icon: TrendingUp,
    title: "Estimativa de Produtividade",
    description: "Simulador avançado baseado em cultura e localidade para previsão precisa de colheita",
  },
  {
    icon: Calendar,
    title: "Janelas de Plantio ZARC",
    description: "Integração completa com o sistema ZARC para as melhores épocas de plantio",
  },
  {
    icon: Database,
    title: "Base de Dados Completa",
    description: "6.000+ produtos comerciais e 10.000+ variedades de sementes cadastradas",
  },
  {
    icon: Map,
    title: "Gestão de Frota Agrícola",
    description: "Controle completo de maquinário, manutenções e custos operacionais",
  },
  {
    icon: Shield,
    title: "Proteção de Culturas",
    description: "Pesquise pragas e encontre todos os produtos que as combatem no seu estoque",
  },
  {
    icon: Package,
    title: "Gestão de Estoque",
    description: "Controle total de insumos com integração SEFAZ e rastreabilidade completa",
  },
  {
    icon: Users,
    title: "RH e Tarefas",
    description: "Gestão de equipe e cronograma de atividades agrícolas integrado ao ERP",
  },
];

const Features = () => {
  return (
    <section id="recursos" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Tudo que você precisa para gerenciar sua propriedade
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sistema completo de gestão agrícola baseado em Dolibarr com recursos exclusivos para o agronegócio
          </p>
        </div>

        {/* Highlighted Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="overflow-hidden group hover:shadow-strong transition-all duration-300">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={satelliteImage} 
                alt="Análise de Satélite" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-dark/20" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <Satellite className="h-10 w-10 text-secondary mb-3" />
                <h3 className="text-2xl font-bold mb-2">Análise por Satélite</h3>
                <p className="text-white/90">NDVI, NDMI, SWIR e EVI para decisões precisas</p>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden group hover:shadow-strong transition-all duration-300">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={erp} 
                alt="ERP Dolibarr" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-dark/20" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <Database className="h-10 w-10 text-secondary mb-3" />
                <h3 className="text-2xl font-bold mb-2">ERP Completo</h3>
                <p className="text-white/90">Baseado em Dolibarr e adaptado ao agronegócio</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20"
            >
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
