const Footer = () => {
  return (
    <section className="bg-primary">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          <div className="px-5 py-2">
            <a
              href="#"
              className="text-base leading-6 text-gray-900 hover:text-gray-900"
            >
              Home
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="#"
              className="text-base leading-6 text-gray-900 hover:text-gray-900"
            >
              Campaings
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="#"
              className="text-base leading-6 text-gray-900 hover:text-gray-900"
            >
              About
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="#"
              className="text-base leading-6 text-gray-900 hover:text-gray-900"
            >
              Contact
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="#"
              className="text-base leading-6 text-gray-900 hover:text-gray-900"
            >
              Terms & Policy
            </a>
          </div>
        </nav>
        {/* <div className="flex justify-center mt-8 space-x-6">
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Facebook</span>
            <img src="" alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Instagram</span>
            <img src="" alt="Instagram" className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Twitter</span>
            <img src="" alt="Twitter" className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">GitHub</span>
            <img src="" alt="GitHub" className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">Dribbble</span>
            <img src="" alt="Dribbble" className="w-6 h-6" />
          </a>
        </div> */}
        <p className="mt-8 text-base leading-6 text-center text-gray-700">
          © 2021 SomeCompany, Inc. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
