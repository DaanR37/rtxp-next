import React from "react";
import Link from "next/link";

export function Socials(props) {
  return (
    <div className="socials-container">
      <Link
        href="https://www.facebook.com/profile.php?id=100084377228814"
        target="_blank"
        rel="noreferrer"
      >
        <picture>
          <img src="images/facebook-logo.svg" alt="facebook logo" />
        </picture>
      </Link>
      <Link
        href="https://www.instagram.com/rtxp_amsterdam/"
        target="_blank"
        rel="noreferrer"
      >
        <picture>
          <img src="images/instagram-logo.svg" alt="instagram logo" />
        </picture>
      </Link>
    </div>
  );
}
