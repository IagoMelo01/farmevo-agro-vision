import { Button } from "@/components/ui/button";
import logoColor from "@/assets/logo-color.png";
import logoDark from "@/assets/logo-dark.png";
import logoGreen from "@/assets/logo-green.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <img src={logoGreen} alt="FarmEvo" className="h-12 w-auto" />
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#recursos" className="text-foreground hover:text-primary transition-colors font-medium">
              Recursos
            </a>
            <a href="#culturas" className="text-foreground hover:text-primary transition-colors font-medium">
              Culturas
            </a>
            <a href="#tecnologia" className="text-foreground hover:text-primary transition-colors font-medium">
              Tecnologia
            </a>
            <a href="#contato" className="text-foreground hover:text-primary transition-colors font-medium">
              Contato
            </a>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:inline-flex">
              Login
            </Button>
            <Button>
              Demonstração
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
