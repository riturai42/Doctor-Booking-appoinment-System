const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold mb-8">
        Contact Us
      </h1>

      <form className="max-w-xl space-y-5">

        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full border p-3 rounded-lg"
        />

        <textarea
          placeholder="Your Message"
          className="w-full border p-3 rounded-lg"
          rows="5"
        />

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
          Send Message
        </button>

      </form>

    </div>
  );
};

export default Contact;