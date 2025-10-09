import logoLight from "@/assets/logo-light.png";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img src={logoLight} alt="FarmEvo" className="h-10 mb-4" />
            <p className="text-white/70 text-sm">
              Tecnologia agrícola inteligente para o futuro do agronegócio
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Produto</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#recursos" className="hover:text-secondary transition-colors">Recursos</a></li>
              <li><a href="#culturas" className="hover:text-secondary transition-colors">Culturas</a></li>
              <li><a href="#tecnologia" className="hover:text-secondary transition-colors">Tecnologia</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-secondary transition-colors">Sobre Nós</a></li>
              <li><a href="#contato" className="hover:text-secondary transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-secondary transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p>© 2025 FarmEvo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
