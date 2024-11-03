const BioSection = () => {
  return (
    <div className="text-white">
      {/* Header Section */}
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-400">Hi,</h1>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Hemanth Damarla</h1>
        </div>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-300">
          New Grad Software Engineer
        </p>
      </div>

      {/* About Section */}
      <div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">About</h2>
        <div className="text-gray-300 text-base sm:text-lg lg:text-xl space-y-4 leading-relaxed">
          <p>
          I recently graduated with a <span className="underline text-blue-50 hover:text-blue-100" >Bachelor's in Computer Science and Engineering</span> and I enjoy building high-performance software solutions.{' '}
            <p href="#" className=" hover:text-white transition-colors pt-1">
            Currently, I’m working with <span className="underline text-green-50">backend</span> and <span className="underline text-green-50">full-stack web applications</span> using technologies like Python and the MERN stack.
            </p>
            <p href="#" className=" transition-colors pt-1">
            I’m <span className="text-white text-pretty">actively seeking new grad opportunities</span> to kickstart my career and contribute to impactful projects.
            </p>
          </p>
        </div>
        <div className="mt-5 mb-10 text-gray-300 text-base sm:text-lg lg:text-xl space-y-4 leading-relaxed">
          <p className="mt-3 mb-3">Let’s connect, and feel free to take a look at my resume!</p>
          <a className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-md font-medium shadow-sm hover:bg-fuchsia-200 transition-all" href="https://drive.google.com/file/d/1bYHGsw5IgUDgt7q93yWTgvZ7YNOcg2IE/view?usp=drive_link" target="_blank">Resume</a>
        </div>
      </div>
    </div>
  );
};

export default BioSection;