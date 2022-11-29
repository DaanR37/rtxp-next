// import React from "react";
// import useMediaQuery from "react-responsive";
// import Logo from "../Logo/Logo";
// import { DeviceSize } from "./Responsive";
// import { MobileNavlinks } from "./MobileNavlinks";
// import { Navlinks } from "./Navlinks";
// import { Socials } from "./Socials";

// export function Navbar(props) {
//     const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

//     return (
//         <nav className="navbar-container">
//             <div className="left-section">
//                 {!isMobile && <Logo />}
//                 {isMobile && <Socials />}
//             </div>
//             <div className="middle-section">
//                 <Navlinks />
//                 {/* {!isMobile && <Navlinks />} */}
//             </div>
//             <div className="right-section">
//                 <div className="when-its-desktop-right-section">
//                     {/* {!isMobile && <Socials />} */}
//                     <Socials />
//                 </div>
//                 <div className="when-its-mobile-right-section">
//                     {/* {isMobile && <MobileNavlinks />} */}
//                     <MobileNavlinks />
//                 </div>

//             </div>
//         </nav>
//     );
// }
