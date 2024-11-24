const SectionWork = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-900">
      <div className="text-center text-white px-6">
        <h1 className="text-3xl font-bold md:text-4xl">
          Your work, everywhere you are
        </h1>
        <p className="text-sm md:text-base mt-4">
          Access your notes from your computer, phone or tablet by synchronizing with various services, including
          whitespace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal
          app is also available!
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-500 transition">
          Try Taskey →
        </button>
      </div>
    </div>
  );
};

export default SectionWork;
