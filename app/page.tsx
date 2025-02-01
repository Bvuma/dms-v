"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const posters = [
    { src: "/images/pic1.jpg", alt: "Connecting you to International Tenders and Contracts" },
    { src: "/images/pic2.jpg", alt: "Access Tenders Across Various Industries" },
    { src: "/images/pic3.jpg", alt: "Find Global Business Opportunities" },
  ];

  const [currentPoster, setCurrentPoster] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPoster((prevPoster) => (prevPoster + 1) % posters.length);
    }, 3000); // change every 3 seconds
    return () => clearInterval(interval);
  }, [posters.length]);

  return (
    <main className="bg-gray-100 min-h-screen text-black">
      {/* Hero Section with Carousel */}
      <section 
        className="relative bg-red-900 text-white py-16 px-6 text-center bg-cover bg-center overflow-hidden"
      >
        {posters.map((poster, index) => (
          <Image 
            key={index}
            src={poster.src}
            alt={poster.alt}
            layout="fill"
            objectFit="cover"
            quality={100}
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ${index === currentPoster ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-4">Discover Global Opportunities</h1>
          <p className="text-lg mb-8">Connecting you to international tenders and contracts in various industries.</p>
          <Link href="/tender" className="bg-white text-red-700 px-6 py-3 font-semibold rounded-md hover:bg-gray-200">
            Explore Tenders
          </Link>
        </div>
      </section>

      {/* Featured Tenders */}
      <section className="py-12 px-6 bg-white">
        <h2 className="text-2xl font-bold text-center mb-8 text-red-900">Featured Tenders</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="border border-gray-300 rounded-lg shadow-md p-4 bg-gray-50">
              <h3 className="text-xl font-semibold mb-2 text-red-900">Tender Title {index + 1}</h3>
              <p className="text-gray-700 mb-4">Brief description of the tender opportunity.</p>
              <Link href={`/tenders/${index + 1}`} className="text-red-700 font-semibold hover:text-red-900">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-200 py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8 text-red-900">Browse by Category</h2>
        <div className="flex justify-center space-x-4">
          {['Construction', 'IT', 'Supply Chain', 'Consulting'].map((category, index) => (
            <Link key={index} href={`/categories/${category.toLowerCase()}`} className="bg-red-900 text-white px-4 py-2 rounded-md hover:bg-red-700">
              {category}
            </Link>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 px-6 bg-white">
        <h2 className="text-2xl font-bold text-center mb-8 text-red-900">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Sign Up', 'Browse Tenders', 'Submit Proposals'].map((step, index) => (
            <div key={index} className="text-center">
              <h3 className="text-xl font-semibold text-red-900">{step}</h3>
              <p className="text-gray-700">Description for {step.toLowerCase()} step in using the platform.</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA for Registration */}
      <section className="bg-red-900 text-white py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
        <p className="mb-8">Get notified about the latest tenders in your industry.</p>
        <Link href="/signup" className="bg-white text-red-900 px-6 py-3 font-semibold rounded-md hover:bg-gray-200">
          Sign Up Now
        </Link>
      </section>
    </main>
  );
}
