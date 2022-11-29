// import Link from "next/link";
import React from "react";
import { NavLink } from "./Navlink";

const NavItem = ({ href, text, active }) => {
  return (
    <NavLink
      href={href}
      className={`
              nav__link ${active ? "active" : ""}
          `}
    >
      {text}
    </NavLink>
  );
};

export default NavItem;

// const NavItem = ({ href, text, active }) => {
//   return (
//     <NavLink
//       href={href}
//       className={`
//               nav__link ${active ? "active" : ""}
//           `}
//     >
//       {text}
//     </NavLink>
//   );
// };

// export default NavItem;
