import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 shadow-md" style={{backgroundColor: '#8C4381'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Desktop navigation */}
          <div className="flex items-center space-x-1 font-bold">
            <Link href="/" className="text-white hover:text-pink-200 transition-colors font-medium px-3 py-2 rounded-md text-sm uppercase">
                Home
            </Link>
          </div>
          <div className="flex-1 flex justify-center items-center">
             <div className="hidden md:flex items-center space-x-1">
                <a href="tel:682-667-8500" className="text-white font-semibold text-lg flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Now For Free Estimate! (682) 667-8500
                </a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white hover:text-pink-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-1 font-bold">
             <Link href="#services" className="text-white hover:text-pink-200 transition-colors font-medium px-3 py-2 rounded-md text-sm uppercase">
              Services
            </Link>
            <Link href="#booking" className="text-white hover:text-pink-200 transition-colors font-medium px-3 py-2 rounded-md text-sm uppercase">
              Booking
            </Link>
            <Link href="#reviews" className="text-white hover:text-pink-200 transition-colors font-medium px-3 py-2 rounded-md text-sm uppercase">
              Reviews
            </Link>
            <Link href="#contact" className="text-white hover:text-pink-200 transition-colors font-medium px-3 py-2 rounded-md text-sm uppercase">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}