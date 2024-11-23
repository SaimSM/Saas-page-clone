import React from 'react';

const SectionTwo = () => {
  return (
    <section className="flex justify-between items-center px-8 py-16 bg-gray-50 relative">
      {/* Left Section with Circular Axis */}
      <div className="relative w-1/3 flex items-center justify-center">
        {/* Dotted Circle */}
        <div className="absolute w-80 h-80 rounded-full border-dotted border-2 border-gray-300"></div>

        {/* Random Dots and Avatars */}
        <div className="absolute w-4 h-4 bg-red-500 rounded-full top-8 left-24"></div>
        <div className="absolute w-4 h-4 bg-blue-500 rounded-full bottom-12 right-16"></div>
        <div className="absolute w-4 h-4 bg-green-500 rounded-full bottom-20 left-12"></div>
        <div className="absolute w-4 h-4 bg-yellow-400 rounded-full top-24 right-28"></div>

        {/* Central Icon */}
        <div className="w-16 h-16 bg-blue-600 text-white flex items-center justify-center rounded-full shadow-md">
          <span className="text-xl font-bold">App</span>
        </div>

        {/* Avatars around the Circle */}
        <div className="absolute top-0 -left-12 flex items-center">
          <img
            src="https://via.placeholder.com/40"
            alt="User 1"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
        </div>
        <div className="absolute bottom-4 left-32 flex items-center">
          <img
            src="https://via.placeholder.com/40"
            alt="User 2"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
        </div>
        <div className="absolute -top-4 right-8 flex items-center">
          <img
            src="https://via.placeholder.com/40"
            alt="User 3"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
        </div>
      </div>

      {/* Right Section: Text and Button */}
      <div className="max-w-lg space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Work together</h1>
        <p className="text-lg text-gray-600">
          With whitespace, share your notes with your colleagues and collaborate on them. You can also publish a note to
          the internet and share the URL with others.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white text-lg rounded hover:bg-blue-500">Try it now →</button>
      </div>
    </section>
  );
};

export default SectionTwo;
