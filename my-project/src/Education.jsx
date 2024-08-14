import React from "react";

const Education = () => {
  return (
    <section className="h-[850px]  md:h-[1050px] md:relative md:top-[1200px] sm:relative relative top-[370px] sm:top-[600px] bg-slate-950 w-full" id="education">
      <div className="relative top-[50px] h-[100vh]">
        <h1 className=" font-extrabold relative top-20 md:ml-20 ml-20 sm:ml-8 sm:text-4xl text-6xl w-2/3 text-justify">
          Education
        </h1>
        <div className="w-full relative top-24 flex justify-center md:justify-start sm:justify-start sm:h-[1000px] bg-slate-950">
          <div className=" bg-white h-1 flex sm:flex-col sm:left-12 md:flex md:flex-col md:left-20 justify-between relative top-24 w-[88%] sm:h-[700px] md:h-[700px] sm:w-1 md:w-1">
            <span className="rounded-full flex items-center justify-center sm:h-14 sm:w-14 h-20 w-20 bg-white relative bottom-10 left-5 sm:top-3 sm:left-[-26px] md:top-3 md:left-[-37px]  ">
              <img
                className=" h-14 w-14 shadow rounded-full hover:scale-125 ease-in-out duration-300 cursor-pointer "
                src="/Images/college.png"
                alt=""
              />
            </span>
            <span className="rounded-full flex items-center justify-center sm:h-14 sm:w-14 h-20 w-20 bg-white relative bottom-10 left-5 sm:top-3 sm:left-[-26px] md:top-3 md:left-[-37px] ">
              <img
                className="h-14 w-14 shadow rounded-full hover:scale-125 ease-in-out duration-300 cursor-pointer "
                src="/Images/intermediate.png"
                alt=""
              />
            </span>
            <span className="rounded-full flex items-center justify-center sm:h-14 sm:w-14 h-20 w-20 bg-white relative bottom-10 right-5  sm:left-[-26px] md:bottom-3 md:left-[-37px]">
              <img
                className="h-14 w-14 shadow rounded-full hover:scale-125 ease-in-out duration-300 cursor-pointer "
                src="/Images/highSchool.png"
                alt=""
              />
            </span>
          </div>
        </div>
        <div className="w-full md:w-[400px] flex justify-evenly relative top-[250px] sm:absolute sm:top-28 md:absolute md:top-[260px] md:left-36 sm:flex-col md:flex-col sm:gap-10 md:gap-16 ">
          <div className="flex relative h-48 w-[400px] sm:w-[200px] sm:left-[93px] sm:top-[130px]">
            <div className="flex relative sm:h-72 sm:w-[200px] h-48  w-[400px] bg-slate-100 rounded-lg">
              <div className="absolute top-[-10px] left-[94px] sm:top-[15px] sm:left-[-5px] md:top-[32px] md:left-[-10px] rotate-[45deg] border-r-0 border-b-0  h-5 w-5  bg-slate-900 "></div>
              <div className="h-full relative bottom-[3px] w-full bg-slate-900 flex flex-col rounded-lg">
                <div className="flex flex-col ml-5 mt-5 ">
                  <span className="text-2xl font-bold">Bcom</span>
                  <span className="text-blue-200 font-semibold text-lg mt-4">
                    Shri Vishwanath Pg College Ayodhya, UP
                  </span>
                </div>
                <span className="relative top-3 text-2xl font-bold ml-5">. <span className="font-normal relative top-1 left-4 text-lg"> 50 % </span></span>
                <span className="relative top-3 text-lg ml-5 mt-3">Year 2018-2020</span>
              </div>
            </div>
          </div>
          <div className="flex relative h-48 w-[400px] md:w-[400px] sm:w-[200px] sm:left-[93px] sm:top-[215px] md:top-[10px]">
            <div className="flex relative sm:h-64 sm:w-[200px] h-48  w-[400px] bg-slate-100 rounded-lg">
              <div className="absolute top-[-10px] sm:top-[20px] left-[210px] sm:left-[-5px] md:top-[77px] md:left-[-10px] rotate-[45deg] border-r-0 border-b-0  h-5 w-5  bg-slate-900 "></div>
              <div className="h-full relative bottom-[3px] w-full bg-slate-900 flex flex-col rounded-lg">
                <div className="flex flex-col ml-5 mt-5 ">
                  <span className="text-2xl font-bold">XII (Commerce)</span>
                  <span className="text-blue-200 font-semibold text-lg mt-4">
                    National Inter College Pindra Varanasi, UP
                  </span>
                </div>
                <span className="relative top-3 text-2xl font-bold ml-5">. <span className="font-normal relative top-1 left-4 text-lg"> 50 % </span></span>
                <span className="relative top-3 text-lg ml-5 mt-3">Year 2015-2016</span>
              </div>
            </div>
          </div>

          <div className="flex relative h-48 w-[400px]  sm:w-[200px]  sm:left-[93px] sm:top-[270px]">
            <div className="flex relative sm:h-72  h-48 sm:w-[200px]  md:w-full w-[400px] bg-slate-100 rounded-lg">
              <div className="absolute top-[-10px] left-[284px] sm:top-2 sm:left-[-10px] md:top-[117px] md:left-[-10px] rotate-[45deg] border-r-0 border-b-0  h-5 w-5  bg-slate-900 "></div>
              <div className="h-full relative bottom-[3px] w-full bg-slate-900 flex flex-col rounded-lg">
                <div className="flex flex-col ml-5 mt-5 ">
                  <span className="text-2xl font-bold">XI</span>
                  <span className="text-blue-200 font-semibold text-medium mt-4">
                    Shri Krishna Dev Inter College Newada Varanasi
                  </span>
                </div>
                <span className="relative top-3 text-2xl font-bold ml-5">. <span className="font-normal relative top-1 left-4 text-lg"> 50 % </span></span>
                <span className="relative top-3 text-lg ml-5 mt-3">Year 2013-2014</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;