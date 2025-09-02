import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const fallbackImage = 'https://images.pexels.com/photos/3998426/pexels-photo-3998426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

const galleryImages = [
  {
    id: 1,
    url: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Corte degradê moderno com máquina e acabamento na navalha',
  },
  {
    id: 2,
  url: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?auto=format&fit=crop&w=1600&q=80',
  alt: 'Barbeiro cortando cabelo com tesoura e pente',
  },
  {
    id: 3,
    url: 'https://images.pexels.com/photos/3993124/pexels-photo-3993124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Barbeiro realizando corte fade com precisão',
  },
  {
    id: 4,
    url: 'https://images.pexels.com/photos/3998400/pexels-photo-3998400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Corte undercut com topo texturizado',
  },
  {
    id: 5,
    url: 'https://images.pexels.com/photos/1453005/pexels-photo-1453005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Detalhe de máquina realizando fade baixo',
  },
  {
    id: 6,
    url: 'https://images.pexels.com/photos/3998426/pexels-photo-3998426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Acabamento na nuca com lâmina para contorno limpo',
  },
  {
    id: 7,
    url: 'https://images.pexels.com/photos/2061820/pexels-photo-2061820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Corte médio com textura e volume no topo',
  },
  {
    id: 8,
    url: 'https://images.pexels.com/photos/2505026/pexels-photo-2505026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    alt: 'Corte curto masculino com estilo clássico',
  },
  {
    id: 9,
  url: 'https://images.pexels.com/photos/3992873/pexels-photo-3992873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  alt: 'Barbeiro fazendo acabamento com tesoura',
  },
  {
    id: 10,
  url: 'https://images.pexels.com/photos/3992870/pexels-photo-3992870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  alt: 'Cliente recebendo corte com máquina na barbearia',
  },
];

const GallerySection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  const [direction, setDirection] = useState(0);

  const handlePrevious = () => {
    setDirection(-1);
    goToPrevious();
  };

  const handleNext = () => {
    setDirection(1);
    goToNext();
  };

  return (
    <section id="galeria" className="bg-secondary-50 dark:bg-secondary-950">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Nossa Galeria</h2>
          <p className="text-center text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto mb-12">
            Confira alguns dos nossos melhores trabalhos e estilos que podemos criar para você.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto overflow-hidden rounded-lg shadow-xl">
          <div className="relative aspect-video">
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={currentIndex}
                src={galleryImages[currentIndex].url}
                alt={galleryImages[currentIndex].alt}
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  if (target.src !== fallbackImage) {
                    target.src = fallbackImage;
                  }
                }}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute w-full h-full object-cover pointer-events-none"
              />
            </AnimatePresence>
          </div>

          {/* Controls */}
          <button
            onClick={handlePrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full transition z-10 cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full transition z-10 cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-0 right-0 z-10">
            <div className="flex justify-center space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-2.5 w-2.5 rounded-full ${
                    currentIndex === index
                      ? 'bg-white'
                      : 'bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;