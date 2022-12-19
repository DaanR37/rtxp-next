import React, { useState } from "react";
import Link from "next/link";
import NavItem from "./NavItem";
import { Socials } from "./Socials";
import Image from "next/image";

import { useRouter } from "next/router";

const MENU_LIST = [
  {
    text: "the experience",
    href: "/experience",
  },
  {
    text: "tickets",
    href: "https://tickets.rtxp.nl/nl/tickets/",
    target: "_blank",
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
  const { locale, locales, asPath } = useRouter();

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
            priority={true}
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
            <Link
              onClick={(idx) => {
                setActiveIdx(idx), setNavActive(false);
              }}
              href={"/"}
            >
              <Image
                src="/images/rtxp-main-logo.svg"
                alt="rtxp logo"
                className="image"
                width={250}
                height={150}
                priority={true}
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

        <div className="navbar-i18">
          {locales.map((l, i) => {
            return (
              <span key={i} className={l === locale ? "selected" : ""}>
                <Link href={asPath} locale={l}>
                  {l}
                </Link>
              </span>
            );
          })}
        </div>
        <div className="socials-icons">
          <Socials />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
