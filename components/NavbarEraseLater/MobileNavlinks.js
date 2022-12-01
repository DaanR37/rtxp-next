// // import Link from "next/link";
// // import { exact } from "prop-types";
// import { useState } from "react";
// import { NavLink } from "../Navlink";
// import { MenuToggle } from "./MenuToggle";


// export function MobileNavlinks(props) {
//     const [isOpen, setOpen] = useState(false);

//     return (
//         <div className="nav-links-container-mobile">
//             <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
//             {isOpen && (
//                 <div className="links-wrapper-mobile">
//                     <button>
//                         <NavLink
//                             href="/experience"
//                             className="btn-experience"
//                         >
//                             <h3>the experience</h3>
//                         </NavLink>
//                     </button>
//                     <button>
//                         <NavLink href="/tickets" className="btn-tickets">
//                             <h3>tickets</h3>
//                         </NavLink>
//                     </button>
//                     <button>
//                         <NavLink href="/events" className="btn-events">
//                             <h3>events</h3>
//                         </NavLink>
//                     </button>
//                     <button>
//                         <NavLink href="/about" className="btn-about">
//                             <h3>about</h3>
//                         </NavLink>
//                     </button>
//                     <button>
//                         <NavLink href="/info" className="btn-info">
//                             <h3>info</h3>
//                         </NavLink>
//                     </button>
//                     <button>
//                         <NavLink href="/shop" className="btn-shop">
//                             <h3>shop</h3>
//                         </NavLink>
//                     </button>
//                     <div className="marginer" />
//                 </div>
//             )}
//             ;
//         </div>
//     );
// }
