import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

type Testimonial = {
  id: number;
  name: string;
  rating: number;
  comment: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ricardo Oliveira',
    rating: 5,
    comment:
      'O melhor barbeiro do Porto! Sempre saio de lá com um visual renovado e recebo muitos elogios. Atendimento excepcional.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    name: 'João Martins',
    rating: 5,
    comment:
      'Encontrei o Barber Porto por indicação e não me arrependi. O ambiente é aconchegante e o trabalho é impecável.',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    name: 'André Santos',
    rating: 5,
    comment:
      'Frequento a barbearia há mais de um ano e sempre saio satisfeito. Recomendo para quem busca qualidade e bom atendimento.',
    image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testemunhos" className="bg-white dark:bg-secondary-900">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Testemunhos</h2>
          <p className="text-center text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto mb-12">
            Veja o que nossos clientes estão dizendo sobre nós.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={item}
              className="bg-secondary-50 dark:bg-secondary-800 p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-secondary-800 dark:text-white">
                    {testimonial.name}
                  </h3>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-accent-500 fill-accent-500"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-secondary-600 dark:text-secondary-300">
                "{testimonial.comment}"
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;