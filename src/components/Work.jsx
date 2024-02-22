import ms from '../assets/Works/ms.png';
import iv from '../assets/Works/iv.png'
import dpsms from '../assets/Works/dpsms.png'

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work.</p>
        </div>

        {/* GRID CONTAINER */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">

          {/* CARD CONTAINER */}
          <div style={{backgroundImage: `url(${ms})`}}
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            
            {/* HOVER EFFECTS */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='ml-4 text-1xl font-bold text-white tracking-wider'>
              POS System
              </span>
              <div className='text-center p-2'>
                <p className='text-white text-sm'>It's a Web Application wherein the user's will store their Sales and Collection (Payments) including the master data of their products, customers and etc. It can downloadable in excel also they can upload the master data using excel. The system can generate reports such as monthly reporting data/s. The tech stack that I've been used is ReactJs and Laravel(PHP) for the database is SQL Server.</p>
                {/* <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a> */}
              </div>
            </div>
          </div>


          {/* CARD CONTAINER */}
          <div style={{backgroundImage: `url(${dpsms})`}}
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            
            {/* HOVER EFFECTS */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='ml-4 text-1xl font-bold text-white tracking-wider'>
                Burst SMS System
              </span>
              <div className='text-center p-2'>
                <p className='text-white text-sm'>
                It's a Web Application wherein the system will burst messages of their sales and payments to the client/s based on the master data stored. The system can generate reports such as monthly reporting data/s, It can extract their master data encoded to excel. The tech stack that I've been used is ReactJs and Laravel(PHP), for the database is SQL Server.
                </p>
                {/* <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a> */}
              </div>
            </div>
          </div>

          {/* CARD CONTAINER */}
          <div style={{backgroundImage: `url(${iv})`}}
          className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            
            {/* HOVER EFFECTS */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='ml-4 text-1xl font-bold text-white tracking-wider'>
                POS System
              </span>
              <div className='text-center p-2'>
                <p className='text-white text-sm'>It's a Web Application wherein the user's will store their Sales and Collection (Payments) including the master data of their products, customers and etc. It can downloadable in excel also they can upload the master data using excel. The system can generate reports such as monthly reporting data/s. The tech stack that I've been used is ReactJs and Laravel(PHP) for the database is SQL Server.</p>
                {/* <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a> */}
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Work;
