import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-hero-pattern bg-cover bg-center flex items-center">
      <div className="container-section text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Corte moderno, estilo único
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Transforme seu visual com os melhores cortes e barbas do Porto.
            Experiência exclusiva para homens modernos.
          </p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <a href="#contato" className="btn-primary">
              Reservar agora
            </a>
            <a href="#servicos" className="btn-secondary">
              Ver serviços
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-secondary-950/80 to-transparent"></div>
    </section>
  );
};

export default HeroSection;