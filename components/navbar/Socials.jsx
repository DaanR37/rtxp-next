import React from "react";
import Link from "next/link";
import Image from "next/image";

export function Socials(props) {
  return (
    <div className="socials-container">
      <Link
        href="https://www.facebook.com/profile.php?id=100084377228814"
        target="_blank"
        rel="noreferrer"
      >
        <div className="facebook-container">
          <Image
            src="/images/facebook-logo.svg"
            alt="facebook logo"
            className="image"
            width={250}
            height={150}
          />
        </div>
      </Link>
      <Link
        href="https://www.instagram.com/rtxp_amsterdam/"
        target="_blank"
        rel="noreferrer"
      >
        <div className="instagram-container">
          <Image
            src="/images/instagram-logo.svg"
            alt="instagram logo"
            className="image"
            width={250}
            height={150}
          />
        </div>
      </Link>
    </div>
  );
}
