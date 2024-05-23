
const CampaingCard = () => {
  return (
      <div className="relative mx-auto w-full">
        <a href="#" className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
          <div className="shadow p-4 rounded-lg bg-white">
            <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
              <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                <div className="absolute inset-0 bg-black opacity-10"></div>
              </div>

              <div className="absolute flex justify-center bottom-0 mb-3">
                <div className="flex bg-white px-4 py-1 space-x-5 rounded-lg overflow-hidden shadow">
                  <p className="flex items-center font-medium text-gray-800">
                    3 + 1
                  </p>

                  <p className="flex items-center font-medium text-gray-800">
                    2
                  </p>

                  <p className="flex items-center font-medium text-gray-800">
                    3
                  </p>
                </div>
              </div>

              <span className="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-red-500 text-sm font-medium text-white select-none">
                Featured
              </span>
            </div>

            <div className="mt-4">
              <h2 className="font-medium text-base md:text-lg text-gray-800 line-clamp-1" title="New York">
                Statue of Liberty
              </h2>
              <p className="mt-2 text-sm text-gray-800 line-clamp-1" title="New York, NY 10004, United States">
                New York, NY 10004, United States
              </p>
            </div>

            <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-8">
              <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                <span className="mt-2 xl:mt-0">
                  Condominium
                </span>
              </p>
              <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                <span className="mt-2 xl:mt-0">
                  Partly furnished
                </span>
              </p>
              <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                <span className="mt-2 xl:mt-0">
                  1,386 sq. ft.
                </span>
              </p>
              <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                <span className="mt-2 xl:mt-0">
                  $1.98 /sq.ft
                </span>
              </p>
            </div>

            <div className="grid grid-cols-2 mt-8">
              <div className="flex items-center">
                <div className="relative">
                  <div className="rounded-full w-6 h-6 md:w-8 md:h-8 bg-gray-200"></div>
                  <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-primary-red rounded-full"></span>
                </div>

                <p className="ml-2 text-gray-800 line-clamp-1">
                  John Doe
                </p>
              </div>

              <div className="flex justify-end">
                <p className="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl">
                  <span className="text-sm uppercase">
                    $
                  </span>
                  <span className="text-lg">3,200</span>/m
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
  );
};

export default CampaingCard;
