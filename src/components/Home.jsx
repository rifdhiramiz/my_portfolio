export default function Home() {
  return (
    <section
      id="home"
      className="
        flex flex-col-reverse md:flex-row items-center justify-center
        min-h-screen px-6 md:px-20 gap-10
        bg-darkblue pt-20 md:pt-0
      "
      style={{ fontFamily: '"Times New Roman", Times, serif' }}
    >
      {/* Text Section */}
      <div className="max-w-3xl text-center">
        <h2 className="text-lg sm:text-xl text-gray-400 mb-4 sm:mb-6">
          Software Engineer
        </h2>

        <h1 className="
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl
          font-extrabold text-gold mb-4 sm:mb-6 whitespace-nowrap
        ">
          Rifdhi Ramiz
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8">
          As an aspiring software engineer, I specialize in designing and developing responsive,
          secure, and engaging web applications that make a real-world difference.
        </p>

        <a
          href="#projects"
          className="
            border-2 border-white text-gold px-6 py-3 rounded-lg font-semibold
            hover:bg-primary hover:text-white transition
          "
        >
          View My Work
        </a>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <img
          src="Rifdhi1.png"
          alt="Profile"
          className="
            w-64 sm:w-72 md:w-96 lg:w-[28rem]
            object-contain
          "
        />
      </div>
    </section>
  );
}
