import React, { useState } from "react";
import Link from "next/link";
import NavItem from "./NavItem";
import { Socials } from "./Socials";
import Image from "next/image";

const MENU_LIST = [
  {
    text: "the experience",
    href: "/experience",
  },
  {
    text: "tickets",
    href: "/tickets",
  },
  {
    text: "events",
    href: "/events",
  },
  {
    text: "about",
    href: "/about",
  },
  {
    text: "info",
    href: "/info",
  },
  {
    text: "shop",
    href: "/shop",
  },
];

const NavBar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <div className="menu-sticker">
        <Link onClick={() => setActiveIdx(-1)} href={"/"}>
          <Image
            src="/images/rtxp-menu-sticker.svg"
            alt="menu sticker"
            className="image"
            width={250}
            height={150}
          />
        </Link>
      </div>

      <nav className="nav-container">
        <div
          onClick={() => setNavActive(!navActive)}
          className={`${navActive ? "active" : ""} 
          nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div
          className={`${navActive ? "active" : ""} 
        nav__menu-list`}
        >
          <div className="mobile-menu-logo">
            <Link onClick={() => setActiveIdx(-1)} href={"/"}>
              <Image
                src="/images/rtxp-main-logo.svg"
                alt="rtxp logo"
                className="image"
                width={250}
                height={150}
              />
            </Link>
          </div>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
      <div className="socials-icons">
        <Socials />
      </div>
    </header>
  );
};

export default NavBar;
