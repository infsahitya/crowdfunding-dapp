
export default function __aboutUs() {
  return (
    <div>
      <div className="container mx-auto px-4 text-gray-300">
      <div className="flex flex-wrap">
        <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-1 shadow-lg rounded-lg">
            <div className="px-4 flex-auto">
              {/* Content for the first section */}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center mt-16">
        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
          <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
            <i className="fas fa-user-friends text-xl"></i>
          </div>
          <h3 className="text-3xl mb-2 font-semibold leading-normal">
            Working with us is a pleasure
          </h3>
          <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
            Don't let your users guess by attaching tooltips and popovers to
            any element. Just make sure you enable them first via
            JavaScript.
          </p>
          <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
            The kit comes with three pre-built pages to help you get started
            faster. You can change the text and images and you're good to
            go. Just make sure you enable them first via JavaScript.
          </p>
          <a href="#" className="font-bold text-blueGray-700 mt-8">Check Notus JS!</a>
        </div>
        <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-2 shadow-lg rounded-lg bg-pink-500">
            <img alt="..." src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80" className="w-full align-middle rounded-t-lg" />
            <blockquote className="relative p-8 mb-4">
              <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" className="absolute left-0 w-full block h-95-px -top-94-px">
                <polygon points="-30,95 583,95 583,65" className="text-pink-500 fill-current"></polygon>
              </svg>
              <h4 className="text-xl font-bold text-white">
                Top Notch Services
              </h4>
              <p className="text-md font-light mt-2 text-white">
                The Arctic Ocean freezes every winter and much of the
                sea-ice then thaws every summer, and that process will
                continue whatever happens.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}
