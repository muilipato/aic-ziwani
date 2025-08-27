import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = ({ setCurrentPage }) => {
    return (
    <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
          <div className="space-y-2 text-gray-300">
            <p className="flex items-center"><MapPin size={16} className="mr-2" /> Ziwani Estate, Juja</p>
            <p className="flex items-center"><Phone size={16} className="mr-2" /> +254 700 000 000</p>
            <p className="flex items-center"><Mail size={16} className="mr-2" /> info@aicziwani.org</p>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <div className="space-y-2 text-gray-300">
            <p><button onClick={() => setCurrentPage('about')} className="hover:text-white">About Us</button></p>
            <p><button onClick={() => setCurrentPage('services')} className="hover:text-white">Services</button></p>
            <p><button onClick={() => setCurrentPage('ministries')} className="hover:text-white">Ministries</button></p>
            <p><button onClick={() => setCurrentPage('contact')} className="hover:text-white">Contact</button></p>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Service Times</h3>
          <div className="space-y-2 text-gray-300">
            <p>Sunday: 9:00 AM & 11:00 AM</p>
            <p>Wednesday: 7:00 PM</p>
            <p>Friday: 6:00 PM</p>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <p className="text-gray-300">Stay connected through our social media channels for updates and inspiration.</p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
        <p>&copy; 2025 African Inland Church Ziwani. All rights reserved.</p>
      </div>
    </div>
  </footer>

)};

export default Footer;