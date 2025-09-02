import React from 'react';
import { Scissors, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 dark:bg-secondary-950 text-white">
      <div className="container-section !py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <a href="#" className="flex items-center mb-4">
              <Scissors className="h-8 w-8 text-accent-500" />
              <span className="ml-2 text-xl font-display font-bold text-white">
                Barber Porto
              </span>
            </a>
            <p className="text-secondary-300 mb-4">
              Cortes de cabelo e barba com estilo para o homem moderno.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-secondary-300 hover:text-accent-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-secondary-300 hover:text-accent-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-secondary-300 hover:text-accent-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#servicos"
                  className="text-secondary-300 hover:text-accent-500 transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#galeria"
                  className="text-secondary-300 hover:text-accent-500 transition-colors"
                >
                  Galeria
                </a>
              </li>
              <li>
                <a
                  href="#testemunhos"
                  className="text-secondary-300 hover:text-accent-500 transition-colors"
                >
                  Testemunhos
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-secondary-300 hover:text-accent-500 transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Horário</h3>
            <ul className="space-y-2 text-secondary-300">
              <li>Segunda a Sexta: 10h às 20h</li>
              <li>Sábado: 9h às 18h</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-700 mt-8 pt-8 text-center text-secondary-400">
          <p>&copy; {currentYear} Barber Porto. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;