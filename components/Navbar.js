import Link from "next/link";
// import { NavLink } from "./Navlink";

const Navbar = () => {
    return (
        <nav id="nav-container">
            <div className="menu-sticker">
                <Link href="/">
                    <picture>
                        <img
                            src="/images/rtxp-menu-sticker.svg"
                            alt="menu sticker"
                        />
                    </picture>
                </Link>
            </div>

            <div className="button-container font-face-at">
                <button>
                    <Link href="/experience" className="nav-item nav-link">
                        <h3>the experience</h3>
                    </Link>
                </button>
                <button>
                    <Link href="/tickets" className="btn-tickets">
                        <h3>tickets</h3>
                    </Link>
                </button>
                <button>
                    <Link href="/events" className="btn-events">
                        <h3>events</h3>
                    </Link>
                </button>
                <button>
                    <Link href="/about" className="btn-about">
                        <h3>about</h3>
                    </Link>
                </button>
                <button>
                    <Link href="/info" className="btn-info">
                        <h3>info</h3>
                    </Link>
                </button>
                <button>
                    <Link href="/shop" className="btn-shop">
                        <h3>shop</h3>
                    </Link>
                </button>
            </div>

            <div className="socials-container">
                <a href="https://www.facebook.com/profile.php?id=100084377228814" target="_blank" rel="noreferrer">
                    <picture>
                        <img
                            src="/images/facebook-logo.svg"
                            alt="facebook logo"
                        />
                    </picture>
                </a>
                <a href="https://www.instagram.com/rtxp_amsterdam/" target="_blank" rel="noreferrer">
                    <picture>
                        <img
                            src="/images/instagram-logo.svg"
                            alt="instagram logo"
                        />
                    </picture>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;