const ExploreOfferings = () => {
  return (
    <>
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
            <button
              className="rounded-md border border-slate-300 px-4 py-2 hover:bg-slate-100"
              type="button"
            >
              Medical
            </button>
            <button
              className="rounded-md border border-slate-300 px-4 py-2 hover:bg-slate-100"
              type="button"
            >
              CUET
            </button>
            <button
              className="rounded-md border border-slate-300 px-4 py-2 hover:bg-slate-100"
              type="button"
            >
              SSC
            </button>
            <button
              className="rounded-md bg-slate-900 text-white px-4 py-2 font-semibold"
              type="button"
            >
              Defence & Police
            </button>
            <button
              className="rounded-md border border-slate-300 px-4 py-2 hover:bg-slate-100"
              type="button"
            >
              Engineering Entrance
            </button>
            <button
              className="rounded-md border border-slate-300 px-4 py-2 hover:bg-slate-100"
              type="button"
            >
              Marketing
            </button>
            <button
              className="rounded-md border border-slate-300 px-4 py-2 hover:bg-slate-100"
              type="button"
            >
              Law, Arts, Commerce
            </button>
            <button
              className="rounded-md border border-slate-300 px-4 py-2 hover:bg-slate-100"
              type="button"
            >
              Civil Services
            </button>
            <button
              className="rounded-md border border-slate-300 px-4 py-2 hover:bg-slate-100"
              type="button"
            >
              Management
            </button>

            <button
              className="rounded-md border border-slate-300 px-4 py-2 hover:bg-slate-100 flex items-center gap-2"
              type="button"
            >
              <span className="bg-yellow-400 text-black text-[10px] font-semibold rounded-full px-2 py-[2px] select-none">
                NEW
              </span>
              Banking
            </button>
          </nav>
          <section>
            <br />
            <h3 className="text-xl font-semibold mb-6">Study Materials</h3>

            <div className="flex box_slider relative  whitespace-nowrap scroll-smooth duration-300 overflow-x-scroll  box-border  gap-6 lg:max-w-[77vw] max-w-[90vw]">
              <div className="flex flex-col justify-between rounded-lg bg-[#C6D9FF] p-6 w-52 sm:w-48 md:w-52">
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg leading-tight">
                    Sample
                  </h4>
                  <p className="text-slate-900 text-base leading-tight">
                    question papers
                  </p>
                </div>
                <div className="relative mt-4 w-full h-28 rounded-full overflow-hidden">
                  <img
                    alt="Sample question papers documents inside a circle with light blue background"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2"
                    height="150"
                    loading="lazy"
                    src="https://storage.googleapis.com/a1aa/image/8b39dee0-a941-4e9a-155e-58c92b739f89.jpg"
                    width="150"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-lg bg-[#C9FFF0] p-6 w-52 sm:w-48 md:w-52">
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg leading-tight">
                    NCERT
                  </h4>
                  <p className="text-slate-900 text-base leading-tight">
                    Books
                  </p>
                </div>
                <div className="relative mt-4 w-full h-28 rounded-full overflow-hidden">
                  <img
                    alt="NCERT books inside a circle with light green background"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2"
                    height="150"
                    loading="lazy"
                    src="https://storage.googleapis.com/a1aa/image/d79b7256-710c-4175-8a8a-0de45e4eddd2.jpg"
                    width="150"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-lg bg-[#E3D9FF] p-6 w-52 sm:w-48 md:w-52">
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg leading-tight">
                    Important
                  </h4>
                  <p className="text-slate-900 text-base leading-tight">
                    question papers
                  </p>
                </div>
                <div className="relative mt-4 w-full h-28 rounded-full overflow-hidden">
                  <img
                    alt="Important question papers documents inside a circle with light purple background"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2"
                    height="150"
                    loading="lazy"
                    src="https://storage.googleapis.com/a1aa/image/b4cf2b12-54eb-4834-0a9b-d1ce921f496f.jpg"
                    width="150"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-lg bg-[#FFD7D7] p-6 w-52 sm:w-48 md:w-52">
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg leading-tight">
                    Revision
                  </h4>
                  <p className="text-slate-900 text-base leading-tight">
                    notes
                  </p>
                </div>
                <div className="relative mt-4 w-full h-28 rounded-full overflow-hidden">
                  <img
                    alt="Revision notes documents inside a circle with light red background"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2"
                    height="150"
                    loading="lazy"
                    src="https://storage.googleapis.com/a1aa/image/0ed924d5-700c-4135-97d0-e90ed689af8f.jpg"
                    width="150"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-lg bg-[#F9E6B3] p-6 w-52 sm:w-48 md:w-52">
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg leading-tight">
                    General
                  </h4>
                  <p className="text-slate-900 text-base leading-tight">
                    Knowledge
                  </p>
                </div>
                <div className="relative mt-4 w-full h-28 rounded-full overflow-hidden">
                  <img
                    alt="General knowledge documents inside a circle with light yellow background"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2"
                    height="150"
                    loading="lazy"
                    src="https://storage.googleapis.com/a1aa/image/ad6a5322-8e49-4f5c-345f-8b8387cbe9c7.jpg"
                    width="150"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-between rounded-lg bg-[#d52b9492] p-6 w-52 sm:w-48 md:w-52">
                <div>
                  <h4 className="font-semibold text-slate-900 text-lg leading-tight">
                    General
                  </h4>
                  <p className="text-slate-900 text-base leading-tight">
                    Knowledge
                  </p>
                </div>
                <div className="relative mt-4 w-full h-28 rounded-full overflow-hidden">
                  <img
                    alt="General knowledge documents inside a circle with light yellow background"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2"
                    height="150"
                    loading="lazy"
                    src="https://storage.googleapis.com/a1aa/image/ad6a5322-8e49-4f5c-345f-8b8387cbe9c7.jpg"
                    width="150"
                  />
                </div>
              </div>
            </div>
            {/* ///slide button */}
            <button
              onClick={() => {
                const box = document.querySelector(".box_slider");
                if (box) {
                  box.scrollLeft -= 150;
                }
              }}
              className="w-8  left-[60%]  sm:top-[40%] top-[45%] absolute h-8 rounded-full bg-black text-white flex justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-left-icon lucide-chevron-left"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            <button
              onClick={() => {
                const box = document.querySelector(".box_slider");
                if (box) {
                  box.scrollLeft += 150;
                }
              }}
              className="w-8  right-[15%]  sm:top-[40%] top-[45%] absolute h-8 rounded-full text-white bg-black flex justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-right-icon lucide-chevron-right"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
            {/* ///// */}
          </section>
        </main>
      </div>
    </>
  );
};

export default ExploreOfferings;
