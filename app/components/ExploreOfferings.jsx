// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";

// import { Pagination } from "swiper/modules";
// const exams = [
//   "Indian Army",
//   "UPSC NDA",
//   "UPSC CDS",
//   "Territorial Army",
//   "Coast Guard",
//   "Sashastra Seema Bal (SSB)",
//   "Intelligence Bureau",
//   "Ind. Maritime - IMU CET (UG)",
//   "Central Industrial Security Force (CISF)",
//   "Central Reserve Police Force (CRPF)",
//   "Central Armed Police Forces CAPF (AC)",
//   "Border Security Force",
//   "Indian Air Force (IAF)",
//   "Indian Navy",
//   "UP Police (UPP)",
//   "Bihar Police",
//   "Delhi Police",
//   "Jharkhand Police",
//   "Puducherry Police",
//   "HP Police",
//   "Madhya Pradesh Police",
//   "Ladakh Police",
//   "Assam Police",
//   "Punjab Police",
// ];
// const ExploreOfferings = () => {
//   return (
//     <>
//       <div className="bg-white relative text-slate-900">
//         <main className="max-w-7xl mx-auto px-6 sm:px-10 py-10">
//           <h2 className="text-3xl font-semibold max-w-max mb-8">
//             Explore all the exams
//             <span className="text-[#FF6B4A] relative font-semibold pl-1">
//               offerings
//               <svg
//                 aria-hidden="true"
//                 className="absolute -bottom-1 left-0"
//                 fill="none"
//                 focusable="false"
//                 height="8"
//                 viewBox="0 0 90 8"
//                 width="90"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M0 6.5C15 6.5 30 0 45 0C60 0 75 6.5 90 6.5"
//                   stroke="#F9D54B"
//                   strokeLinecap="round"
//                   strokeWidth="4"
//                 ></path>
//               </svg>
//             </span>
//           </h2>
//           <nav className="flex relative flex-wrap gap-3 mb-12 text-sm font-normal text-slate-700">
//             <button
//               className="rounded-md border border-slate-300 px-4 py-2 hover:bg-slate-100"
//               type="button"
//             >
//               Medical
//             </button>
//             <button
//               className="rounded-md border border-slate-300 px-4 py-2 hover:bg-slate-100"
//               type="button"
//             >
//               CUET
//             </button>
//             <button
//               className="rounded-md border border-slate-300 px-4 py-2 hover:bg-slate-100"
//               type="button"
//             >
//               SSC
//             </button>
//             <button
//               className="rounded-md bg-slate-900 text-white px-4 py-2 font-semibold"
//               type="button"
//             >
//               Defence & Police
//             </button>
//             <button
//               className="rounded-md border border-slate-300 px-4 py-2 hover:bg-slate-100"
//               type="button"
//             >
//               Engineering Entrance
//             </button>
//             <button
//               className="rounded-md border border-slate-300 px-4 py-2 hover:bg-slate-100"
//               type="button"
//             >
//               Marketing
//             </button>
//             <button
//               className="rounded-md border border-slate-300 px-4 py-2 hover:bg-slate-100"
//               type="button"
//             >
//               Law, Arts, Commerce
//             </button>
//             <button
//               className="rounded-md border border-slate-300 px-4 py-2 hover:bg-slate-100"
//               type="button"
//             >
//               Civil Services
//             </button>

//             <button
//               className="rounded-md border border-slate-300 px-4 py-2 hover:bg-slate-100 flex items-center gap-2"
//               type="button"
//             >
//               <span className="bg-yellow-400 text-black text-[10px] font-semibold rounded-full px-2 py-[2px] select-none">
//                 NEW
//               </span>
//               Banking
//             </button>
//           </nav>
//           <section className="py-10">
//       <h3 className="text-xl font-semibold mb-6">Exams & Services</h3>

