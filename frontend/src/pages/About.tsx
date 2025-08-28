import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Users,
  Award,
  Star,
  Heart,
  Utensils,
  Clock,
  MapPin,
  ChefHat,
  Sparkles
} from 'lucide-react';

// Custom hook for intersection observer
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, { threshold: 0.1, ...options });

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return [ref, isIntersecting] as const;
};

// Counter animation hook
const useCountUp = (end: number, duration: number = 2000, isActive: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [end, duration, isActive]);

  return count;
};

const About = () => {
  const [heroRef, heroInView] = useIntersectionObserver();
  const [historyRef, historyInView] = useIntersectionObserver();
  const [valuesRef, valuesInView] = useIntersectionObserver();
  const [servicesRef, servicesInView] = useIntersectionObserver();
  const [statsRef, statsInView] = useIntersectionObserver();

  const startYear = 2020;
  const currentYear = new Date().getFullYear();
  const experienceYears = currentYear - startYear;

  const yearsCount = useCountUp(experienceYears, 2000, statsInView);
  const customersCount = useCountUp(50000, 2500, statsInView);
  const satisfactionCount = useCountUp(98, 2000, statsInView);
  const awardsCount = useCountUp(12, 1500, statsInView);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-gray-900 dark:text-white mb-8">
              About <span className="text-primary">R&R Bistro</span>
            </h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              For over a decade, we've been crafting extraordinary culinary experiences that bring
              people together. Our passion for exceptional food, warm hospitality, and creating
              lasting memories drives everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" ref={historyRef}>
          <div className={`transition-all duration-1000 delay-200 ${historyInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative group">
              <img
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Restaurant interior"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-400 ${historyInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="flex items-center mb-6">
              <Clock className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-4xl font-heading font-bold text-gray-900 dark:text-white">Our Journey</h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Founded in 2020 by passionate chef <span className="font-semibold">Ravi Kumar</span>,
              <span className="font-semibold"> R&amp;R Bistro </span> began as a humble
              50-seat neighborhood spot with one big dream: to create a place where exceptional
              food meets genuine hospitality.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              What started as an intimate bistro has grown into a beloved culinary destination.
              Yet, our heart remains the same serving food with authenticity, warmth, and care.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <ChefHat className="h-5 w-5 text-primary mr-2" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">Award-winning chefs</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-primary mr-2" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">Prime location</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800" ref={valuesRef}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`order-2 lg:order-1 transition-all duration-1000 delay-200 ${valuesInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="flex items-center mb-6">
              <Heart className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-4xl font-heading font-bold text-gray-900 dark:text-white">Our Values</h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              At R&R Bistro, we believe that great food is just the beginning. Our values shape
              every aspect of your dining experience, from the first smile to the last bite.
            </p>
            <div className="space-y-6">
              {[
                { icon: Sparkles, title: 'Quality First', desc: 'Only the finest ingredients.' },
                { icon: Users, title: 'Community Focus', desc: 'Supporting local suppliers.' },
                { icon: Heart, title: 'Genuine Hospitality', desc: 'Guests treated like family.' }
              ].map((v, i) => (
                <div key={i} className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4 flex-shrink-0">
                    <v.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{v.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`order-1 lg:order-2 transition-all duration-1000 delay-400 ${valuesInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative group">
              <img
                src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Chef preparing food"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" ref={servicesRef}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 delay-200 ${servicesInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative group">
              <img
                src="https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Dining experience"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-400 ${servicesInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="flex items-center mb-6">
              <Utensils className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-4xl font-heading font-bold text-gray-900 dark:text-white">What Makes Us Special</h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Beyond exceptional cuisine, we offer unique experiences like wine tastings,
              chef's table dining, and cooking classes.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: ChefHat, title: "Chef's Table", desc: "Exclusive dining with our head chef" },
                { icon: Calendar, title: "Private Events", desc: "Custom menus for special occasions" },
                { icon: Star, title: "Wine Pairing", desc: "Curated wines for every dish" },
                { icon: Users, title: "Cooking Classes", desc: "Learn from professional chefs" },
              ].map((s, i) => (
                <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <s.icon className="h-6 w-6 text-primary mb-3" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{s.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-heading font-bold mb-10">Our Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Calendar, value: `${yearsCount}+`, label: "Years of Excellence" },
              { icon: Users, value: `${customersCount.toLocaleString()}+`, label: "Happy Customers" },
              { icon: Star, value: `${satisfactionCount}%`, label: "Customer Satisfaction" },
              { icon: Award, value: `${awardsCount}+`, label: "Awards Won" },
            ].map((stat, i) => (
              <div key={i} className={`transition-all duration-1000 delay-${i * 200} ${statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <stat.icon className="h-10 w-10 mx-auto mb-3" />
                <div className="text-4xl font-bold">{stat.value}</div>
                <p className="text-white/90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-heading font-bold text-gray-900 dark:text-white mb-6">
            Ready to Experience R&R Bistro?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Join us for an unforgettable dining experience. Whether it's a romantic dinner,
            business lunch, or special celebration, we're here to make it memorable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/reservations" className="group bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center">
              <Calendar className="h-5 w-5 mr-2 group-hover:animate-pulse" />
              Reserve Your Table
            </Link>
            <Link to="/menu" className="group bg-white dark:bg-gray-800 border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center">
              <Utensils className="h-5 w-5 mr-2 group-hover:animate-pulse" />
              Explore Our Menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
