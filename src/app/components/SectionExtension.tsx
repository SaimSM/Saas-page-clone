import React from "react";

const SectionExtension = () => {
  return (
    <section className="flex justify-between items-center px-8 py-16 bg-blue-900 text-white">
      {/* Left Section: Text Content */}
      <div className="max-w-lg space-y-4">
        <h1 className="text-4xl font-bold">Use as Extension</h1>
        <p className="text-lg">
          Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-lg rounded hover:bg-blue-500">
          Let's Go →
        </button>
      </div>

      {/* Right Section: Placeholder Box */}
      <div className="w-[686px] h-[479px] gap-[98px] py-4 px-4 bg-blue-300 rounded-md"></div>
    </section>
  );
};

export default SectionExtension;
