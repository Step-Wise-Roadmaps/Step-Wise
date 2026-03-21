import React from 'react';
import { Twitter, Linkedin, Github, Rocket, ArrowUp, BookOpen } from 'lucide-react';

import MainLogo from "../assets/NavbarImg/MainLogo.png"

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 pt-20 pb-10 px-6 md:px-20">
      {/* Main Footer Card */}
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl border border-blue-50 p-10 md:p-16 relative overflow-hidden">
        
        {/* Decorative background elements to match the "AI Network" vibe */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <img className='w-48' src={MainLogo} alt="" />
            <p className="roboto-light text-gray-500 text-sm leading-relaxed">
              Forge your future with precision roadmaps designed by AI.
            </p>
            
            {/* Why Join Icons (Matched to Image) */}
            <div className="pt-4 space-y-4">
               <div className="flex items-center space-x-3 text-cyan-900">
                  <Rocket className="h-5 w-5 text-sky-400" />
                  <span className="text-xs roboto-medium">Personalized Learning</span>
               </div>
               <div className="flex items-center space-x-3 text-cyan-900">
                  <ArrowUp className="h-5 w-5 text-sky-400" />
                  <span className="text-xs roboto-medium">Career Advancement</span>
               </div>
               <div className="flex items-center space-x-3 text-cyan-900">
                  <BookOpen className="h-5 w-5 text-sky-400" />
                  <span className="text-xs roboto-medium">Expert Content</span>
               </div>
            </div>
          </div>

          {/* Product Links */}
          <div className='md:mt-5 mt-0'>
            <h4 className="roboto-bold text-cyan-950 mb-6 uppercase tracking-wider text-sm">Product</h4>
            <ul className="space-y-4 text-gray-600 roboto-regular text-sm">
              <li className="hover:text-sky-500 cursor-pointer transition">Roadmaps</li>
              <li className="hover:text-sky-500 cursor-pointer transition">Pricing</li>
              <li className="hover:text-sky-500 cursor-pointer transition">Custom Paths</li>
            </ul>
          </div>

          {/* Company Links */}
          <div className='md:mt-5 mt-0'>
            <h4 className="roboto-bold text-cyan-950 mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-4 text-gray-600 roboto-regular text-sm">
              <li className="hover:text-sky-500 cursor-pointer transition">About Us</li>
              <li className="hover:text-sky-500 cursor-pointer transition">Careers</li>
              <li className="hover:text-sky-500 cursor-pointer transition">Blog</li>
            </ul>
          </div>

          {/* Support Links */}
          <div className='md:mt-5 mt-0'>
            <h4 className="roboto-bold text-cyan-950 mb-6 uppercase tracking-wider text-sm">Support</h4>
            <ul className="space-y-4 text-gray-600 roboto-regular text-sm">
              <li className="hover:text-sky-500 cursor-pointer transition">Help Center</li>
              <li className="hover:text-sky-500 cursor-pointer transition">Legal</li>
              <li className="hover:text-sky-500 cursor-pointer transition">Privacy Policy</li>
            </ul>
            
            {/* Social Icons (Matched to Image Bottom Right) */}
            <div className="flex space-x-5 pt-10">
              <a href="https://x.com/dneftalem" target='_blank'>
                <Twitter className="h-6 w-6 text-sky-400 hover:text-cyan-950 cursor-pointer transition" />
              </a>
              <a href="https://www.linkedin.com/in/neftalem-dagnachew-226307365/" target='_blank'>
                <Linkedin className="h-6 w-6 text-sky-400 hover:text-cyan-950 cursor-pointer transition" />
              </a>
                <a href="https://github.com/Neftalem-Dagnachew" target="_blank" rel="noopener noreferrer">
                    <Github className="h-6 w-6 text-sky-400 hover:text-cyan-950 cursor-pointer transition" />
                </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-16 pt-8 border-t border-gray-100 text-center">
          <p className="text-gray-400 text-xs roboto-light">
            © {new Date().getFullYear()} StepWise. All rights reserved. Forge Your Future.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;