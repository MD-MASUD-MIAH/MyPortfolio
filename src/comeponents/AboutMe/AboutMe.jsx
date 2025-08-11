import { Slide } from "react-awesome-reveal";
import { useInView } from "react-intersection-observer";
import { Link } from "react-scroll";
const AboutMe = () => {
  const [sectionRef, inView] = useInView({
    threshold: 0.2, // Triggers when 20% of element is visible
    triggerOnce: false, // Changed to false to animate every time
  });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20  bg-white dark:bg-gray-900"
    >
      <div className="  w-11/12 lg:max-w-7xl mx-auto">
        {/* Will animate every time it comes into view */}
        <Slide direction="up" triggerOnce={false} triggerInView={inView}>
          <div className="space-y-8">
            {/* Title with animated border */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
                <div className="flex gap-2 items-end">
                  <Slide direction="left" triggerOnce={false}>
                    <div className="py-5 px-2 border-l-2 border-r-2 border-indigo-500"></div>
                  </Slide>
                  <Slide direction="right" triggerOnce={false}>
                    <div>
                      About{" "}
                      <span className="text-indigo-600 dark:text-indigo-400">
                        Me
                      </span>
                    </div>
                  </Slide>
                </div>
              </h2>
            </div>

            {/* Content with staggered animation */}
            <Slide direction="up" cascade damping={0.1} triggerOnce={false}>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  I am Masud,I started coding with curiosity and have grown by
                  building real projects and learning new technologies,I love
                  creating interactive web applications that solve problems and
                  provide great user experiences.I dream of creating a moment in
                  my life where my struggle, determination, and success make
                  people rise to their feet in applause—just like they did for
                  Ben Stokes.
                </p>

                <p className="text-lg text-gray-600 dark:text-gray-300">
                  In the 2019 Ashes Test at Headingley, when England had lost 9
                  wickets, Stokes took full responsibility and played one of the
                  greatest innings in cricket history—135 not out. With the
                  final boundary, he sealed an impossible victory, and the
                  entire stadium erupted in celebration. Stokes roared with
                  emotion, arms raised, as every fan stood in awe.
                </p>

                <p className="text-lg text-gray-600 dark:text-gray-300">
                  This moment teaches me that pressure can’t break you if you
                  believe in yourself. If you keep fighting till the end, even
                  the impossible becomes possible. That innings fuels my
                  mindset—never give up, stay focused, and finish strong.
                </p>
              </div>
            </Slide>

            <Slide direction="up" triggerOnce={false}>
              <div className="pt-4">
                <Link
                  smooth={true}
                  duration={500}
                  to="contact"
                  className="inline-block px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300 hover:scale-105"
                >
                  Let's Connect
                </Link>
              </div>
            </Slide>
          </div>
        </Slide>
      </div>
    </section>
  );
};

export default AboutMe;
