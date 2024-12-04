const ContactSection = () => {
    return (
      <div className="flex flex-col items-center justify-center py-12 bg-black text-center px-4">
        <h1 className="text-white text-lg sm:text-xl lg:text-2xl font-bold mb-4">
          Get in Touch
        </h1>
        <p className="text-gray-400 text-xs sm:text-sm lg:text-base max-w-lg mx-auto leading-relaxed">
          Want to chat? Just mail me at{' '}
          <span className="text-fuchsia-300 underline cursor-pointer">
            mailhemanth25@gmail.com
          </span>
          {' '}or connect on{' '}
          <span className="underline text-blue-400 cursor-pointer">
            LinkedIn
          </span>
          {' '}, and I’ll respond ASAP.
        </p>
      </div>
    );
  };
  
  export default ContactSection;
  