import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, MessageSquare } from 'lucide-react';

const ContactSection: React.FC = () => {
  // Scheduling form removed and replaced with map showing the shop's area

  return (
    <section id="contato" className="bg-secondary-50 dark:bg-secondary-950">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Entre em Contato</h2>
          <p className="text-center text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto mb-12">
            Estamos prontos para atender você. Veja nossa localização e tire suas dúvidas pelos canais abaixo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-primary-800 dark:text-primary-400 mb-4">
                Informações de Contato
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-accent-600 mr-3" />
                  <p className="text-secondary-700 dark:text-secondary-300">
                    +351 912 345 678
                  </p>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-accent-600 mr-3" />
                  <p className="text-secondary-700 dark:text-secondary-300">
                    contato@barberporto.com
                  </p>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-accent-600 mr-3" />
                  <p className="text-secondary-700 dark:text-secondary-300">
                    Rua da Barberia, 123, Porto, Portugal
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-primary-800 dark:text-primary-400 mb-4">
                Horário de Funcionamento
              </h3>
              <div className="space-y-2 text-secondary-700 dark:text-secondary-300">
                <p>Segunda a Sexta: 10h às 20h</p>
                <p>Sábado: 9h às 18h</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>

            <div>
              <a
                href="https://wa.me/351912345678"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              >
                <MessageSquare className="h-5 w-5 mr-2" />
                Contato via WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white dark:bg-secondary-800 rounded-lg shadow-md overflow-hidden">
              <h3 className="text-2xl font-semibold text-primary-800 dark:text-primary-400 p-6 pb-0">
                Nossa Localização
              </h3>
              <div className="p-6 pt-4">
                <div className="relative w-full h-80 rounded-lg overflow-hidden">
                  <iframe
                    title="Localização - Barber Porto"
                    src="https://www.google.com/maps?q=Rua%20da%20Barberia%2C%20123%2C%20Porto%2C%20Portugal&output=embed"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <p className="text-secondary-600 dark:text-secondary-300 mt-4">
                  Estamos localizados no coração do Porto. Utilize o mapa para encontrar a melhor rota até nós.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;