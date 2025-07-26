import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-purple-900 to-purple-800" style={{backgroundColor: '#7A4B6B'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Lovesome Moving Services</h3>
              <p className="text-purple-200 font-medium text-lg">Moving Made Simple & Safe</p>
            </div>
            <p className="text-purple-100 mb-6 leading-relaxed">
              Professional moving services in Arlington, TX and the DFW area. We handle your 
              belongings with care, making your move stress-free and efficient.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white hover:bg-purple-500 transition-colors">
                <span className="text-sm font-bold">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white hover:bg-purple-500 transition-colors">
                <span className="text-sm font-bold">@</span>
              </a>
              <a href="#" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white hover:bg-purple-500 transition-colors">
                <span className="text-sm font-bold">in</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#services" className="text-purple-200 hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="#reviews" className="text-purple-200 hover:text-white transition-colors">
                  Customer Reviews
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-purple-200 hover:text-white transition-colors">
                  Get a Quote
                </Link>
              </li>
              <li>
                <Link href="tel:(682) 667-8500" className="text-purple-200 hover:text-white transition-colors">
                  Emergency Moving
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-pink-400 mr-3 mt-1">📞</span>
                <div>
                  <p className="text-white font-semibold">(682) 667-8500</p>
                  <p className="text-purple-200 text-sm">Available 7 days a week</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-pink-400 mr-3 mt-1">✉️</span>
                <div>
                  <p className="text-white font-semibold">lovesomemovers@gmail.com</p>
                  <p className="text-purple-200 text-sm">Quick response guaranteed</p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-pink-400 mr-3 mt-1">📍</span>
                <div>
                  <p className="text-white font-semibold">Arlington, TX</p>
                  <p className="text-purple-200 text-sm">Serving DFW Metro Area</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-purple-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-purple-200 text-sm">
                © 2024 Lovesome Moving Services. All rights reserved.
              </p>
              <p className="text-purple-300 text-xs mt-1">
                Imagined & Manifested by{" "}
                <a 
                  href="https://fortunatuspurse.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors underline decoration-dotted"
                >
                  Fortunatus Purse
                </a>
              </p>
            </div>
            <div className="flex space-x-6">
              <Link href="#" className="text-purple-200 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-purple-200 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-purple-200 hover:text-white text-sm transition-colors">
                License & Insurance
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}