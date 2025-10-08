/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router";
import { Link, scroller } from "react-scroll";
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname === "/") {
      scroller.scrollTo("home", {
        smooth: true,
        duration: 500,
      });
    } else {
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo("home", {
          smooth: true,
          duration: 500,
        });
      }, 100);
    }
  };

  const links = (
    <>
      <Link
        onClick={handleClick}
        className=" flex items-center px-3 py-2 font-bold hover:text-[#00FFA8] transition cursor-pointer"
      >
        Home
      </Link>
      <Link
        to="projects"
        smooth={true}
        duration={500}
        className="flex items-center px-3 py-2 font-bold hover:text-[#00FFA8] transition cursor-pointer"
      >
        Projects
      </Link>
      <Link
        to="skills"
        smooth={true}
        duration={500}
        className="flex items-center px-3 py-2 font-bold hover:text-[#00FFA8] transition cursor-pointer"
      >
        Skills
      </Link>
      <Link
        smooth={true}
        duration={500}
        to="about"
        className="flex items-center px-3 py-2 font-bold hover:text-[#00FFA8] transition cursor-pointer"
      >
        About
      </Link>
      <Link
        to="contact"
        smooth={true}
        duration={500}
        className="flex items-center px-3 py-2 font-bold hover:text-[#00FFA8] transition cursor-pointer"
      >
        Contact
      </Link>
    </>
  );
  return (
    <div className="shadow-lg sticky top-0 z-20 bg-black text-white border-b-1 border-[#00FFA8]">
      <div className="navbar    w-11/12 lg:max-w-7xl mx-auto px-0 ">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 text-black shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <img
              className="h-12 w-12 "
              src="https://i.ibb.co.com/Q7VXQ523/2.png"
              alt=""
            />
            <h1 className="font-bold text-xl text-[#00FFA8]">asud</h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <motion.a
            href="https://drive.google.com/file/d/11SoJrJcZFnWOzM0bCDwIpPo9pDxtliD5/view"
            download
            target="_blank"
            className="
     px-3 py-1 md:px-4 md:py-2 gap-1 
  relative group text-[#00FFA8] font-semibold rounded-full 
  border border-[#00FFA8]
  flex items-center justify-center transition-all duration-500
  hover:scale-110 hover:shadow-[0_0_30px_#00FFA8]
  shadow-[0_0_20px_#00FFA8] animate-pulse
  hover:text-[#00FFA8] hover:border-[#00FFA8]"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
          >
            <FiDownload className="inline mr-2 text-base md:text-[16px]" />
            <span className=" text-sm  text-[#00FFA8]">Resume</span>
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
