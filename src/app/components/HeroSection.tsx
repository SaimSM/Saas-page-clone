const HeroSection = () => {
  return (
    <section className="bg-[#002B5B] text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 min-h-[calc(100vh-70px)]">
      {/* Left Content */}
      <div className="max-w-lg">
        <h1 className="text-4xl font-bold leading-tight">
          Get More Done with whitespace
        </h1>
        <p className="mt-4 text-base leading-relaxed text-gray-300">
          Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks.
        </p>
        <button className="mt-8 bg-blue-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-600">
          Try Whitepace free &rarr;
        </button>
      </div>

      {/* Right Content */}
      <div className="w-full md:w-[500px] h-[300px] bg-[#E7F3FF] mt-8 md:mt-0 rounded-lg"></div>
    </section>
  );
};

export default HeroSection;
