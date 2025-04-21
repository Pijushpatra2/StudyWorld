const CoursesKind = () => {
  return (
    <>
      <div className="bg-[#F5F5F0]">
        <section className="max-w-[1200px] mx-auto px-6 py-10 flex flex-col lg:flex-row lg:items-center lg:gap-10">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">
              Courses for
              <span className="text-orange-500 underline decoration-yellow-400 decoration-4 underline-offset-4 font-bold pl-1">
                kids
              </span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl">
              {/* Card 1  */}
              <div className="bg-[#FFEEE9] rounded-xl p-6 relative">
                <span className="absolute top-4 left-4 bg-[#FF6B5F] text-white text-xs font-semibold px-2.5 py-0.5 rounded-full select-none">
                  NEW
                </span>
                <div className="flex items-center gap-4 mb-3">
                  <img
                    alt="Icon of a sun with rays representing spoken English program"
                    className="w-12 h-12 rounded-sm"
                    height="48"
                    src="https://storage.googleapis.com/a1aa/image/8d876911-eab0-43bf-bafc-4609b0cc6098.jpg"
                    width="48"
                  />
                  <p className="text-sm font-semibold text-[#5B6CE2]">
                    ClassNaclassName 1 - 6
                  </p>
                </div>
                <h3 className="font-semibold text-slate-900 mb-1 text-base">
                  Spoken English Program
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-5 max-w-[220px]">
                  Master fluency in English speaking
                </p>
                <button className="bg-slate-900 text-white text-sm font-semibold rounded-md px-5 py-2 hover:bg-slate-800 transition">
                  Explore
                </button>
              </div>
              {/* Card 2  */}
              <div className="bg-[#FFF2CC] rounded-xl p-6 relative">
                <div className="flex items-center gap-4 mb-3">
                  <img
                    alt="Icon of a speech bubble with letters Aa representing English learning"
                    className="w-12 h-12 rounded-sm"
                    height="48"
                    src="https://storage.googleapis.com/a1aa/image/cafe5a59-b47a-48d0-fcee-9caad88704f3.jpg"
                    width="48"
                  />
                  <p className="text-sm font-semibold text-[#3B82F6]">
                    ClassNaclassName LKG - 5
                  </p>
                </div>
                <h3 className="font-semibold text-slate-900 mb-1 text-base">
                  Learn English
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-5 max-w-[220px]">
                  Level based holistic English Program
                </p>
                <button className="bg-slate-900 text-white text-sm font-semibold rounded-md px-5 py-2 hover:bg-slate-800 transition">
                  Explore
                </button>
              </div>
              {/* Card 3  */}
              <div className="bg-[#E6F4F1] rounded-xl p-6 relative">
                <div className="flex items-center gap-4 mb-3">
                  <img
                    alt="Icon of a calculator representing math learning"
                    className="w-12 h-12 rounded-sm"
                    height="48"
                    src="https://storage.googleapis.com/a1aa/image/765b2701-76ac-4677-f29c-45d15d0084d0.jpg"
                    width="48"
                  />
                  <p className="text-sm font-semibold text-[#FF6B5F]">
                    ClassNaclassName 1 to 5
                  </p>
                </div>
                <h3 className="font-semibold text-slate-900 mb-1 text-base">
                  Learn math
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-5 max-w-[220px]">
                  Turn your child into a Math wizard
                </p>
                <button className="bg-slate-900 text-white text-sm font-semibold rounded-md px-5 py-2 hover:bg-slate-800 transition">
                  Explore
                </button>
              </div>
              {/* Card 4  */}
              <div className="bg-[#E6F4F1] rounded-xl p-6 relative">
                <div className="flex items-center gap-4 mb-3">
                  <img
                    alt="Icon of a girl coding with a rocket representing coding classNamees"
                    className="w-12 h-12 rounded-sm"
                    height="48"
                    src="https://storage.googleapis.com/a1aa/image/ea7d37b5-38e1-43ae-bef2-32f182c6684d.jpg"
                    width="48"
                  />
                  <p className="text-sm font-semibold text-[#5B6CE2]">
                    ClassNaclassName 1 - 8
                  </p>
                </div>
                <h3 className="font-semibold text-slate-900 mb-1 text-base">
                  Coding classNamees
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-5 max-w-[220px]">
                  Learn to build apps and games, be future ready
                </p>
                <button className="bg-slate-900 text-white text-sm font-semibold rounded-md px-5 py-2 hover:bg-slate-800 transition">
                  Explore
                </button>
              </div>
            </div>
          </div>
          <div className="flex-1 mt-10 lg:mt-0 flex justify-center">
            <img
              alt="Smiling girl with pigtails wearing glasses holding an orange notebook and blue marker with colorful educational icons around her"
              className="w-[400px] h-[400px] object-contain"
              height="400"
              src="https://storage.googleapis.com/a1aa/image/0c7fa1f7-3448-47af-3e46-bae9a8c03fac.jpg"
              width="400"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default CoursesKind;
