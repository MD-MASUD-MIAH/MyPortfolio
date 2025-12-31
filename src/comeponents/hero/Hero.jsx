import { FaChartLine, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { RiStackLine } from "react-icons/ri";
import { TypeAnimation } from "react-type-animation";
const Hero = () => {
  return (
    <div className="bg-[url(https://i.ibb.co.com/d4SmmSJ4/Lucid-Origin-A-minimalist-abstract-background-with-subtle-geom-3.jpg)] bg-cover bg-no-repeat ">
      <div className=" inset-0 bg-black/60 py-10 xl:py-0">
        <div className=" z-10  text-white xl:max-w-7xl w-11/12 mx-auto h-full ">
          <div className="flex flex-col-reverse gap-10 w-11/12 mx-auto md:w-full md:flex-row items-center">
            <div className="w-full flex flex-col gap-4">
              <h1 className=" text-3xl lg:text-6xl font-bold text-[#00FFA8]">
                Hi, I'm Masud Miah
              </h1>
              <TypeAnimation
                sequence={[
                  "Full Stack Developer ",
                  1500,
                  "MERN Stack Developer ",
                  1500,
                  "Front-End Developer ",
                  1500,
                  "Web Developer ",
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-xl lg:text-2xl font-semibold text-[#00FFA8]"
              />

              <p>
                I am an enthusiastic Web Developer, passionate about building
                applications using modern technologies. I aim to pursue a career
                in app development, take on new challenges, and continuously
                enhance my skills.
              </p>

              <div className="grid  grid-cols-3 gap-4 mt-10">
                <div
                  className="border border-[#00FFA8]/50 rounded-tl-4xl rounded-br-4xl p-3 lg:p-6 flex flex-col gap-2 items-center justify-center 
                  backdrop-blur-sm shadow-lg hover:shadow-[#00FFA8]/50 
                 transition-all duration-300 ease-in-out hover:scale-105 hover:border-[#00FFA8]"
                >
                  <GoProjectSymlink
                    size={28}
                    className="text-[#00FFA8] transition-colors duration-300 group-hover:text-white"
                  />
                  <p className="font-bold text-xl lg:text-2xl text-white">
                    14+
                  </p>
                  <p className="font-semibold text-gray-300 text-xs lg:text-[16px]">
                    Projects
                  </p>
                  <span className="absolute inset-0 rounded-full bg-[#00FFA8]/10 blur-xl animate-ping"></span>
                </div>

                <div
                  className="border border-[#00FFA8]/50 rounded-tl-4xl rounded-br-4xl p-3 lg:p-6 flex flex-col gap-2 items-center justify-center 
                  backdrop-blur-sm shadow-lg hover:shadow-[#00FFA8]/50 
                 transition-all duration-300 ease-in-out hover:scale-105 hover:border-[#00FFA8]"
                >
                  <FaChartLine
                    size={28}
                    className="text-[#00FFA8] transition-colors duration-300 group-hover:text-white"
                  />
                  <p className="font-bold text-xl lg:text-2xl text-white">629+</p>
                  <p className="font-semibold text-gray-300 text-xs lg:text-[16px]">Contributions</p>
                  <span className="absolute inset-0 rounded-full bg-[#00FFA8]/10 blur-xl animate-ping"></span>
                </div>
                <div
                  className="border border-[#00FFA8]/50 rounded-tl-4xl rounded-br-4xl p-3 lg:p-6 flex flex-col gap-2 items-center justify-center 
                  backdrop-blur-sm shadow-lg hover:shadow-[#00FFA8]/50 
                 transition-all duration-300 ease-in-out hover:scale-105 hover:border-[#00FFA8]"
                >
                  <RiStackLine
                    size={28}
                    className="text-[#00FFA8] transition-colors duration-300 group-hover:text-white"
                  />
                  <p className="font-bold text-xl lg:text-2xl text-white">15+</p>
                  <p className="font-semibold text-gray-300 text-xs lg:text-[16px]">Technologies</p>
                  <span className="absolute inset-0 rounded-full bg-[#00FFA8]/10 blur-xl animate-ping"></span>
                </div>
              </div>

              <div className="mt-2 flex gap-4">
                <a
                  href="https://www.linkedin.com/in/mdmasudmiah66"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group text-[#00FFA8] p-2 h-13 w-13 rounded-xl border border-[#00FFA8]/60 cursor-pointer
             flex items-center justify-center transition-all duration-500
             hover:scale-110 hover:shadow-[0_0_25px_#00FFA8]
             shadow-[0_0_15px_#00FFA8] animate-pulse"
                >
                  <FaLinkedin size={22} className="" />
                  <span className="absolute inset-0  bg-[#00FFA8]/10 blur-xl animate-ping"></span>
                </a>
                <a
                  href="https://github.com/MD-MASUD-MIAH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group text-[#00FFA8] p-2 h-13 w-13 rounded-xl border border-[#00FFA8]/60 cursor-pointer
             flex items-center justify-center transition-all duration-500
             hover:scale-110 hover:shadow-[0_0_25px_#00FFA8]
             shadow-[0_0_15px_#00FFA8] animate-pulse"
                >
                  <FaGithub size={22} className="" />
                  <span className="absolute inset-0  bg-[#00FFA8]/10 blur-xl animate-ping"></span>
                </a>
                <a
                  href="https://wa.me/8801764091069"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group text-[#00FFA8] p-2 h-13 w-13 rounded-xl border border-[#00FFA8]/60
             flex items-center justify-center transition-all duration-500 cursor-pointer
             hover:scale-110 hover:shadow-[0_0_25px_#00FFA8]
             shadow-[0_0_15px_#00FFA8] animate-pulse"
                >
                  <FaWhatsapp size={22} className="" />
                  <span className="absolute inset-0 border   bg-[#00FFA8]/10 blur-xl animate-ping"></span>
                </a>
              </div>
            </div>

            <div className="flex items-end justify-around w-full h-full">
              <h1></h1>
              <img
                className="xl:h-180"
                src="https://i.ibb.co.com/7tJCmVKF/Gemini-Generated-Image-o3c1oio3c1oio3c1-removebg-preview.png"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
