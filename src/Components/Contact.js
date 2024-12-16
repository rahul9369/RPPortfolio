const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-bl from-[#1e3a8a] via-[#2e4067] to-[#1e3a8a] text-white py-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
        <form className="max-w-lg mx-auto space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-400 transition duration-300"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-400 transition duration-300"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-4 rounded-md bg-gray-800 text-white h-32 focus:outline-none focus:ring-2 focus:ring-teal-400 transition duration-300"></textarea>
          <button className="w-full py-4 rounded-md bg-yellow-500 text-black font-semibold hover:bg-yellow-600 transition duration-300">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
