"use client";

import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import Script from 'next/script';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingHearts from "@/components/FloatingHearts";

// Quiz questions and options configuration
const quizSteps = [
  {
    question: "What type of property are you moving from?",
    key: "propertyType",
    options: ["Single Family House", "Apartment (1-3 floors)", "High-rise Apartment (4+ floors)", "Townhouse/Duplex", "Condo/Co-op"],
    type: "radio",
  },
  {
    question: "What size is your move?",
    key: "moveSize",
    options: ["Studio", "1 Bedroom", "2 Bedrooms", "3+ Bedrooms", "Office/Commercial"],
    type: "radio",
  },
  {
    question: "Do you have any specialty items?",
    description: "Such as pianos, safes, or large antiques.",
    key: "specialtyItems",
    options: ["Piano", "Large Safe (300+ lbs)", "Artwork/Antiques", "None"],
    type: "checkbox",
  },
  {
    question: "What level of packing service do you need?",
    key: "packingService",
    options: ["Full Service Packing", "Partial (Fragiles Only)", "No Packing Needed"],
    type: "radio",
  },
  {
    question: "Are there stairs involved?",
    key: "stairs",
    options: ["Elevator available", "1-2 flights of stairs", "3+ flights of stairs", "No stairs/ground floor"],
    type: "radio",
  },
];

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const handleAnswer = (key: string, value: string) => {
    setAnswers(prev => {
      if (quizSteps[currentStep].type === 'checkbox') {
        const existing = (prev[key] as string[]) || [];
        if (existing.includes(value)) {
          return { ...prev, [key]: existing.filter((item: string) => item !== value) };
        }
        return { ...prev, [key]: [...existing, value] };
      }
      return { ...prev, [key]: value };
    });
  };

  const nextStep = () => {
    if (currentStep < quizSteps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formData = new FormData(e.target as HTMLFormElement);
    
    // Format quiz answers for email
    const formatAnswers = (answers: Record<string, string | string[]>) => {
      return Object.entries(answers)
        .map(([key, value]) => {
          const questionMap: Record<string, string> = {
            propertyType: 'Property Type',
            moveSize: 'Move Size',
            specialtyItems: 'Specialty Items',
            packingService: 'Packing Service',
            stairs: 'Stairs/Access'
          };
          const questionTitle = questionMap[key] || key;
          const answerValue = Array.isArray(value) ? value.join(', ') : value;
          return `${questionTitle}: ${answerValue}`;
        })
        .join('\n');
    };

    // Prepare Web3Forms submission
    const web3FormData = new FormData();
    web3FormData.append('access_key', 'fdd30e50-f604-45bc-b32e-b90e1e741be7');
    web3FormData.append('email', 'lovesomemovers@gmail.com');
    web3FormData.append('subject', '🏠 New Moving Quote Request - Lovesome Moving');
    web3FormData.append('from_name', formData.get('name') as string);
    web3FormData.append('message', `
NEW MOVING QUOTE REQUEST

CUSTOMER INFORMATION:
Name: ${formData.get('name')}
Email: ${formData.get('email')}
Phone: ${formData.get('phone')}
Moving From: ${formData.get('movingFrom')}
Moving To: ${formData.get('movingTo')}

MOVING REQUIREMENTS:
${formatAnswers(answers)}

RESPONSE PROMISE: Customer expects call within 30 minutes!

Generated: ${new Date().toLocaleString()}
    `);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: web3FormData
      });

      if (response.ok) {
        setIsCompleted(true);
      } else {
        alert('There was an error submitting your request. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting your request. Please try again.');
    }
  };
  
  const progressPercentage = (currentStep / (quizSteps.length + 1)) * 100;

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
                <div className="space-y-6 order-2 lg:order-1">
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
                <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8 border-2 sticky top-24 relative order-1 lg:order-2" style={{borderColor: '#C75B9B'}}>
                  {/* Decorative Hearts */}
                  <div className="absolute -top-5 -right-5 text-pink-300">
                    <span className="text-6xl opacity-70 transform rotate-12">&#10084;</span>
                    <span className="absolute top-8 -left-3 text-4xl opacity-80 transform -rotate-12">&#10084;</span>
                  </div>
              {/* Interactive Quiz */}
              <div>
                {!isCompleted ? (
                  <>
                    <h3 className="text-xl lg:text-2xl font-bold text-center mb-1" style={{color: '#C75B9B'}}>
                      Get Your Free Quote
                    </h3>
                    <p className="text-gray-600 text-center mb-4 text-sm">Answer a few quick questions for a personalized estimate</p>
                    
                    {/* Progress Bar */}
                    <div className="mb-6">
                      <div className="relative pt-1">
                        <div className="overflow-hidden h-2 mb-2 text-xs flex rounded bg-pink-200">
                          <div style={{ width: `${progressPercentage}%`, backgroundColor: '#E91E63' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center transition-all duration-500"></div>
                        </div>
                        <p className="text-xs font-semibold text-right" style={{color: '#C75B9B'}}>Step {currentStep + 1} of {quizSteps.length + 1}</p>
                      </div>
                    </div>

                    {/* Quiz Content */}
                    <div className="min-h-[300px]">
                      {currentStep < quizSteps.length && (
                        <div>
                          <h2 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">{quizSteps[currentStep].question}</h2>
                          {quizSteps[currentStep].description && <p className="text-gray-600 mb-4 text-sm">{quizSteps[currentStep].description}</p>}
                          <div className="space-y-2">
                            {quizSteps[currentStep].options.map(option => (
                              <button
                                key={option}
                                onClick={() => handleAnswer(quizSteps[currentStep].key, option)}
                                className={`w-full text-left p-3 rounded-lg border-2 transition-all text-sm font-semibold ${
                                  (answers[quizSteps[currentStep].key] || []).includes(option) || answers[quizSteps[currentStep].key] === option
                                    ? 'text-white shadow-lg'
                                    : 'text-gray-800 bg-white hover:bg-gray-100'
                                }`}
                                style={{
                                  backgroundColor: ((answers[quizSteps[currentStep].key] || []).includes(option) || answers[quizSteps[currentStep].key] === option) ? '#C75B9B' : undefined,
                                  borderColor: '#C75B9B'
                                }}
                              >
                                {option}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {currentStep === quizSteps.length && (
                        <div>
                          <h2 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">Almost there!</h2>
                          <p className="text-gray-600 mb-4 text-sm">Enter your details to receive your personalized quote.</p>
                          <form className="space-y-3" onSubmit={handleSubmit}>
                            <div>
                              <label className="block text-xs font-medium text-gray-700 mb-1">Full Name *</label>
                              <input type="text" name="name" placeholder="Enter your full name" required className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 placeholder-gray-800"/>
                            </div>
                            <div>
                              <label className="block text-xs font-medium text-gray-700 mb-1">Email Address *</label>
                              <input type="email" name="email" placeholder="your.email@example.com" required className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 placeholder-gray-800"/>
                            </div>
                            <div>
                              <label className="block text-xs font-medium text-gray-700 mb-1">Phone Number *</label>
                              <input type="tel" name="phone" placeholder="(___) ___-____" required className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 placeholder-gray-800"/>
                            </div>
                            <div>
                              <label className="block text-xs font-medium text-gray-700 mb-1">Moving From *</label>
                              <input type="text" name="movingFrom" placeholder="Full address" required className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 placeholder-gray-800"/>
                            </div>
                            <div>
                              <label className="block text-xs font-medium text-gray-700 mb-1">Moving To *</label>
                              <input type="text" name="movingTo" placeholder="Full address" required className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 placeholder-gray-800"/>
                            </div>
                            
                            <button
                              type="submit"
                              className="w-full mt-4 px-4 py-2 rounded-lg text-white font-bold hover:opacity-90 transition-all shadow-lg text-sm"
                              style={{backgroundColor: '#E91E63'}}
                            >
                              Get Quote
                            </button>
                          </form>
                        </div>
                      )}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between items-center mt-6">
                      <button
                        onClick={prevStep}
                        disabled={currentStep === 0}
                        className="px-4 py-2 rounded-lg font-bold hover:opacity-90 transition-all border-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                        style={{borderColor: '#C75B9B', color: '#C75B9B'}}
                      >
                        Back
                      </button>
                      {currentStep < quizSteps.length ? (
                        <button
                          onClick={nextStep}
                          className="px-4 py-2 rounded-lg text-white font-bold hover:opacity-90 transition-all shadow-lg text-sm"
                          style={{backgroundColor: '#E91E63'}}
                        >
                          Next
                        </button>
                      ) : (
                        <div className="px-4 py-2 text-sm text-gray-600">
                          Complete form above ↑
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <div className="text-center min-h-[300px] flex flex-col justify-center items-center">
                    <span className="text-5xl mb-4">🎉</span>
                    <h2 className="text-2xl font-bold mb-4" style={{color: '#C75B9B'}}>Thank You!</h2>
                    <p className="text-sm text-gray-700 mb-6 max-w-md">
                      Your moving profile is complete! We&apos;ve received your information and will contact you with a personalized, no-obligation quote within the next 30 minutes.
                    </p>
                    <button 
                      onClick={() => {setCurrentStep(0); setIsCompleted(false); setAnswers({});}}
                      className="px-6 py-2 rounded-lg font-bold hover:opacity-90 transition-all border-2 text-sm" 
                      style={{borderColor: '#C75B9B', color: '#C75B9B'}}
                    >
                      Start New Quote
                    </button>
                  </div>
                )}
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