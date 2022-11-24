// import Link from "next/link";
// import { exact } from "prop-types";
// import styled from "styled-components";
// import { NavLink } from "../Navlink";

// const NavLinksContainer = styled.div`
//   position: absolute;
//   display: flex;
//   width: 65vw;
//   height: 6.5vh;
//   background-color: #ff70db;
// `;

// const LinksWrapper = styled.div`
//   margin: 0;
//   padding: 0;
//   display: flex;
//   justify-content: space-evenly;
//   width: 100%;
// `;

// const LinkItem = styled.button`
//   margin: 0;
//   padding: 0;
//   background: none;
//   border: none;
//   text-transform: uppercase;
//   cursor: pointer;
//   /* h3 {
//     font-family: "Atrament";
//     font-size: 31px;
//     font-weight: 600;
//     margin: 0;
//     padding: 0;
//     color: black;
//   }
//   &:hover {
//     filter: invert(1);
//     transition: 400ms ease-in-out;
//   } */
// `;

// const ButtonText = styled.h3`
//   font-family: "Atrament";
//   font-size: 31px;
//   font-weight: 600;
//   margin: 0;
//   padding: 0;
//   color: black;
//   &:hover {
//     filter: invert(1);
//     transition: 400ms ease-in-out;
//   }
// `;

// export function Navlinks(props) {
//   return (
//     <NavLinksContainer>
//       <LinksWrapper>
//         <LinkItem>
//           <NavLink href="/experience" className="btn-experience">
//             <ButtonText>the experience</ButtonText>
//           </NavLink>
//         </LinkItem>
//         <LinkItem>
//           <NavLink href="/tickets" className="btn-tickets">
//             <ButtonText>tickets</ButtonText>
//           </NavLink>
//         </LinkItem>
//         <LinkItem>
//           <NavLink href="/events" className="btn-events">
//             <ButtonText>events</ButtonText>
//           </NavLink>
//         </LinkItem>
//         <LinkItem>
//           <NavLink href="/about" className="btn-about">
//             <ButtonText>about</ButtonText>
//           </NavLink>
//         </LinkItem>
//         <LinkItem>
//           <NavLink href="/info" className="btn-info">
//             <ButtonText>info</ButtonText>
//           </NavLink>
//         </LinkItem>
//         <LinkItem>
//           <NavLink href="/shop" className="btn-shop">
//             <ButtonText>shop</ButtonText>
//           </NavLink>
//         </LinkItem>
//       </LinksWrapper>
//     </NavLinksContainer>
//   );
// }
