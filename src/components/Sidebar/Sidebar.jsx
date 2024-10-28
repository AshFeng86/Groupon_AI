import PropTypes from "prop-types";

const Sidebar = ({ isVisible, toggleSidebar }) => {
  return (
    <aside
      className={`${
        isVisible ? "w-64" : "w-16"
      } bg-white shadow-lg transition-all duration-300 overflow-hidden flex flex-col hidden md:flex`}
    >
      {/* Toggle Button and Header */}
      <div className="flex items-center justify-between p-4">
        <h2
          className={`text-lg font-bold text-gray-700 ${
            isVisible ? "block" : "hidden"
          }`}
        >
          User@Instalily
        </h2>
        <button
          onClick={toggleSidebar}
          className="bg-green-600 text-white p-2 rounded-lg shadow-md transition-transform duration-300"
        >
          {isVisible ? "←" : "→"}
        </button>
      </div>

      {/* Sidebar Content */}
      <div className="flex flex-col flex-grow">
        {/* Main menu items */}
        <ul
          className={`space-y-3 p-4 ${
            isVisible ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300`}
        >
          <li className="text-gray-700 hover:text-green-600 cursor-pointer">
            Cart
          </li>
          <li className="text-gray-700 hover:text-green-600 cursor-pointer">
            Wish List
          </li>
          <li className="text-gray-700 hover:text-green-600 cursor-pointer">
            Deals
          </li>
          <li className="text-gray-700 hover:text-green-600 cursor-pointer">
            Profile
          </li>
        </ul>
      </div>

      {/* Logout button at the bottom */}
      {isVisible && (
        <div className="p-4">
          <button className="text-gray-700 hover:text-red-600 cursor-pointer w-full text-left">
            Logout
          </button>
        </div>
      )}
    </aside>
  );
};

Sidebar.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
