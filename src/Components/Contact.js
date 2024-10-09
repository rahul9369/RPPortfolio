const Contact = () => {
  return (
    <section id="contact" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
        <form className="max-w-lg mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-md bg-gray-800 text-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-md bg-gray-800 text-white"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 rounded-md bg-gray-800 text-white h-32"></textarea>
          <button className="w-full bg-yellow-500 py-3 rounded-md text-black hover:bg-yellow-600">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
