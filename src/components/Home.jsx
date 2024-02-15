import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, My name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Harvey Lumanao
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          My role on this job is to develop in house application such as POS and
          ERP Systems. I'm the one who communicates to our clients(employee) to
          conduct a Gap Analysis of their manual business process. Wherein I
          will translate it to a web application to automates their manual
          functioning process to web based process. The tech stack that I used
          PHP (Laravel Framework) for the backend, ReactJS for the front end.
          Also for the versioning control I'm using SVN, Jenkins, I have
          experience using GitHub. And for the database I'm using MySQL and SQL
          Server(Microsoft)
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="group text-white border-2 px-6 py-3 my-2 flex items-center">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
