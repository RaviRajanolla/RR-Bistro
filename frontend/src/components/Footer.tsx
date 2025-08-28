import React from 'react';
import { MapPin, Phone, Mail, Clock, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-heading font-bold text-primary mb-4">
              R&R Bistro
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Experience exceptional dining with our carefully crafted dishes and warm hospitality. 
              Creating memorable moments through culinary excellence.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-primary mr-3" />
                <span className="text-gray-300">Road no-1 Bistro Street, Hyderabad, Telangana</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3" />
                <span className="text-gray-300">+91 (123) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3" />
                <span className="text-gray-300">info@rrbistro.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Hours</h4>
            <div className="space-y-2 mb-4">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-primary mr-3" />
                <div className="text-gray-300">
                  <div>Mon-Thu: 11am-10pm</div>
                  <div>Fri-Sat: 11am-11pm</div>
                  <div>Sunday: 10am-9pm</div>
                </div>
              </div>
            </div>
            <div>
              <Link
                to="/reviews"
                className="flex items-center text-primary hover:underline"
              >
                <Star className="h-5 w-5 mr-2" />
                Reviews
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 R&R Bistro. All rights reserved. Crafted with passion for culinary excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
