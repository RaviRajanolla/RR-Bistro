import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Users,
  Award,
  X,
  ChefHat,
  Building,
  Briefcase,
  Target,
  Coffee,
  DoorClosed
} from 'lucide-react';

// Motion-enabled Link
const MotionLink = motion(Link);

// Lightbox Component
const Lightbox: React.FC<{
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}> = ({ images, currentIndex, onClose, onNext, onPrev }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
      >
        <X className="h-8 w-8" />
      </button>
      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 text-2xl font-bold"
      >
        ‹
      </button>
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 text-2xl font-bold"
      >
        ›
      </button>
      <img
        src={images[currentIndex]}
        alt={`Gallery ${currentIndex + 1}`}
        className="max-w-full max-h-full object-contain"
      />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
};

const Corporate = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    'https://media.gettyimages.com/id/1490117284/photo/businesspeople-at-working-lunch.jpg?s=612x612&w=0&k=20&c=YsPjsMEkZTg0gsvOo6N3gKxlA3g2RUcMqhweASm2_QY=',
    'https://media.gettyimages.com/id/1446478773/photo/business-people-are-talking-together-during-a-teambuilding-event-in-a-luxury-restaurant.jpg?s=612x612&w=0&k=20&c=5TFUxQ-_opIp6SUWPbuDOItFH-RQAg9tJfxNGYjfsG8=',
    'https://media.gettyimages.com/id/1426263301/photo/young-businesswoman-arriving-at-the-restaurant-and-shake-hands-with-colleagues.jpg?s=612x612&w=0&k=20&c=J5xZdVZ68Uz2YbjrqEw2Ch5BmG7OSC8a49uer-k0-ZY=',
    'https://media.gettyimages.com/id/2167419991/photo/workers-in-business-office.jpg?s=612x612&w=0&k=20&c=fw6sXOPFHXyudg5Z-gkx3iqaBGVO4g-x0ogntfqJA6I=',
    'https://media.gettyimages.com/id/2170540467/photo/colleagues-having-a-coffee-break.jpg?s=612x612&w=0&k=20&c=DlMQpwaIbZvikxfSOOsXNcmYcL2Aqpp7CzJqwycugqg=',
    'https://media.gettyimages.com/id/1345020842/photo/high-angle-view-of-businessmen-and-businesswomen-discussing-together-during-seminar-at.jpg?s=612x612&w=0&k=20&c=VLv8tPjwPnB7al79Gm3ZxxXibMpiDGhokdOxpzFRZY0=',
    'https://media.gettyimages.com/id/1147479364/photo/sit-and-have-your-stomach-filled.jpg?s=612x612&w=0&k=20&c=EaE8QctNQvKkOWbwXMByq33utWBZoF_RaAr28Ea1D40=',
    'https://media.gettyimages.com/id/1953261549/photo/3d-rendering-of-open-place-coworking-office.jpg?s=612x612&w=0&k=20&c=NDVVYLBS3Amz63cQDxZ0_QjxvUX-wfit9YhmOEqF4wQ=',
    'https://media.gettyimages.com/id/1225526116/photo/top-view-3d-image-of-a-environmentally-friendly-office-space.jpg?s=612x612&w=0&k=20&c=Mvv4Z6pKzgPVvSpE4sNQsdxZafhUCGM8eL3apKIfPBk='
  ];

  const eventHighlights = [
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Team Lunches',
      description: 'Foster team bonding with our curated lunch menus.',
      image:
        'https://media.gettyimages.com/id/2199036346/photo/diverse-businesspeople-during-break-on-seminar.jpg?s=612x612&w=0&k=20&c=y5qcXJB3ZjjkvqagRBf4l_guKP2oHjI6ug2ErrB0ARA='
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Product Launches',
      description: 'Make your product launch memorable with our venue.',
      image:
        'https://media.gettyimages.com/id/2227605970/photo/meeting-success-business-partners-shaking-hands.jpg?s=612x612&w=0&k=20&c=n660KRJaSC399citoyOFM8lBfTST7fQzDQ3xEbBhw5s='
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: 'Corporate Retreats',
      description: 'Business with pleasure in our sophisticated setting.',
      image:
        'https://media.gettyimages.com/id/2159040269/photo/group-of-business-people-enjoying-at-a-restaurant.jpg?s=612x612&w=0&k=20&c=kCAtvtd296AfASXZRulJFi8vCaFoV4W91E5OliIFE3o='
    },
    {
      icon: <Coffee className="h-8 w-8" />,
      title: 'Private Meetings',
      description: 'Private dining areas with personalized service.',
      image:
        'https://media.gettyimages.com/id/2162311660/photo/group-of-mature-business-people-dining-in-a-modern-restaurant.jpg?s=612x612&w=0&k=20&c=HUHz-Csxpx2pmPNx51rKbWimnhE39ip2Ms49uXhn8vA='
    }
  ];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero */}
      <motion.section
  className="relative h-[70vh] flex items-center justify-center overflow-hidden"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2 }}
  viewport={{ once: true }}
