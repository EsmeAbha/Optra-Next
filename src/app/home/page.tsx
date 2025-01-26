"use client";
import Link from 'next/link';
import 'tailwindcss/tailwind.css';

const HomePage = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-white via-[#F7EFE5] to-white min-h-screen font-sans">
        {/* Navbar */}
        <header className="flex items-center justify-between p-6 shadow-md bg-white sticky top-0 z-50">
          <h1 className="text-2xl font-bold text-pink-500">Optra</h1>
          <nav className="space-x-6">
            <a href="#" className="text-gray-600 hover:text-[#7E60BF]">Home</a>
            <a href="#about" className="text-gray-600 hover:text-[#7E60BF]">About</a>
            <a href="#services" className="text-gray-600 hover:text-[#7E60BF]">Our Services</a>
            <a href="#contact" className="text-gray-600 hover:text-[#7E60BF]">Contact Us</a>
          </nav>
          <div className="space-x-4">
            <Link href="/auth/login" className="bg-[#7E60BF]  text-white px-4 py-2 rounded-lg">Log In</Link>
            <Link href="/auth/signup" className="bg-[#7E60BF] text-white px-4 py-2 rounded-lg">Sign Up</Link>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative bg-white py-20 px-8 text-center">
          <div className="absolute w-40 h-40 bg-[#F7EFE5] rounded-full top-10 left-10 opacity-20"></div>
          <div className="absolute w-60 h-60 bg-[#7E60BF] rounded-full top-40 right-10 opacity-30"></div>
          <h1 className="text-4xl font-bold text-gray-800 leading-snug">
            Connecting <span className="text-pink-500">Companies</span>, <span className="text-pink-500">Advisors</span>, and <span className="text-pink-500">Investors</span> Seamlessly
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Optra: The platform that bridges innovation, expertise, and investment to drive success.
          </p>
          <button className="bg-[#7E60BF] text-white px-6 py-3 rounded-lg mt-6 text-lg shadow-md hover:shadow-lg">Get Started</button>
          <div className="mt-12 relative">
            <img
              src="./globe.svg"
              alt="Globe Illustration"
              className="w-3/4 max-w-lg mx-auto shadow-md rounded-lg"
            />
            <div className="absolute top-10 left-10 text-white text-sm bg-[#7E60BF] p-2 rounded-full">5000+ Companies</div>
          </div>
        </section>

{/* About Section */}
<section
  id="about"
  className="flex flex-col md:flex-row items-center py-20 px-8 space-y-12 md:space-y-0 bg-white"
>
  <div className="relative w-full md:w-1/2">
    <img
      src="./about.jpg"
      alt="About Us"
      className="rounded-lg shadow-lg w-3/4 mx-auto"
    />
  </div>
  <div className="w-full md:w-1/2 space-y-4">
    <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
    <p className="text-gray-600 leading-relaxed">
      Optra bridges the gap between companies, advisors, and investors to drive growth and innovation. Companies can effortlessly find expert advisors and potential investors to scale their operations, while advisors share their expertise to guide businesses toward success.
    </p>
    <div className="flex space-x-6">
        <div className="text-center">
      <button className="mt-4 px-6 py-3 bg-[#7E60BF] text-white font-bold rounded-lg transform transition-all duration-300 hover:bg-[#6a4e99] hover:scale-105 shadow-lg">
        <span className="text-3xl block">4k+</span>
        <span className="text-sm block font-medium">Connected Users</span>
      </button>
    </div>
    <div className="text-center">
      <button className="mt-4 px-6 py-3 bg-[#7E60BF] text-white font-bold rounded-lg transform transition-all duration-300 hover:bg-[#6a4e99] hover:scale-105 shadow-lg">
        <span className="text-3xl block">100%</span>
        <span className="text-sm block font-medium">Efficient Output</span>
      </button>
    </div>
    <div className="text-center">
      <button className="mt-4 px-6 py-3 bg-[#7E60BF] text-white font-bold rounded-lg transform transition-all duration-300 hover:bg-[#6a4e99] hover:scale-105 shadow-lg">
        <span className="text-3xl block">1000+</span>
        <span className="text-sm block font-medium">Global Visitors</span>
      </button>
    </div>
    </div>
  </div>
</section>


        {/* Services Section */}
        <section id="services" className="py-20 px-8 bg-[#EDE7F6]">
          <h2 className="text-3xl font-bold text-center text-gray-800">Our Services</h2>
          <p className="text-gray-600 text-center mt-2">Explore top destinations</p>
          <div className="flex flex-col md:flex-row justify-center mt-8 space-y-6 md:space-y-0 md:space-x-6">
            <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/3">
              <h3 className="text-lg font-bold text-[#7E60BF]">Companies</h3>
              <p className="text-gray-600 mt-2">
                We provide the tools to showcase ventures, attract funding, and connect with advisors.
              </p>
              <Link href="#" className="text-[#7E60BF] underline mt-4 block">See More</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/3">
              <h3 className="text-lg font-bold text-[#7E60BF]">Advisors</h3>
              <p className="text-gray-600 mt-2">
                Collaborate on strategic initiatives and refine business strategies.
              </p>
              <Link href="#" className="text-[#7E60BF] underline mt-4 block">See More</Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/3">
              <h3 className="text-lg font-bold text-[#7E60BF]">Investors</h3>
              <p className="text-gray-600 mt-2">
                Gain access to curated high-potential startups with detailed insights.
              </p>
              <Link href="#" className="text-[#7E60BF] underline mt-4 block">See More</Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="bg-[#7E60BF] text-white py-6 text-center">
          <p className="text-sm">Contact us: support@optra.com <br /> (xxx) xxxx-xxxx <br />Dhaka,Bangladesh</p>
          <p className="text-sm mt-2">&copy; 2025 Optra. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
