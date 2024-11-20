const HeroSection = () => {
  return (
    <section className="bg-primary text-white flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center">
        Get More Done with <span className="text-secondary">whitepace</span>
      </h1>
      <p className="text-lg text-center mt-4">
        Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks.
      </p>
      <button className="mt-8 bg-blue-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-600">
        Try Whitepace free &rarr;
      </button>
    </section>
  );
};

export default HeroSection;
