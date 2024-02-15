import AWS from "../assets/aws-logo.png";
import REACTJS from "../assets/reactjs-logo.png";
import NEXTJS from "../assets/nextjs-logo.png";
import PHP from "../assets/php-logo.png";
import LARAVEL from "../assets/laravel-logo.png";
import JAVASCRIPT from "../assets/javascript-logo.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* CONTAINER */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">
            // These are the technologies I've worked with.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={AWS} alt="" />
            <p className="my-4">AWS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={REACTJS} alt="" />
            <p className="my-4">REACT JS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-12 mx-auto" src={JAVASCRIPT} alt="" />
            <p className="my-4">JAVASCRIPT</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-14 mx-auto" src={NEXTJS} alt="" />
            <p className="my-4">NEXT JS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={PHP} alt="" />
            <p className="my-4">PHP</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-12 mx-auto" src={LARAVEL} alt="" />
            <p className="my-4">LARAVEL</p>
          </div>

        </div>


      </div>
    </div>
  );
};

export default Skills;