>
  {/* <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div> */}

  {/* Video Background */}
  <motion.video
    className="absolute inset-0 w-full h-full object-cover"
    src="https://videos.pexels.com/video-files/29520637/12707383_1920_1080_30fps.mp4"  
    autoPlay
    loop
    muted
    playsInline
    initial={{ scale: 1.2 }}
    animate={{ scale: 1 }}
    transition={{ duration: 15, ease: 'easeOut' }}
  />

  {/* Hero Content */}
  <div className="relative z-20 text-center text-white px-4">
    <h1 className="text-5xl md:text-7xl font-bold mb-6">
      {/* Corporate <span className="text-primary">Excellence</span> */}
    </h1>
    <p className="text-xl md:text-2xl max-w-3xl mx-auto">
      {/* Elevate your business events with premium corporate dining. */}
    </p>
  </div>
</motion.section>



      {/* Intro */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Motion Image */}
          <motion.div
            className="w-full h-96 rounded-2xl shadow-2xl cursor-pointer overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            onMouseMove={(e) => {
              const { currentTarget, clientX, clientY } = e;
              const { left, top, width, height } =
                currentTarget.getBoundingClientRect();
              const x = (clientX - left - width / 2) / 20;
              const y = (clientY - top - height / 2) / 20;
              currentTarget.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg) scale(1.05)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)';
            }}
          >
            <img
              src="https://media.gettyimages.com/id/2167048516/photo/group-of-friends-enjoying-a-meal-at-a-restaurant.jpg?s=612x612&w=0&k=20&c=27Ws0H3w8ycHV6DQIve8G7iJTlxRXqb2n6XpRDYTTdY="
              alt="Corporate dining"
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>

          {/* Text Content */}
          <div>
            <div className="flex items-center mb-6">
              <Briefcase className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                Corporate Dining Redefined
              </h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              At R&R Bistro, we understand business is built on relationships.
            </p>

            {/* Features Grid 2×3 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Feature
                icon={<ChefHat className="h-6 w-6 text-primary" />}
                title="Expert Catering"
                desc="Customized menus"
              />
              <Feature
                icon={<Award className="h-6 w-6 text-primary" />}
                title="Premium Service"
                desc="Dedicated staff"
              />
              <Feature
                icon={<Target className="h-6 w-6 text-primary" />}
                title="Tailored Events"
                desc="Custom solutions for your needs"
              />
              <Feature
                icon={<Coffee className="h-6 w-6 text-primary" />}
                title="Relax & Connect"
                desc="Casual spaces to build relations"
              />
              <Feature
                icon={<DoorClosed className="h-6 w-6 text-primary" />}
                title="Private Rooms"
                desc="Exclusive spaces for meetings"
              />
              <Feature
                icon={<Users className="h-6 w-6 text-primary" />}
                title="Networking Hub"
                desc="Designed for professional connections"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Event Highlights */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Corporate Event Solutions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Tailored experiences for every business occasion.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {eventHighlights.map((event, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden cursor-pointer transition-colors duration-300"
            >
              <div className="h-48 overflow-hidden relative rounded-t-2xl">
                <div className="absolute inset-0 rounded-t-2xl opacity-0 group-hover:opacity-100 bg-black bg-opacity-20 transition-opacity duration-300"></div>
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out relative z-10 rounded-t-2xl"
                />
              </div>
              <div className="p-6">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 text-primary">
                  {event.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {event.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Event Gallery
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="cursor-pointer overflow-hidden rounded-2xl relative group"
              onClick={() => openLightbox(i)}
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-black bg-opacity-20 transition-opacity duration-300"></div>
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out relative z-10"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-primary-dark text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Elevate Your Corporate Event?
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <MotionLink
            to="/reservations"
            className="bg-white text-primary px-8 py-4 rounded-xl font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Book Your Event
          </MotionLink>
          <motion.a
            href="tel:+917702114099"
            className="border-2 border-white px-8 py-4 rounded-xl font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Call Us
          </motion.a>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={galleryImages}
          currentIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={() =>
            setCurrentImageIndex(
              (prev) => (prev + 1) % galleryImages.length
            )
          }
          onPrev={() =>
            setCurrentImageIndex(
              (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
            )
          }
        />
      )}
    </div>
  );
};

// Feature Card
const Feature = ({
  icon,
  title,
  desc
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) => (
  <div className="flex items-center">
    <div className="bg-primary/10 p-3 rounded-full mr-4">{icon}</div>
    <div>
      <h4 className="font-semibold text-gray-900 dark:text-white">{title}</h4>
      <p className="text-gray-600 dark:text-gray-300 text-sm">{desc}</p>
    </div>
  </div>
);

export default Corporate;
