const AboutMe = () => {
  const neonGreen = "#00FFA8";

  return (
    <section
      id="about"
      className="bg-gray-900 text-white py-20 lg:py-28 overflow-hidden relative"
    >
      {/* --- Futuristic Background Pattern --- */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(#2c3e50 1px, transparent 1px), radial-gradient(#2c3e50 1px, #1a1a2e 1px)",
          backgroundSize: "30px 30px",
          backgroundPosition: "0 0, 15px 15px",
        }}
      ></div>

      <div className="relative z-10 w-11/12 mx-auto max-w-7xl">
        {/* --- Header Section --- */}
        <div
          className="text-center mb-16 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 uppercase tracking-wider text-white">
            <span
              style={{
                color: neonGreen,
                textShadow: `0 0 10px ${neonGreen}`,
              }}
            >
              About
            </span>{" "}
            Me
          </h2>
          <div
            className="w-24 h-1 mx-auto rounded-full mt-4"
            style={{
              backgroundColor: neonGreen,
              boxShadow: `0 0 10px ${neonGreen}, 0 0 20px ${neonGreen}`,
            }}
          ></div>
        </div>

        {/* --- Content Grid --- */}
        <div className="grid lg:grid-cols-3 gap-16 items-center">
          {/* --- Left Side: Photo --- */}
          <div
            className="lg:col-span-1 flex justify-center animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div
              className="p-2 rounded-2xl transform hover:scale-105 transition duration-500 ease-in-out"
              style={{
                background: `linear-gradient(45deg, ${neonGreen}, #3f00ff, ${neonGreen})`,
                boxShadow: `0 0 20px ${neonGreen}, 0 0 40px rgba(0, 255, 168, 0.4)`,
              }}
            >
              <img
                src="https://i.ibb.co.com/nHXy0jv/Whats-App-Image-2024-08-06-at-11-11-04-e34abcfc.jpg"
                alt="Masud, Web Developer"
                className="w-72 h-[400px] object-cover rounded-2xl border-4 border-gray-900"
              />
            </div>
          </div>

          {/* --- Right Side: Text Content --- */}
          <div
            className="lg:col-span-2 space-y-8 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-300 ">
              I am <strong>Masud</strong>, a developer passionate about
              transforming curiosity into creation. I started coding by building{" "}
              <strong>real projects</strong> and have grown by constantly
              embracing new technologies. I love creating interactive web
              applications that solve problems and deliver exceptional user
              experiences.
            </p>

            <div
              className="w-1/3 h-px rounded-full"
              style={{ backgroundColor: neonGreen, opacity: 0.3 }}
            ></div>

            <div className="space-y-6 text-gray-400 text-lg">
              <p>
                My drive is fueled by a simple, powerful dream: to create a
                moment where my{" "}
                <strong>struggle, determination, and success</strong> make
                people rise to their feet in applause—just like they did for
                cricket legend <strong>Ben Stokes</strong>.
              </p>

              <p>
                His 135 not out in the 2019 Ashes at Headingley, fighting solo
                to seal an impossible victory, taught me that{" "}
                <strong>
                  pressure can’t break you if you believe in yourself
                </strong>
                . That innings is my mindset:{" "}
                <strong>never give up, stay focused, and finish strong</strong>.
              </p>

              <p
                className="font-semibold"
                style={{
                  color: neonGreen,
                  textShadow: `0 0 5px rgba(0, 255, 168, 0.4)`,
                }}
              >
                "If you keep fighting till the end, even the impossible becomes
                possible."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
