import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Menu, Star, Clock } from 'lucide-react';

const Home = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section with premium background image */}
      <section className="relative text-white py-24">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://dramscotland.co.uk/wp-content/uploads/2019/10/tattufinal.jpg)'
          }}
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 animate-slide-up">
            EXPLORE <span className="text-primary">R&R BISTRO</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200 animate-slide-up">
            Experience exceptional dining with our carefully crafted dishes, warm hospitality, 
            and an atmosphere that makes every meal memorable.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
              Why Choose R&R Bistro?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We're committed to providing an exceptional dining experience through quality, 
              service, and atmosphere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4 dark:text-white">Premium Quality</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Fresh, locally-sourced ingredients prepared by our expert chefs to deliver 
                exceptional flavors in every dish.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4 dark:text-white">Quick Service</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Efficient service without compromising quality. Our team ensures your dining 
                experience is both timely and memorable.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Menu className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4 dark:text-white">Diverse Menu</h3>
              <p className="text-gray-600 dark:text-gray-300">
                From classic favorites to innovative creations, our diverse menu offers 
                something special for every palate and dietary preference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white dark:bg-gray-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-heading font-bold text-gray-900 dark:text-white mb-10 text-center">
            Our Ambiance
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              'https://www.venetianlasvegas.com/adobe/dynamicmedia/deliver/dm-aid--08bd4846-22b9-4c34-bef8-c5944eb8e4b0/dining-room-1-1920x1080.jpg?quality=64&preferwebp=true',
              'https://img.freepik.com/premium-photo/simple-generous-restaurant-interior_900168-1139.jpg?auto=compress&cs=tinysrgb&w=600',
              'https://images.squarespace-cdn.com/content/v1/585c07ebf5e231039723fd01/1556891350602-3P9WU3HVKCXEHO5SF5DE/Tattu+Birmingham+1.jpg?format=2500w',
              'https://img.freepik.com/premium-photo/table-with-plates-glasses-plate-food-it_337384-130673.jpg',
              'https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://media.easy-peasy.ai/ccd9ef63-dd70-4453-8cd5-06d111c8b48d/0a54e5a5-ef1c-4851-82e9-ca2bed0832e4.png',
              'https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=600',
              'https://akanhyd.com/wp-content/uploads/2025/05/DSC02287.jpg',
              'https://akanhyd.com/wp-content/uploads/2025/05/DSC02264.jpg',
              'https://akanhyd.com/wp-content/uploads/2024/09/DM000045-scaled.jpeg',
              'https://akanhyd.com/wp-content/uploads/2024/09/Snapshot_17-scaled.jpg',
              'https://akanhyd.com/wp-content/uploads/2024/09/Snapshot_15-scaled.jpg',
              'https://akanhyd.com/wp-content/uploads/2024/09/Snapshot_18-scaled.jpg',
            ].map((src, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transform transition-transform duration-300 cursor-pointer"
              >
                <img
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Split Image + Text Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://media.cntraveler.com/photos/675375966ce4439b0881d86f/3:2/w_2560%2Cc_limit/2Z9A8039.jpg"
              alt="Restaurant Interior"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-4xl font-heading font-bold text-gray-900 dark:text-white mb-6">
              Elegant Ambiance
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Step into our bistro’s cozy and inviting atmosphere—the perfect setting to unwind with loved ones, 
              savor exquisite meals, and toast to life with fine wine. Whether it’s a family dinner, a romantic date night,
              or a special celebration, enjoy moments that linger long after the last bite.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading font-bold text-white mb-4">
            Ready for an Unforgettable Experience?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join us for exceptional dining, outstanding service, and memories that last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link
              to="/reservations"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Make a Reservation
            </Link>

            <Link
              to="/menu"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 inline-flex items-center"
            >
              <Menu className="h-5 w-5 mr-2" />
              View Menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
