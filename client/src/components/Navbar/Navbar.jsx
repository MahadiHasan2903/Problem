// import React, { useState, useEffect } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { logout } from "../../redux/actions";
// import { links } from "../../data";
// import "./Navbar.css";

// const Navbar = () => {
//   const [showMenu, setShowMenu] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Check if the user is logged in by checking the presence of the token in localStorage
//     const token = localStorage.getItem("token");
//     setIsLoggedIn(!!token);
//   }, []);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   const handleLogout = () => {
//     // Dispatch the logout action
//     dispatch(logout());
//     // Redirect to the home page or any other desired route
//     navigate("/");
//   };

//   let filteredLinks = links;

//   if (isLoggedIn) {
//     // Remove the "Login" button if the user is logged in
//     filteredLinks = links.filter((link) => link.name !== "Login");
//   } else {
//     // Remove the "logout" button if the user is not logged in
//     filteredLinks = links.filter((link) => link.name !== "logout");
//   }

//   return (
//     <nav className="nav">
//       <div className={`${showMenu ? "nav_menu show-menu" : "nav_menu"}`}>
//         <ul className="nav_list">
//           {filteredLinks.map(({ id, name, icon, path }) => (
//             <li className="nav_item" key={id}>
//               {name === "Logout" ? (
//                 <a className="nav_link" onClick={handleLogout}>
//                   {icon}
//                   <h3 className="nav_name">{name}</h3>
//                 </a>
//               ) : (
//                 <NavLink
//                   to={path}
//                   className={({ isActive }) =>
//                     isActive ? "nav_link active-nav" : "nav_link"
//                   }
//                   onClick={toggleMenu} // Close menu when a link is clicked
//                 >
//                   {icon}
//                   <h3 className="nav_name">{name}</h3>
//                 </NavLink>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div
//         className={`${showMenu ? "nav_toggle animate-toggle" : "nav_toggle"}`}
//         onClick={toggleMenu} // Toggle menu when the toggle icon is clicked
//       >
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/action/actions";
import { links } from "../../data";
import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   // Check if the user is logged in by checking the presence of the token in localStorage
  //   const token = localStorage.getItem("token");
  //   isAuthenticated(!!token);
  // }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    navigate("/");
  };

  let filteredLinks = links;

  if (isAuthenticated) {
    filteredLinks = links.filter((link) => link.name !== "Login");
  } else {
    filteredLinks = links.filter((link) => link.name !== "Logout");
  }

  return (
    <nav className="nav">
      <div className={`${showMenu ? "nav_menu show-menu" : "nav_menu"}`}>
        <ul className="nav_list">
          {filteredLinks.map(({ id, name, icon, path }) => (
            <li className="nav_item" key={id}>
              {name === "Logout" ? (
                <a className="nav_link" onClick={handleLogout}>
                  {icon}
                  <h3 className="nav_name">{name}</h3>
                </a>
              ) : (
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "nav_link active-nav" : "nav_link"
                  }
                  onClick={toggleMenu}
                >
                  {icon}
                  <h3 className="nav_name">{name}</h3>
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`${showMenu ? "nav_toggle animate-toggle" : "nav_toggle"}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
