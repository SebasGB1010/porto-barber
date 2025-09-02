import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Ruler, Sparkles } from 'lucide-react';

type Service = {
  id: number;
  title: string;
  description: string;
  price: string;
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    id: 1,
    title: 'Corte Clássico',
    description: 'Corte tradicional com tesoura e máquina, inclui lavagem.',
  price: '€ 15',
    icon: <Scissors className="h-8 w-8 text-accent-500" />,
  },
  {
    id: 2,
    title: 'Barba Completa',
    description: 'Modelagem, aparar e hidratar sua barba com produtos especiais.',
  price: '€ 12',
    icon: <Ruler className="h-8 w-8 text-accent-500" />,
  },
  {
    id: 3,
    title: 'Combo Corte + Barba',
    description: 'Pacote completo para renovar seu visual com economia.',
  price: '€ 25',
    icon: <Scissors className="h-8 w-8 text-accent-500" />,
  },
  {
    id: 4,
    title: 'Tratamento VIP',
    description: 'Corte, barba, esfoliação facial e massagem relaxante.',
  price: '€ 40',
    icon: <Sparkles className="h-8 w-8 text-accent-500" />,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServicesSection: React.FC = () => {
  return (
    <section id="servicos" className="bg-white dark:bg-secondary-900">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Nossos Serviços</h2>
          <p className="text-center text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto mb-12">
            Oferecemos uma variedade de serviços de barbearia de alta qualidade para atender às suas necessidades.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={item}
              className="bg-secondary-50 dark:bg-secondary-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-secondary-800 dark:text-white text-center mb-2">
                {service.title}
              </h3>
              <p className="text-secondary-600 dark:text-secondary-300 text-center mb-4">
                {service.description}
              </p>
              <p className="text-2xl font-bold text-accent-600 dark:text-accent-400 text-center">
                {service.price}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <a href="#contato" className="btn-primary">
            Fale Conosco
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;