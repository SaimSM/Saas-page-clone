const SectionOne = () => {
  return (
    <section className="flex justify-between items-start px-8 py-16">
      <div className="max-w-lg space-y-4">
        <h1 className="text-5xl font-bold text-gray-900">Project Management</h1>
        <p className="text-lg text-gray-600">
          Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app.
          Take photos with the mobile app and save them to a note.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white text-lg rounded hover:bg-blue-500">Get Started →</button>
      </div>
      <div className="w-1/3 bg-blue-100 rounded-lg h-48 relative">
        <div className="absolute bottom-2 right-2 flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-800 text-white flex items-center justify-center rounded-full text-sm font-bold">M</div>
          <div className="w-8 h-8 bg-gray-800 text-white flex items-center justify-center rounded-full text-sm font-bold">N</div>
          <div className="w-8 h-8 bg-gray-800 text-white flex items-center justify-center rounded-full text-sm font-bold">C</div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
