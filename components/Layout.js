// import { Navbar } from "./Navbar/Index";

import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return (
        <>
            {/* <Navbar /> */}
            <Navbar />
            {children}
        </>
    );
}

export default Layout;