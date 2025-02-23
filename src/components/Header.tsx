import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-md py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src="/images/profile.jpg"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-blue-500"
          />
          <h1 className="ml-6 text-4xl font-bold text-gray-800">P Siva Suribabu</h1>
        </div>
        
        <div className="flex space-x-6">
          <a href="tel:8790900814" className="contact-link">
            <Phone className="w-8 h-8" />
          </a>
          <a href="https://wa.me/8790900814" className="contact-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
              <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
            </svg>
          </a>
          <a href="https://github.com/SivaSuribabu" className="contact-link">
            <Github className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/siva-suribabu" className="contact-link">
            <Linkedin className="w-8 h-8" />
          </a>
          <a href="mailto:sivasuribabupenkey@gmail.com" className="contact-link">
            <Mail className="w-8 h-8" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;