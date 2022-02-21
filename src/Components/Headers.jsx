import React from "react";

function Headers() {
  return (
    <div>
      <div className="flex justify-around items-center p-5">
        <h3 className="font-bold text-3xl	">Lucus.</h3>
        <div>
          <ul className="flex justify-center">
            <li className="mr-16 text-lg">Portfolio</li>
            <li className="mr-16 text-lg">About us</li>
            <li className="mr-16 text-lg">Join us</li>
            <li className="mr-16 text-lg">News & Events</li>
          </ul>
        </div>
        <button className=" border-solid bg-white	border-2 border-black-900 p-3 w-40 rounded-3xl border-black	hover:text-white hover:bg-black">
          Register
        </button>
      </div>
    </div>
  );
}

export default Headers;
