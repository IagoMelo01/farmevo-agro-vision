import DemoRequestDialog from "@/components/DemoRequestDialog";
import { Button } from "@/components/ui/button";
import { ArrowRight, Satellite, Database, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-agriculture.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-dark/90" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 backdrop-blur-sm border border-secondary/30 text-white mb-8 animate-fade-in">
            <Satellite className="h-4 w-4" />
            <span className="text-sm font-medium">Tecnologia de ponta para o agronegócio</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Evolua sua gestão
            <span className="block text-secondary mt-2">agrícola com a FARMEVO</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto animate-fade-in">
            ERP completo com análise de satélite, gestão inteligente de culturas e estimativa de produtividade para 13 culturas
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in">
            <DemoRequestDialog>
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 shadow-strong">
                Solicitar Demonstração
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </DemoRequestDialog>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
              Saiba Mais
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in">
            <div className="flex flex-col items-center gap-2 p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <Database className="h-8 w-8 text-secondary mb-2" />
              <div className="text-3xl font-bold text-white">6.000+</div>
              <div className="text-white/80 text-sm">Produtos Comerciais</div>
            </div>
            
            <div className="flex flex-col items-center gap-2 p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <TrendingUp className="h-8 w-8 text-secondary mb-2" />
              <div className="text-3xl font-bold text-white">10.000+</div>
              <div className="text-white/80 text-sm">Variedades de Sementes</div>
            </div>
            
            <div className="flex flex-col items-center gap-2 p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <Satellite className="h-8 w-8 text-secondary mb-2" />
              <div className="text-3xl font-bold text-white">13</div>
              <div className="text-white/80 text-sm">Culturas Suportadas</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
