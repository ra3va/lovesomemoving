"use client";

import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingHearts from "@/components/FloatingHearts";

// Quiz questions and options configuration
const quizSteps = [
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

export default function QuizPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const handleAnswer = (key: string, value: any) => {
    setAnswers(prev => {
      if (quizSteps[currentStep].type === 'checkbox') {
        const existing = prev[key] || [];
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
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Final Answers:", answers);
    setIsCompleted(true);
  };
  
  const progressPercentage = (currentStep / (quizSteps.length + 1)) * 100;

  return (
    <div className="min-h-screen bg-pink-50">
      <Header />
      <main className="relative py-20 px-4 sm:px-6 lg:px-8 flex items-center">
        <FloatingHearts />
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Logo and Branding */}
            <div className="hidden lg:flex flex-col items-center text-center">
              <Image
                src="/lovesometran.png"
                alt="Lovesome Moving Services"
                width={400}
                height={400}
                className="w-96 h-96"
              />
              <h1 className="text-4xl font-bold mt-4" style={{color: '#C75B9B'}}>Let's Plan Your Perfect Move</h1>
              <p className="text-lg text-gray-700 mt-2">Answer a few quick questions to get a personalized estimate.</p>
            </div>

            {/* Right Column: Quiz Card */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border-2" style={{borderColor: '#C75B9B'}}>
              {!isCompleted ? (
                <>
                  <div className="flex justify-center mb-6 lg:hidden">
                    <Image
                      src="/lovesometran.png"
                      alt="Lovesome Moving Services Logo"
                      width={100}
                      height={100}
                      className="w-24 h-24"
                    />
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-8">
                    <div className="relative pt-1">
                      <div className="overflow-hidden h-3 mb-2 text-xs flex rounded bg-pink-200">
                        <div style={{ width: `${progressPercentage}%`, backgroundColor: '#E91E63' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center transition-all duration-500"></div>
                      </div>
                      <p className="text-sm font-semibold text-right" style={{color: '#C75B9B'}}>Step {currentStep + 1} of {quizSteps.length + 1}</p>
                    </div>
                  </div>

                  {/* Quiz Content */}
                  <div className="min-h-[350px]">
                    {currentStep < quizSteps.length && (
                      <div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">{quizSteps[currentStep].question}</h2>
                        {quizSteps[currentStep].description && <p className="text-gray-600 mb-6">{quizSteps[currentStep].description}</p>}
                        <div className="space-y-4">
                          {quizSteps[currentStep].options.map(option => (
                            <button
                              key={option}
                              onClick={() => handleAnswer(quizSteps[currentStep].key, option)}
                              className={`w-full text-left p-4 rounded-lg border-2 transition-all text-lg font-semibold ${
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
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Almost there!</h2>
                        <p className="text-gray-600 mb-6">Enter your details to receive your personalized quote.</p>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                          <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                              <input type="text" name="name" placeholder="Enter your full name" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 placeholder-gray-600"/>
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                              <input type="email" name="email" placeholder="your.email@example.com" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 placeholder-gray-600"/>
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                              <input type="tel" name="phone" placeholder="(___) ___-____" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 placeholder-gray-600"/>
                            </div>
                        </form>
                      </div>
                    )}
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between items-center mt-8">
                    <button
                      onClick={prevStep}
                      disabled={currentStep === 0}
                      className="px-6 py-2 rounded-lg font-bold hover:opacity-90 transition-all border-2 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                      style={{borderColor: '#C75B9B', color: '#C75B9B'}}
                    >
                      Back
                    </button>
                    {currentStep < quizSteps.length ? (
                      <button
                        onClick={nextStep}
                        className="px-6 py-2 rounded-lg text-white font-bold hover:opacity-90 transition-all shadow-lg text-lg"
                        style={{backgroundColor: '#E91E63'}}
                      >
                        Next
                      </button>
                    ) : (
                      <button
                        type="submit"
                        onClick={handleSubmit}
                        className="px-6 py-2 rounded-lg text-white font-bold hover:opacity-90 transition-all shadow-lg text-lg"
                        style={{backgroundColor: '#E91E63'}}
                      >
                        Get My Quote
                      </button>
                    )}
                  </div>
                </>
              ) : (
                <div className="text-center min-h-[350px] flex flex-col justify-center items-center">
                  <span className="text-7xl mb-4">🎉</span>
                  <h2 className="text-3xl font-bold mb-4" style={{color: '#C75B9B'}}>Thank You!</h2>
                  <p className="text-lg text-gray-700 mb-6 max-w-md">
                    Your moving profile is complete! We've received your information and will contact you with a personalized, no-obligation quote within the next 30 minutes.
                  </p>
                  <Link href="/">
                    <button className="px-8 py-3 rounded-lg font-bold hover:opacity-90 transition-all border-2 text-lg" style={{borderColor: '#C75B9B', color: '#C75B9B'}}>
                      Back to Home
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 