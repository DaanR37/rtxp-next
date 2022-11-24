// import React from "react";
// import { useMediaQuery } from "react-responsive";
// import { Logo } from "../Logo";
// import { DeviceSize } from "../Responsive/Responsive";
// import { MobileNavlinks } from "./MobileNavlinks";
// import { Navlinks } from "./Navlinks";
// import { Socials } from "./Socials";

// const NavBarContainer = styled.div`
//   position: absolute;
//   display: flex;
//   width: 100%;
//   margin-top: 50px;
//   z-index: 1;
// `;

// const LeftSection = styled.div`
//   display: flex;
// `;
// const MiddleSection = styled.div`
//   display: flex;
//   justify-content: center;
//   flex: 2;
// `;

// const RightSection = styled.div`
//   display: flex;
// `;

// export function Navbar(props) {
//   const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

//   return (
//     <NavBarContainer>
//       <LeftSection>
//         {!isMobile && <Logo />}
//         {/* {isMobile && <Socials />} */}
//       </LeftSection>
//       <MiddleSection>{!isMobile && <Navlinks />}</MiddleSection>
//       <RightSection>
//         {!isMobile && <Socials />}
//         {isMobile && <MobileNavlinks />}
//       </RightSection>
//     </NavBarContainer>
//   );
// }
