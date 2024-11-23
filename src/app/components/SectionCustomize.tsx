const SectionCustomize = () => {
  return (
    <section className="flex justify-between items-center px-8 py-16 bg-white">
      {/* Left Section: Placeholder Box */}
      <div className="w-[714px] h-[532.09px] flex-row  bg-blue-200 rounded-md"></div>

      {/* Right Section: Text Content */}
      <div className="max-w-lg text-left space-y-4 gap-4">
        <h1 className="text-4xl font-bold">Customise it to your needs</h1>
        <p className="text-lg text-gray-600">
          Customise the app with plugins, custom themes, and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white text-lg rounded hover:bg-blue-500">
          Let's Go →
        </button>
      </div>
    </section>
  );
};

export default SectionCustomize;
