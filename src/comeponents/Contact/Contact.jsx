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
        import.meta.env.VITE_PUBLIC_KEY,
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
        },
      );
  };

  const neonGreen = "#00FFA8";
  return (
    <div className="max-w-7xl mx-auto mt-1 ">
      <section id="contact" className="mb-24 ">
        <div
          className="text-center mb-16 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          <h2 className="text-3xl md:text-4xl  font-extrabold mb-4 uppercase tracking-wider text-white">
            <span
              style={{
                color: neonGreen,
                textShadow: `0 0 10px ${neonGreen}`,
              }}
            >
              Let's
            </span>{" "}
            Connect
          </h2>
          <div
            className="w-24 h-1 mx-auto rounded-full mt-4"
            style={{
              backgroundColor: neonGreen,
              boxShadow: `0 0 10px ${neonGreen}, 0 0 20px ${neonGreen}`,
            }}
          ></div>
        </div>

        <div className="bg-gray-900 ">
          <div className="grid md:grid-cols-2 gap-8 mt-5 w-10/12 xl:w-full mx-auto">
            <div className="text-white mt-2">
              <h3 className="text-xl font-semibold mb-4">
                {" "}
                <MdContactEmergency></MdContactEmergency>{" "}
              </h3>
              <p className="mb-6">
                Feel free to reach out for collaborations or just a friendly
                hello!
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <FaEnvelope className="text-[#00FFA8] mr-3" />
                  <span>hossainmasood5@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <FaWhatsapp className="text-[#00FFA8]"></FaWhatsapp> /{" "}
                  <FaPhone className="text-[#00FFA8] mr-3" />
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
                    className="text-white hover:text-[#00FFA8] cursor-pointer"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/md-masud-miah-326186344"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#00FFA8] cursor-pointer"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href="https://web.facebook.com/hossainmasooddhali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#00FFA8] cursor-pointer"
                  >
                    <FaFacebook size={24} />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <form
                ref={form}
                onSubmit={sendEmail}
                className="space-y-4 text-white"
              >
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
                <button
                  type="submit"
                  className=" text-xs px-3 py-1 md:px-4 md:py-2 gap-1 
  relative group text-[#00FFA8] font-semibold rounded-full 
  border border-[#00FFA8]
  flex items-center justify-center transition-all duration-500
  hover:scale-110 hover:shadow-[0_0_30px_#00FFA8]
  shadow-[0_0_20px_#00FFA8] animate-pulse
  hover:text-[#00FFA8] hover:border-[#00FFA8]"
                >
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
