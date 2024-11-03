const ContactSection = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 bg-black text-center px-6">
      <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
        Get in Touch
      </h1>
      <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
        Want to chat? Just mail me at{' '}
          <span className="text-fuchsia-300 underline cursor-pointer">mailhemanth25@gmail.com</span>
        {' '} or just connect on <span className="underline text-blue-400 cursor-pointer">LinkedIn</span> and I'll respond whenever I can.
      </p>
    </div>
  );
};

export default ContactSection;
