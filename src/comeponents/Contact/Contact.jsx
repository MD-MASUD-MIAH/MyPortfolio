import emailjs from "@emailjs/browser";
import { useRef } from "react";
import toast from "react-hot-toast";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaWhatsapp,
  FaArrowRight 
} from "react-icons/fa";  
import { MdContactEmergency } from "react-icons/md";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const tms = Object.fromEntries(formData.entries());

    console.log(tms);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);

          toast.success("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Something went wrong. Please try again.");
        }
      );
  };
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <section id="contact" className="mb-24">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 ">
            Let's{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Connect
            </span>
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mx-auto"></div>
        </div>

        <div className="bg-white p-8 ">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4"> <MdContactEmergency></MdContactEmergency> </h3>
              <p className="mb-6">
                Feel free to reach out for collaborations or just a friendly
                hello!
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <FaEnvelope className="text-blue-600 mr-3" />
                  <span>hossainmasood5@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <FaWhatsapp className="text-[#075e54]"></FaWhatsapp> /{" "}
                  <FaPhone className="text-blue-600 mr-3" />
                  <span>+8801764091069</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-medium mb-3">Connect with me:</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/MD-MASUD-MIAH"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-600"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/md-masud-miah-326186344"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-600"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href="https://web.facebook.com/hossainmasooddhali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-600"
                  >
                    <FaFacebook size={24} />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="from_name" // Changed to match template
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    name="from_email" // Changed to match template
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="tom-btn text-white px-6 py-3">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
