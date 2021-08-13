import { NavLink } from "react-router-dom";

interface MyProps {}
const defaultProps: MyProps = {};
const Navbar = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const {} = props;
  return (
    <>
      <nav className="bg-gray-800">
        <div className="px-2 mx-auto max-w-8xl sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            {/* button */}
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              ></button>
            </div>

            <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
              <div className="flex items-center flex-shrink-0"></div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <NavLink
                    // activeClassName="bg-gray-900"
                    to="/"
                    className="px-3 py-2 text-sm font-medium text-white rounded-md"
                    aria-current="page"
                  >
                    HeroesApp
                  </NavLink>

                  <NavLink
                    activeClassName="bg-gray-900"
                    to="/marvel"
                    className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                  >
                    Marvel
                  </NavLink>

                  <NavLink
                    activeClassName="bg-gray-900"
                    to="/dc"
                    className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                  >
                    DC
                  </NavLink>
                  <NavLink
                    activeClassName="bg-gray-900"
                    to="/search"
                    className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                  >
                    Search
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <NavLink
                to="/login"
                className="px-3 py-2 font-bold text-white duration-75 ease-out delay-75 transform scale-100 bg-green-600 rounded-full active:scale-75 active:bg-green-800 "
              >
                Logout
              </NavLink>
            </div>
          </div>
        </div>
        {/* mobile menu */}
        <div className="sm:hidden " id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink
              to="/"
              className="block px-3 py-2 text-base font-medium text-white rounded-md"
              aria-current="page"
            >
              HeroesApp
            </NavLink>

            <NavLink
              activeClassName="bg-gray-900"
              to="/marvel"
              className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
            >
              Marvel
            </NavLink>

            <NavLink
              activeClassName="bg-gray-900"
              to="/dc"
              className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
            >
              DC
            </NavLink>

            <NavLink
              activeClassName="bg-gray-900"
              to="/search"
              className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
            >
              Search
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
