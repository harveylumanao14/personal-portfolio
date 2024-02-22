const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>

          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Harvey, Nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
            Experienced full-stack web developer with a proven track record of creating and implementing web applications from concept to delivery. Seeking a challenging role where I can utilize my skills in both front-end and back-end development, along with my proficiency in ReactJs, Laravel(PHP) and databases such as Mysql and SQL, to contribute to the growth and success of a dynamic development team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
