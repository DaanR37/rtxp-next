// import Navbar from "./Navbar";
import NavBar from "./navbar/NavBar";

const Layout = ({ children }) => {
    return (
        <>
            {/* <Navbar /> */}
            <NavBar />
            {children}
        </>
    );
}

export default Layout;