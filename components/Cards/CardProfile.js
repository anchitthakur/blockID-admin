import React from "react";

// components

export default function CardProfile({user}) {
  console.log(user);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
                <img
                  alt="..."
                  src={require("assets/img/Pvr.jpg")}
                  className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                />
              </div>
            </div>
            <div className="w-full px-4 text-center mt-20">
  
            </div>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
              {user && user.orgName}
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
              Delhi, India
            </div>
            <div className="mb-2 text-gray-700 mt-10">
              <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
              CE0
            </div>
          </div>
          <div className="mt-10 py-10 border-t border-gray-300 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <p className="mb-4 text-lg leading-relaxed text-gray-800">
                PVR Cinemas is a film entertainment company in India. The company started as a joint venture agreement between Priya Exhibitors Private Limited and Village Roadshow Limited
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
