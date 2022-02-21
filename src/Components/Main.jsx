import React from "react";

function Main() {
  return (
    <div className="flex justify-around items-center p-14">
      <div>
        <h4 className="pb-4">-----20 CITIES AND GROWING</h4>
        <div className="flex">
          <div>
            <h1 className="text-6xl pb-2 font-extrabold">Being founders</h1>
          </div>
        </div>
        <div className="flex gap-9 items-center">
          <h1 className="text-6xl pb-10 font-extrabold"> Takes gut</h1>
          <div>
            {" "}
            <svg
              width="104"
              height="90"
              viewBox="0 0 104 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M58.2083 7.82366L52.0891 0L41.2248 13.8906C39.6072 14.2928 38.0354 14.7825 36.5175 15.353L25.2255 12.3225L25.7475 19.4718L15.7976 19.3565L19.0595 26.9766L2.13757 32.9289L7.72999 38.7845L0 43.8508L15.5753 52.6186C16.8465 57.222 19.2633 61.538 22.6255 65.2538L19.9595 72.4578L29.9702 72.0209L29.8035 76.187L35.7568 74.463C35.9551 74.5469 36.1546 74.6293 36.3552 74.7104L41.6726 89.696L52.169 81.7565L56.292 87L64.9852 75.8257C66.0652 75.4826 67.125 75.0965 68.1611 74.669L81.2938 78.0147L80.3131 66.86L90.9247 66.8561L88.3009 60.9689L102.051 55.9378L94.3271 48.0736L104 41.5521L87.1581 32.3529C86.533 31.0316 85.8015 29.7542 84.9724 28.5281L87.5629 21.5847L79.0104 21.9384C78.9087 21.8524 78.8063 21.7668 78.7034 21.6818L79.0664 13.2141L70.9906 15.533L66.1704 1.83083L58.2083 7.82366Z"
                fill="#C4C4C4"
              />
            </svg>
          </div>
        </div>
        <p className="pb-14 pt-10">
          Knowing your risk tolerence can serve as an internal Compass,
          <br />
          guiding your business growth decisions{" "}
        </p>
        <div className="flex items-center space-x-8">
          <div className="space-x-4">
            <button className="border-solid  border-black-900 p-3 w-40 rounded-3xl bg-black text-stone-50 border-0 drop-shadow-2xl">
              Book Demo
            </button>
            <button className="border-solid	 bg-black text-stone-50 border-0 border-black-100 p-3  rounded-full">
              ▶️
            </button>
          </div>
          <div>
            {" "}
            <p>Watch Showreel</p>
          </div>
        </div>
      </div>
      <div className="self-center">
        <svg
          width="320"
          height="173"
          viewBox="0 0 280 263"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          
        >
          <path
            d="M0.758478 100.354C-2.12578 96.7896 57.0197 141.922 76.2751 119.149C130.4 55.1371 122.314 6.32312 114.125 1.81413C105.936 -2.69485 87.8642 35.4769 78.8455 70.5191C62.3426 134.642 106.37 144.586 158.478 166.409C210.586 188.233 246.752 139.193 253.787 94.636C236.999 21.2143 79.4282 208.022 156.29 236.942C171.765 242.764 316.152 244.588 318.777 262.596"
            stroke="black"
          />
        </svg>
      </div>
      <div className="w-64 h-96 border-black border-2 rounded-full flex items-center justify-center relative">
        <div className="w-48 h-80 border-black border-2 rounded-full bg-black"></div>
        <div className="bg-black w-10 h-10 rounded-full absolute bottom-0 right-9 "></div>
      </div>
    </div>
  );
}

export default Main;
