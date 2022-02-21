import React from "react";

function Footer() {
  return (
    <div className="flex justify-around items-center">
      <div>
        <h1 className="pb-2 text-3xl font-bold	">Business trands</h1>
        <p>
          Business is th activity of making one's
          <br /> living or making money
        </p>
        <div className="flex items-center gap-3 pt-4">
          <div className="bg-black w-16 h-16 rounded-full"></div>
          <div>
            <h1 className="font-bold text-lg">Thomas freak</h1>
            <p className="text-sm">Managing partner</p>
          </div>
        </div>
      </div>
      <div className="flex gap-40 ">
        <div className="border-2 border-white h-48 w-80 rounded-lg bg-teal-100">
          <div className="flex justify-between items-center p-3">
            <div className="border-2 h-10 w-10 rounded-full bg-purple-400"></div>
            <p>May-08</p>
          </div>
          <div className="p-3">
            <h1 className="font-bold pb-2">Visibility Booster</h1>
            <p>Unique visibilty Poster Design and sold by artists</p>
          </div>
        </div>
        <div className="border-2 border-white h-48 w-80 rounded-lg bg-teal-100">
          <div className="flex justify-between items-center p-3">
            <div className="border-2 h-10 w-10 rounded-full bg-fuchsia-300"></div>
            <p>May-08</p>
          </div>
          <div className="p-3">
            <h1 className="font-bold pb-2">Visibility Booster</h1>
            <p>Unique visibilty Poster Design and sold by artists</p>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default Footer;
