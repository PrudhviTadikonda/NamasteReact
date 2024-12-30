const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-extrabold text-red-600 mb-6">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        We'd love to hear from you! Fill out the form below or reach out to us
        directly.
      </p>

      {/* Contact Form */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-bold mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Type your message here"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Location and Contact Details */}
      <div className="mt-10 text-center">
        <h2 className="text-2xl font-bold text-black mb-4">Our Location</h2>
        <p className="text-gray-700">
          1234 Elm Street <br />
          Dallas, TX 75001 <br />
          Phone:{" "}
          <a href="tel:+1234567890" className="text-red-500 hover:underline">
            +1 (234) 567-890
          </a>{" "}
          <br />
          Email:{" "}
          <a
            href="mailto:contact@foodonwheels.com"
            className="text-red-500 hover:underline"
          >
            contact@foodonwheels.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
