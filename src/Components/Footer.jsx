
"use client";
import { ArrowRight, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-linear-to-br from-[#0f172a] via-[#111827] to-[#020617] text-gray-300 pt-16 pb-6">
      <div className="w-11/12 max-w-7xl mx-auto">

        {/* Top CTA */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-semibold text-white mb-3">
            Ready to transform your space?
          </h2>
          <p className="text-sm md:text-base text-gray-400 mb-6">
            Browse our complete gallery from artisans around the world.
          </p>

          <button className="px-6 py-2 rounded-full bg-linear-to-r from-orange-500 to-pink-500 text-white font-medium shadow-lg hover:scale-105 hover:shadow-xl transition duration-300 inline-flex gap-2">
            EXPLORE THE GALLERY <ArrowRight></ArrowRight>
          </button>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-white/10 pt-10">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">
              TileGallery
            </h3>
            <div className="w-12 h-0.5 bg-linear-to-r from-orange-500 to-pink-500 mb-4"></div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Curating the worlds finest tiles since 2024. Ceramic, marble,
              zellige, mosaic and beyond.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wider">
              NAVIGATE
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-orange-400 hover:translate-x-1 transition cursor-pointer">Home</li>
              <li className="hover:text-orange-400 hover:translate-x-1 transition cursor-pointer">All Tiles</li>
              <li className="hover:text-orange-400 hover:translate-x-1 transition cursor-pointer">Login</li>
              <li className="hover:text-orange-400 hover:translate-x-1 transition cursor-pointer">Register</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wider">
              CONTACT US
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 hover:text-orange-400 transition">
                <Mail size={16} className="text-orange-500" />
                <span>hello@tilegallery.com</span>
              </div>
              <div className="flex items-center gap-2 hover:text-orange-400 transition">
                <MapPin size={16} className="text-orange-500" />
                <span>Chittagong, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 pt-5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2026 TileGallery. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Crafted with precision & passion
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;