//       <Swiper
//         slidesPerView={"auto"}
//         spaceBetween={20}
//         pagination={{ clickable: true }}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
//         {exams.map((exam, index) => (
//           <SwiperSlide key={index} className="w-52 sm:w-48 md:w-52">
//             <div className="flex flex-col justify-between h-full rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 p-6 shadow-md">
//               <div className="mb-4">
//                 <h4 className="font-semibold text-slate-900 text-lg leading-tight">{exam}</h4>
//               </div>
//               <div className="flex justify-center items-center w-full h-24">
//                 {/* Exam SVG Icon */}
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="48"
//                   height="48"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="text-blue-600"
//                 >
//                   <path d="M4 4h16v2H4zM4 10h16v2H4zM4 16h16v2H4z" />
//                 </svg>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//         </main>
//       </div>
//     </>
//   );
// };

// export default ExploreOfferings;

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaShieldAlt } from "react-icons/fa";

const exams = [
  "Indian Army",
  "UPSC NDA",
  "UPSC CDS",
  "Territorial Army",
  "Coast Guard",
  "Sashastra Seema Bal (SSB)",
  "Intelligence Bureau",
  "Ind. Maritime - IMU CET (UG)",
  "Central Industrial Security Force (CISF)",
  "Central Reserve Police Force (CRPF)",
  "Central Armed Police Forces CAPF (AC)",
  "Border Security Force",
  "Indian Air Force (IAF)",
  "Indian Navy",
  "UP Police (UPP)",
  "Bihar Police",
  "Delhi Police",
  "Jharkhand Police",
  "Puducherry Police",
  "HP Police",
  "Madhya Pradesh Police",
  "Ladakh Police",
  "Assam Police",
  "Punjab Police",
];

const ExploreOfferings = () => {
  return (
    <div className="bg-white relative text-slate-900">
      <main className="max-w-7xl mx-auto px-6 sm:px-10 py-10">
        <h2 className="text-3xl font-semibold max-w-max mb-8">
          Explore all the exams
          <span className="text-[#FF6B4A] relative font-semibold pl-1">
            offerings
            <svg
              aria-hidden="true"
              className="absolute -bottom-1 left-0"
              fill="none"
              focusable="false"
              height="8"
              viewBox="0 0 90 8"
              width="90"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 6.5C15 6.5 30 0 45 0C60 0 75 6.5 90 6.5"
                stroke="#F9D54B"
                strokeLinecap="round"
                strokeWidth="4"
              ></path>
            </svg>
          </span>
        </h2>

        <nav className="flex relative flex-wrap gap-3 mb-12 text-sm font-normal text-slate-700">
          {[
            "Medical",
            "CUET",
            "SSC",
            "Defence & Police",
            "Engineering Entrance",
            "Marketing",
            "Law, Arts, Commerce",
            "Civil Services",
            "Banking",
          ].map((category, index) => (
            <button
              key={index}
              className={`rounded-md px-4 py-2 ${
                category === "Defence & Police"
                  ? "bg-slate-900 text-white font-semibold"
                  : "border border-slate-300 hover:bg-slate-100"
              }`}
              type="button"
            >
              {category === "Banking" ? (
                <span className="flex items-center gap-2">
                  <span className="bg-yellow-400 text-black text-[10px] font-semibold rounded-full px-2 py-[2px] select-none">
                    NEW
                  </span>
                  {category}
                </span>
              ) : (
                category
              )}
            </button>
          ))}
        </nav>

        <section className="py-10">
          <h3 className="text-xl font-semibold mb-6">Exams & Services</h3>

          <Swiper
            spaceBetween={20}
            pagination={{ clickable: true }}
            // modules={[Pagination]}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            className="mySwiper"
          >
            {exams.map((exam, index) => (
              <SwiperSlide key={index} className="w-60 sm:w-56 md:w-60">
                <div className="flex flex-col justify-between h-full rounded-xl bg-gradient-to-br from-red-100 to-red-200 p-6 shadow-lg transition-transform hover:scale-[1.03] duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <FaShieldAlt className="text-orange-600 text-2xl" />
                    <span className="text-xs bg-white text-orange-600 font-semibold px-2 py-1 rounded-full">
                      Defence
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-lg mb-2">
                    {exam}
                  </h4>
                  <p className="text-sm text-slate-700">
                    Get guidance, tips & mock tests from expert mentors.
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </main>
    </div>
  );
};

export default ExploreOfferings;
