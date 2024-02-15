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
              I originally applied for an IT Project Coordinator role in an IT
              Solutions company but my previous employer said that the position
              was already filled in, but he has other job opening in his other
              company which is Pushkart.ph but that isn't in line with IT
              anymore and ask me to try the position. After having several
              second thoughts about it, I accepted it because I was desperate to
              have a job that time. I left the job due to pandemic.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
