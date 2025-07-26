import Link from "next/link";
import Image from "next/image";
import Script from 'next/script';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingHearts from "@/components/FloatingHearts";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 px-4 sm:px-6 lg:px-8 bg-pink-50">
        <FloatingHearts />
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.png"
            alt="Family moving background"
            fill
            className="object-cover object-center opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-50 via-pink-50/70 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Logo Column (appears first on mobile) */}
            <div className="flex justify-center items-center lg:order-2">
                <Image
                  src="/lovesometran.png"
                  alt="Lovesome Moving Services"
                  width={500}
                  height={500}
                  className="mx-auto w-80 h-80 lg:w-[500px] lg:h-[500px]"
                />
            </div>
            {/* Text Column (appears second on mobile) */}
            <div className="space-y-4 text-center lg:text-left lg:order-1">
              <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                <span className="text-gray-900">Family Moving</span><br/>
                <span style={{color: '#C75B9B'}}>Family</span>
              </h1>
              <p className="text-2xl italic font-semibold" style={{color: '#C75B9B'}}>
                Love In Every Move
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-3 flex-wrap">
                <svg className="w-8 h-8" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/><path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"/><path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.223 0-9.657-3.356-11.303-7.962H6.306C9.656 39.663 16.318 44 24 44z"/><path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C44.962 36.608 48 30.732 48 24c0-1.341-.138-2.65-.389-3.917z"/></svg>
                <span className="text-yellow-400 text-2xl">⭐⭐⭐⭐⭐</span>
                <p className="font-semibold text-lg text-gray-700">
                  <span className="font-extrabold">132+ Perfect 5-Star</span> reviews on Google
                </p>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium pt-4">
                Professional movers you can trust—fully licensed, insured, and ready when you need us. From precious heirlooms to heavy pianos, we handle it all with care. Available same-day and weekends—Arlington&apos;s most trusted family movers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
                <Link href="#quote">
                  <button 
                    className="px-8 py-3 rounded-lg text-white font-bold hover:opacity-90 transition-all shadow-lg text-lg"
                    style={{backgroundColor: '#C75B9B'}}
                  >
                    Free Quote
                  </button>
                </Link>
                <Link href="/quiz">
                  <button 
                    className="px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-all border-2 text-lg"
                    style={{borderColor: '#C75B9B', color: '#C75B9B'}}
                  >
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wavy Divider */}
        <div className="absolute bottom-0 left-0 w-full h-24 text-white">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-full" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,70 C150,120 300,20 450,70 C600,120 750,20 900,70 C1050,120 1200,20 1350,70 C1400,86 1440,70 1440,70 L1440,100 L0,100 Z"></path>
          </svg>
        </div>
      </section>

      {/* Meet The Team & Form Section */}
      <section id="quote" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
                <div className="space-y-6">
                    <div className="rounded-2xl shadow-2xl p-2" style={{backgroundColor: '#C75B9B'}}>
                      <Image
                        src="/crew.jpg"
                        alt="Lovesome Moving family team"
                        width={600}
                        height={450}
                        className="rounded-xl object-cover w-full h-full"
                        style={{objectPosition: 'center'}}
                      />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                        Meet the team that makes your move stress-free.
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Our experienced crew treats your belongings like their own. With years of local expertise and hundreds of satisfied customers, we&apos;re proud to be Arlington&apos;s go-to moving company.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        No job too big or small—we&apos;re here for you 7 days a week.
                    </p>
                </div>
                {/* Right Column - Floating Form Card */}
                <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8 border-2 sticky top-24 relative" style={{borderColor: '#C75B9B'}}>
                  {/* Decorative Hearts */}
                  <div className="absolute -top-5 -right-5 text-pink-300">
                    <span className="text-6xl opacity-70 transform rotate-12">&#10084;</span>
                    <span className="absolute top-8 -left-3 text-4xl opacity-80 transform -rotate-12">&#10084;</span>
                  </div>
              {/* Quote Form */}
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-center mb-1" style={{color: '#C75B9B'}}>
                  Free Moving Estimate
                </h3>
                <p className="text-gray-600 text-center mb-4 text-sm">Get your personalized quote in minutes</p>
                
                <form className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent placeholder-gray-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="(___) ___-____"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent placeholder-gray-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent placeholder-gray-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Preferred Move Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-500"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Moving From *
                      </label>
                      <input
                        type="text"
                        placeholder="Full address"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent placeholder-gray-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">
                        Moving To *
                      </label>
                      <input
                        type="text"
                        placeholder="Full address"
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent placeholder-gray-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Additional Details
                    </label>
                    <textarea
                      placeholder="Tell us about your move (stairs, heavy items, etc.)"
                      rows={2}
                      className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none placeholder-gray-500"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-all shadow-lg text-sm"
                    style={{backgroundColor: '#E91E63'}}
                  >
                    ⭐ Get My Free Quote
                  </button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    * Required fields. We'll contact you within 30 minutes!
                  </p>
                </form>
              </div>
            </div>
            </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{color: '#C75B9B'}}>Our Moving Services</h2>
            <p className="text-xl text-gray-600">Professional, reliable, and caring service for all your moving needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Residential Moving</h3>
              <p className="text-gray-600">Complete home moving services with careful handling of all your belongings. From apartments to large homes.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Same-Day Service</h3>
              <p className="text-gray-600">Need to move quickly? We offer same-day moving services for urgent relocations across DFW.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Specialty Items</h3>
              <p className="text-gray-600">Expert handling of pianos, artwork, antiques, and other specialty items requiring special care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-4 text-gray-900">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 font-medium">Real reviews from real families in Arlington</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {/* Google Reviews Widget */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-center" style={{color: '#C75B9B'}}>Our Google Reviews</h3>
              {/* Elfsight Google Reviews | Untitled Google Reviews */}
              <Script src="https://static.elfsight.com/platform/platform.js" strategy="afterInteractive" />
              <div className="elfsight-app-2d748fe5-e816-4911-b02f-87ff4cd4fbe3" data-elfsight-app-lazy></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{color: '#C75B9B'}}>Ready to Move?</h2>
            <p className="text-xl text-gray-600">Contact us today for your free estimate</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Call Us</h3>
              <p className="text-gray-600">(682) 667-8500</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✉️</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Email</h3>
              <p className="text-gray-600">lovesomemovers@gmail.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Location</h3>
              <p className="text-gray-600">Arlington, TX</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="tel:(682) 667-8500">
              <button className="px-12 py-4 text-white font-bold rounded-lg hover:opacity-90 transition-colors text-xl shadow-lg" style={{backgroundColor: '#E91E63'}}>
                Get Your Free Quote Today
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}