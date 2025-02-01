import React from 'react';
import { Phone, Mail, MapPin, Printer, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  const locationAddress = "1806 Turner Lane, Bakersfield, CA 93308";
  const phoneNumber = "661-587-2691";
  const faxNumber = "661-587-7468";
  const email = "info@trb-oil.com";
  
  const getGoogleMapsUrl = (address: string) => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div>
                <p className="text-gray-400 mb-2">Location Address:</p>
                <a
                  href={getGoogleMapsUrl(locationAddress)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-2 hover:text-blue-400 transition-colors group"
                >
                  <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0 group-hover:text-blue-500" />
                  <span>1806 Turner Lane<br />Bakersfield, CA 93308</span>
                </a>
              </div>
              <div>
                <p className="text-gray-400 mb-2">Mailing Address:</p>
                <div className="flex items-start space-x-2">
                  <Mail className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                  <span>P.O. Box 82276<br />Bakersfield, CA 93380</span>
                </div>
              </div>
              <div>
                <a
                  href={`tel:+1-${phoneNumber}`}
                  className="flex items-center space-x-2 hover:text-blue-400 transition-colors group"
                >
                  <Phone className="h-5 w-5 text-blue-400 group-hover:text-blue-500" />
                  <span>Tel: {phoneNumber}</span>
                </a>
              </div>
              <div>
                <a
                  href={`fax:+1-${faxNumber}`}
                  className="flex items-center space-x-2 hover:text-blue-400 transition-colors group"
                >
                  <Printer className="h-5 w-5 text-blue-400 group-hover:text-blue-500" />
                  <span>Fax: {faxNumber}</span>
                </a>
              </div>
              <div>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center space-x-2 hover:text-blue-400 transition-colors group"
                >
                  <Mail className="h-5 w-5 text-blue-400 group-hover:text-blue-500" />
                  <span>{email}</span>
                </a>
              </div>
              <div className="flex items-center space-x-4 mt-4">
                <a 
                  href="https://fb.me/TRBINC" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Visit TRB on Facebook"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/trbinc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Visit TRB on LinkedIn"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#equipment" className="hover:text-blue-400 transition-colors">Equipment</a></li>
              <li><a href="#laboratory" className="hover:text-blue-400 transition-colors">Laboratory</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Certifications</h3>
            <p className="text-gray-400 mb-6">
              ISO 9001:2015 Certified<br />
              API Q1 Certified<br />
              HSE Excellence Award 2023
            </p>
            <a
              href="https://trbinc.na2.echosign.com/public/esignWidget?wid=CBFCIBAA3AAABLblqZhAcopalFLIldl3IercBElJwvE6VM-A4oKAHLEEvkmIMwflknHLPS7yKBLBF7M70fLE*"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Submit Application
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TRB Oilfield Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}